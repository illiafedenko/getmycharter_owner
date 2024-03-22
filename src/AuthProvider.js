import React, {createContext, useState, useEffect} from 'react';
import {useMutation} from 'react-query';
export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [data, setData] = useState();
  
  return (
    <AuthContext.Provider
      value={{
        data,
        send: async params => {},
      }}>
      {children}
    </AuthContext.Provider>
  );
};
