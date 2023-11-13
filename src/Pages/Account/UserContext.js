// UserContext.js
import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
};

const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const setUser = (user) => {
    dispatch({ type: 'SET_USER', payload: user });
  };

  const userReducer = (state, action) => {
    switch (action.type) {
      case 'SET_USER':
        const newState = { ...state, user: action.payload };
        localStorage.setItem('user', JSON.stringify(newState.user));
        return newState;
      default:
        return state;
    }
  };

  const contextValue = {
    user: state.user,
    setUser,
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
  