import api from '../lib/api';

export interface Review {
  id?: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  service?: string;
  created_at?: string;
  updated_at?: string;
}

export const reviewService = {
  getAll: async (): Promise<Review[]> => {
    const response = await api.get('/reviews');
    return response.data;
  },

  getById: async (id: number): Promise<Review> => {
    const response = await api.get(`/reviews/${id}`);
    return response.data;
  },

  create: async (review: Omit<Review, 'id' | 'created_at' | 'updated_at'>): Promise<Review> => {
    const response = await api.post('/reviews', review);
    return response.data.review;
  },

  update: async (id: number, review: Partial<Review>): Promise<Review> => {
    const response = await api.put(`/reviews/${id}`, review);
    return response.data.review;
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/reviews/${id}`);
  }
};