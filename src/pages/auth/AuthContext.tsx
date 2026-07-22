import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type UserRole = 'employee' | 'owner' | 'manager';

export interface AuthUser {
  role: UserRole;
  name: string;
  phone?: string;
  username?: string;
}

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  loginStaff: (phone: string) => void;
  loginOwner: (username: string) => void;
  loginManager: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = 'estetica_auth_user';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  const loginStaff = (phone: string) => {
    const newUser: AuthUser = {
      role: 'employee',
      name: 'Staff Employee',
      phone,
    };
    setUser(newUser);
  };

  const loginOwner = (username: string) => {
    const newUser: AuthUser = {
      role: 'owner',
      name: username ? username : 'Studio Owner',
      username,
    };
    setUser(newUser);
  };

  const loginManager = (username: string) => {
    const newUser: AuthUser = {
      role: 'manager',
      name: username ? username : 'Store Manager',
      username,
    };
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loginStaff,
        loginOwner,
        loginManager,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
