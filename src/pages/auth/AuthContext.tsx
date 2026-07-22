import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type UserRole = 'employee' | 'owner' | 'manager';

export interface AuthUser {
  role: UserRole;
  name: string;
  phone?: string;
  username?: string;
  email?: string;
  salonName?: string;
  branch?: string;
}

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  loginStaff: (phone: string, name?: string) => void;
  loginOwner: (username: string, details?: Partial<AuthUser>) => void;
  loginManager: (username: string, details?: Partial<AuthUser>) => void;
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

  const loginStaff = (phone: string, name?: string) => {
    const newUser: AuthUser = {
      role: 'employee',
      name: name,
      phone,
    };
    setUser(newUser);
  };

  const loginOwner = (username: string, details?: Partial<AuthUser>) => {
    const newUser: AuthUser = {
      role: 'owner',
      name: details?.name,
      username,
      email: details?.email,
      salonName: details?.salonName,
    };
    setUser(newUser);
  };

  const loginManager = (username: string, details?: Partial<AuthUser>) => {
    const newUser: AuthUser = {
      role: 'manager',
      name: details?.name,
      username,
      email: details?.email,
      branch: details?.branch,
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
