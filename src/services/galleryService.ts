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

// Temporary sample data for new project images
const sampleImages: GalleryImage[] = [
  {
    id: 9001,
    title: "Modern Kitchen Installation",
    description: "Complete electrical installation for a luxury modern kitchen featuring pendant lighting, under-cabinet LED strips, and premium appliance connections. White shaker-style cabinets with marble backsplash.",
    category: "lighting",
    image_path: "/project-images/modern-kitchen.jpg",
    is_before_after: false,
    created_at: new Date().toISOString(),
  },
  {
    id: 9002,
    title: "Loft En-Suite Bathroom",
    description: "Sophisticated electrical work for a loft conversion bathroom featuring LED strip lighting, ceiling spotlights, and heated towel rail connections. Modern grey tiling with premium fixtures.",
    category: "lighting",
    image_path: "/project-images/loft-bathroom.jpg",
    is_before_after: false,
    created_at: new Date().toISOString(),
  },
  {
    id: 9003,
    title: "Luxury Bathroom Suite",
    description: "High-end bathroom electrical installation including LED strip lighting, mirror illumination, and walk-in shower electrics. Premium textured tiles with floating vanity setup.",
    category: "lighting",
    image_path: "/project-images/luxury-bathroom.jpg",
    is_before_after: false,
    created_at: new Date().toISOString(),
  },
];

export const galleryService = {
  getAll: async (category?: string): Promise<GalleryImage[]> => {
    try {
      const response = await api.get(`/gallery${category ? `?category=${category}` : ''}`);
      const serverImages = response.data || [];
      
      // Combine server images with sample images
      const allImages = [...serverImages, ...sampleImages];
      
      // Filter by category if specified
      if (category) {
        return allImages.filter(img => img.category === category);
      }
      
      return allImages;
    } catch (error) {
      console.warn('Server images unavailable, showing sample images only:', error);
      // Fallback to sample images if server is unavailable
      if (category) {
        return sampleImages.filter(img => img.category === category);
      }
      return sampleImages;
    }
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
    // Handle local project images
    if (filename.startsWith('/project-images/')) {
      return filename;
    }
    
    // Handle server images
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    return `${baseUrl}/uploads/gallery/${filename}`;
  }
};