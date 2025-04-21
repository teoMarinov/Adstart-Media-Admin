/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, ReactNode } from 'react';
import axiosInstance from '../config/axios';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  user: { username: string } | null;
  login: (credentials: { username: string; password: string }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ username: string } | null>(() => {
    const storedToken = sessionStorage.getItem('token');
    const storedUsername = sessionStorage.getItem('username');
    return storedToken && storedUsername ? { username: storedUsername } : null;
  });

  const navigate = useNavigate();

  const login = async (credentials: { username: string; password: string }) => {
    const response = await axiosInstance.post('/auth/login', credentials);
    const { token, username } = response.data.data;

    sessionStorage.setItem('token', token);
    sessionStorage.setItem('username', username);

    setUser({ username });
  };

  const logout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    setUser(null);
    navigate('/auth');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
