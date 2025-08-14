import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabaseAuthService } from '../services/supabaseAuthService';

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: { id: string; email: string } | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const SupabaseAuthContext = createContext<AuthContextType | undefined>(undefined);

export const useSupabaseAuth = () => {
  const context = useContext(SupabaseAuthContext);
  if (context === undefined) {
    throw new Error('useSupabaseAuth must be used within a SupabaseAuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const SupabaseAuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ id: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check initial auth state
    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabaseAuthService.onAuthStateChange(
      async (event, session) => {
        if (session) {
          setIsAuthenticated(true);
          setUser({
            id: session.user.id,
            email: session.user.email || '',
          });
        } else {
          setIsAuthenticated(false);
          setUser(null);
        }
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const checkAuth = async () => {
    try {
      const isAuth = await supabaseAuthService.isAuthenticated();
      if (isAuth) {
        const currentUser = await supabaseAuthService.getUser();
        if (currentUser) {
          setIsAuthenticated(true);
          setUser({
            id: currentUser.id,
            email: currentUser.email || '',
          });
        }
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials: LoginCredentials) => {
    const response = await supabaseAuthService.login(credentials);
    setIsAuthenticated(true);
    setUser(response.user);
  };

  const logout = async () => {
    await supabaseAuthService.logout();
    setIsAuthenticated(false);
    setUser(null);
  };

  const value = {
    isAuthenticated,
    user,
    login,
    logout,
    loading,
  };

  return (
    <SupabaseAuthContext.Provider value={value}>
      {children}
    </SupabaseAuthContext.Provider>
  );
};