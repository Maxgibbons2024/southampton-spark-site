import api from '../lib/api';

export interface GalleryImage {
  id?: number;
  title: string;
  description?: string;
  category: string;
  image_path?: string;
  before_image_path?: string;
  after_image_path?: string;
  is_before_after: boolean;
  created_at?: string;
  updated_at?: string;
}

export const galleryService = {
  getAll: async (category?: string): Promise<GalleryImage[]> => {
    const response = await api.get(`/gallery${category ? `?category=${category}` : ''}`);
    return response.data;
  },

  getById: async (id: number): Promise<GalleryImage> => {
    const response = await api.get(`/gallery/${id}`);
    return response.data;
  },

  create: async (formData: FormData): Promise<GalleryImage> => {
    const response = await api.post('/gallery', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data.image;
  },

  update: async (id: number, formData: FormData): Promise<GalleryImage> => {
    const response = await api.put(`/gallery/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data.image;
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/gallery/${id}`);
  },

  getImageUrl: (filename: string): string => {
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    return `${baseUrl}/uploads/gallery/${filename}`;
  }
};