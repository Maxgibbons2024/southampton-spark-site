import { db } from '../database/setup';

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

export class GalleryImageModel {
  static async getAll(): Promise<GalleryImage[]> {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM gallery_images ORDER BY created_at DESC', (err, rows) => {
        if (err) reject(err);
        else resolve(rows as GalleryImage[]);
      });
    });
  }

  static async getByCategory(category: string): Promise<GalleryImage[]> {
    return new Promise((resolve, reject) => {
      db.all(
        'SELECT * FROM gallery_images WHERE category = ? ORDER BY created_at DESC',
        [category],
        (err, rows) => {
          if (err) reject(err);
          else resolve(rows as GalleryImage[]);
        }
      );
    });
  }

  static async getById(id: number): Promise<GalleryImage | null> {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM gallery_images WHERE id = ?', [id], (err, row) => {
        if (err) reject(err);
        else resolve(row as GalleryImage | null);
      });
    });
  }

  static async create(image: Omit<GalleryImage, 'id' | 'created_at' | 'updated_at'>): Promise<number> {
    return new Promise((resolve, reject) => {
      const { title, description, category, image_path, before_image_path, after_image_path, is_before_after } = image;
      db.run(
        `INSERT INTO gallery_images 
         (title, description, category, image_path, before_image_path, after_image_path, is_before_after) 
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [title, description, category, image_path, before_image_path, after_image_path, is_before_after],
        function (err) {
          if (err) reject(err);
          else resolve(this.lastID);
        }
      );
    });
  }

  static async update(id: number, image: Partial<GalleryImage>): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const fields = Object.keys(image).filter(key => key !== 'id').map(key => `${key} = ?`);
      const values = Object.entries(image).filter(([key]) => key !== 'id').map(([, value]) => value);
      
      db.run(
        `UPDATE gallery_images SET ${fields.join(', ')}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
        [...values, id],
        function (err) {
          if (err) reject(err);
          else resolve(this.changes > 0);
        }
      );
    });
  }

  static async delete(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      db.run('DELETE FROM gallery_images WHERE id = ?', [id], function (err) {
        if (err) reject(err);
        else resolve(this.changes > 0);
      });
    });
  }
}