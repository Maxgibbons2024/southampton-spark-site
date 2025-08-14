import { supabase } from '../lib/supabase';
import type { Database } from '../lib/supabase';

export type GalleryImage = Database['public']['Tables']['gallery_images']['Row'];
export type GalleryImageInsert = Database['public']['Tables']['gallery_images']['Insert'];
export type GalleryImageUpdate = Database['public']['Tables']['gallery_images']['Update'];

export const supabaseGalleryService = {
  getAll: async (category?: string): Promise<GalleryImage[]> => {
    let query = supabase
      .from('gallery_images')
      .select('*')
      .order('created_at', { ascending: false });

    if (category) {
      query = query.eq('category', category);
    }

    const { data, error } = await query;
    
    if (error) {
      throw new Error(error.message);
    }

    return data || [];
  },

  getById: async (id: number): Promise<GalleryImage> => {
    const { data, error } = await supabase
      .from('gallery_images')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  create: async (image: GalleryImageInsert): Promise<GalleryImage> => {
    const { data, error } = await supabase
      .from('gallery_images')
      .insert(image)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  update: async (id: number, image: GalleryImageUpdate): Promise<GalleryImage> => {
    const { data, error } = await supabase
      .from('gallery_images')
      .update({ ...image, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  delete: async (id: number): Promise<void> => {
    const { error } = await supabase
      .from('gallery_images')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(error.message);
    }
  },

  uploadImage: async (file: File, path: string): Promise<string> => {
    const { data, error } = await supabase.storage
      .from('gallery-images')
      .upload(path, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      throw new Error(error.message);
    }

    return data.path;
  },

  getImageUrl: (path: string): string => {
    const { data } = supabase.storage
      .from('gallery-images')
      .getPublicUrl(path);

    return data.publicUrl;
  },

  deleteImage: async (path: string): Promise<void> => {
    const { error } = await supabase.storage
      .from('gallery-images')
      .remove([path]);

    if (error) {
      throw new Error(error.message);
    }
  }
};