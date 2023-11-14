// UserContext.js
import React, { createContext, useContext, useReducer } from 'react';

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      if (action.payload) {
        const newState = { ...state, user: action.payload };
        localStorage.setItem('user', JSON.stringify(newState.user));
        return newState;
      }
      return state;
    case 'SET_TOKEN':
      if (action.payload) {
        const newTokenState = { ...state, token: action.payload };
        localStorage.setItem('token', newTokenState.token);
        return newTokenState;
      }
      return state;
    case 'LOGOUT':
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      return { user: null, token: null };
    default:
      return state;
  }
};

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null,
};

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const setUser = (user) => {
    dispatch({ type: 'SET_USER', payload: user });
  };

  const setToken = (token) => {
    dispatch({ type: 'SET_TOKEN', payload: token });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const contextValue = {
    user: state.user,
    token: state.token,
    setUser,
    setToken,
    logout,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const isAuthenticated = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  return user !== null && user !== undefined && token !== null && token !== undefined;
};
