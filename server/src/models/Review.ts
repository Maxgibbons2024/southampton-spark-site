import { db } from '../database/setup';

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

export class ReviewModel {
  static async getAll(): Promise<Review[]> {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM reviews ORDER BY created_at DESC', (err, rows) => {
        if (err) reject(err);
        else resolve(rows as Review[]);
      });
    });
  }

  static async getById(id: number): Promise<Review | null> {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM reviews WHERE id = ?', [id], (err, row) => {
        if (err) reject(err);
        else resolve(row as Review | null);
      });
    });
  }

  static async create(review: Omit<Review, 'id' | 'created_at' | 'updated_at'>): Promise<number> {
    return new Promise((resolve, reject) => {
      const { name, location, rating, text, service } = review;
      db.run(
        'INSERT INTO reviews (name, location, rating, text, service) VALUES (?, ?, ?, ?, ?)',
        [name, location, rating, text, service],
        function (err) {
          if (err) reject(err);
          else resolve(this.lastID);
        }
      );
    });
  }

  static async update(id: number, review: Partial<Review>): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const fields = Object.keys(review).filter(key => key !== 'id').map(key => `${key} = ?`);
      const values = Object.entries(review).filter(([key]) => key !== 'id').map(([, value]) => value);
      
      db.run(
        `UPDATE reviews SET ${fields.join(', ')}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
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
      db.run('DELETE FROM reviews WHERE id = ?', [id], function (err) {
        if (err) reject(err);
        else resolve(this.changes > 0);
      });
    });
  }
}