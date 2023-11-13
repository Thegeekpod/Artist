// UserContext.js
import React, { createContext, useContext, useReducer, useState, useEffect } from 'react';

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      const newState = { ...state, user: action.payload };
      localStorage.setItem('user', JSON.stringify(newState.user));
      return newState;
    case 'SET_TOKEN':
      const newTokenState = { ...state, token: action.payload };
      localStorage.setItem('token', newTokenState.token);
      return newTokenState;
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

  const contextValue = {
    user: state.user,
    token: state.token,
    setUser,
    setToken,
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



// UserContext.js
// ... (previous code)

export const isAuthenticated = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user !== null && user !== undefined;
};

// ... (rest of the code remains the same)
