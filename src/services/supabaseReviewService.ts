import { supabase } from '../lib/supabase';
import type { Database } from '../lib/supabase';

export type Review = Database['public']['Tables']['reviews']['Row'];
export type ReviewInsert = Database['public']['Tables']['reviews']['Insert'];
export type ReviewUpdate = Database['public']['Tables']['reviews']['Update'];

export const supabaseReviewService = {
  getAll: async (): Promise<Review[]> => {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    return data || [];
  },

  getById: async (id: number): Promise<Review> => {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  create: async (review: ReviewInsert): Promise<Review> => {
    const { data, error } = await supabase
      .from('reviews')
      .insert(review)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  update: async (id: number, review: ReviewUpdate): Promise<Review> => {
    const { data, error } = await supabase
      .from('reviews')
      .update({ ...review, updated_at: new Date().toISOString() })
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
      .from('reviews')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(error.message);
    }
  }
};