import React, { createContext } from 'react';

/**
 * Auth Context Placeholder
 */
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthContext;

