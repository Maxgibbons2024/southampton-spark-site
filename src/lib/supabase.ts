import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      gallery_images: {
        Row: {
          id: number
          title: string
          description: string | null
          category: string
          image_path: string | null
          before_image_path: string | null
          after_image_path: string | null
          is_before_after: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          title: string
          description?: string | null
          category: string
          image_path?: string | null
          before_image_path?: string | null
          after_image_path?: string | null
          is_before_after?: boolean
        }
        Update: {
          title?: string
          description?: string | null
          category?: string
          image_path?: string | null
          before_image_path?: string | null
          after_image_path?: string | null
          is_before_after?: boolean
        }
      }
      reviews: {
        Row: {
          id: number
          name: string
          location: string
          rating: number
          text: string
          service: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          name: string
          location: string
          rating: number
          text: string
          service?: string | null
        }
        Update: {
          name?: string
          location?: string
          rating?: number
          text?: string
          service?: string | null
        }
      }
    }
  }
}