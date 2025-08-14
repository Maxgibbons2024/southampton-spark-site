import api from '../lib/api';

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  token: string;
  user: {
    id: number;
    username: string;
  };
}

export const authService = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('admin_token');
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('admin_token');
  },

  getToken: (): string | null => {
    return localStorage.getItem('admin_token');
  },

  setToken: (token: string): void => {
    localStorage.setItem('admin_token', token);
  }
};