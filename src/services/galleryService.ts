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
  {
    id: 9004,
    title: "Basement Conversion Lighting",
    description: "Professional electrical installation for basement conversion featuring recessed ceiling spotlights, brick wall accent lighting, and complete power distribution. Creating functional living space from unused basement.",
    category: "lighting",
    image_path: "/project-images/basement-lighting-conversion.jpg",
    is_before_after: false,
    created_at: new Date().toISOString(),
  },
  {
    id: 9005,
    title: "Games Room Lighting Setup",
    description: "Modern games room electrical installation with pendant lighting over pool table, recessed ceiling lights, and LED strip accent lighting. Complete power solution for entertainment space.",
    category: "lighting",
    image_path: "/project-images/games-room-lighting.jpg",
    is_before_after: false,
    created_at: new Date().toISOString(),
  },
  {
    id: 9006,
    title: "Luxury Lounge Ceiling Feature",
    description: "High-end living room electrical installation featuring LED strip ceiling perimeter lighting, designer pendant light, and integrated home entertainment wiring. Premium finish residential project.",
    category: "lighting",
    image_path: "/project-images/luxury-lounge-lighting.jpg",
    is_before_after: false,
    created_at: new Date().toISOString(),
  },
  {
    id: 9007,
    title: "Outdoor Deck LED Lighting",
    description: "Professional outdoor electrical installation with LED strip lighting under deck seating areas. Weather-resistant wiring and fittings creating stunning evening ambiance for garden entertaining.",
    category: "lighting",
    image_path: "/project-images/outdoor-led-strip-lighting.jpg",
    is_before_after: false,
    created_at: new Date().toISOString(),
  },
  {
    id: 9008,
    title: "Kitchen Installation Progress",
    description: "Professional kitchen electrical work in progress featuring pendant light installation, ceiling spotlights, and complete power distribution. Modern open-plan kitchen design with quality fittings.",
    category: "lighting",
    image_path: "/project-images/kitchen-installation-progress.jpg",
    is_before_after: false,
    created_at: new Date().toISOString(),
  },
  {
    id: 9009,
    title: "Sage Green Kitchen Electrical",
    description: "Beautiful kitchen electrical installation with under-cabinet LED lighting, ceiling spotlights, and power outlets. Sage green shaker units with wood worktops and subway tile backsplash.",
    category: "lighting",
    image_path: "/project-images/sage-kitchen-electrical.jpg",
    is_before_after: false,
    created_at: new Date().toISOString(),
  },
  {
    id: 9010,
    title: "New Build House Electrical",
    description: "Complete electrical installation for new build property. Full house rewiring, external lighting, and power distribution. Traditional brick construction with modern electrical systems throughout.",
    category: "rewiring",
    image_path: "/project-images/new-build-exterior.jpg",
    is_before_after: false,
    created_at: new Date().toISOString(),
  },
  {
    id: 9011,
    title: "Modern Bathroom Mirror Lighting",
    description: "Contemporary bathroom electrical installation featuring LED mirror with integrated lighting, ceiling spotlights, and shower electrical connections. Dark wood and textured tile finish.",
    category: "lighting",
    image_path: "/project-images/modern-bathroom-mirror-lighting.jpg",
    is_before_after: false,
    created_at: new Date().toISOString(),
  },
  {
    id: 9012,
    title: "Wooden Room First Fix Wiring",
    description: "First fix electrical installation in wooden construction room. Professional cable routing and outlet positioning in natural wood finish space. Quality workmanship in timber frame construction.",
    category: "rewiring",
    image_path: "/project-images/wooden-room-wiring.jpg",
    is_before_after: false,
    created_at: new Date().toISOString(),
  },
  {
    id: 9013,
    title: "Garden Deck Perimeter Lighting",
    description: "Professional outdoor LED lighting installation around garden deck perimeter. Weather-resistant fittings and cables creating beautiful evening ambiance for outdoor dining and entertainment.",
    category: "lighting",
    image_path: "/project-images/deck-perimeter-lighting.jpg",
    is_before_after: false,
    created_at: new Date().toISOString(),
  },
  {
    id: 9014,
    title: "Heating System Electrical Installation",
    description: "Professional electrical connections for residential heating system including pumps, controls, and distribution manifold. Complete electrical integration for modern heating infrastructure.",
    category: "consumer-units",
    image_path: "/project-images/heating-system-installation.jpg",
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