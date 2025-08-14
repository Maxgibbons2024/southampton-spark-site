import { db } from '../database/setup';
import bcrypt from 'bcryptjs';

export interface AdminUser {
  id?: number;
  username: string;
  password_hash?: string;
  created_at?: string;
}

export class AdminUserModel {
  static async getByUsername(username: string): Promise<AdminUser | null> {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM admin_users WHERE username = ?', [username], (err, row) => {
        if (err) reject(err);
        else resolve(row as AdminUser | null);
      });
    });
  }

  static async create(username: string, password: string): Promise<number> {
    return new Promise(async (resolve, reject) => {
      try {
        const saltRounds = 10;
        const password_hash = await bcrypt.hash(password, saltRounds);
        
        db.run(
          'INSERT INTO admin_users (username, password_hash) VALUES (?, ?)',
          [username, password_hash],
          function (err) {
            if (err) reject(err);
            else resolve(this.lastID);
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  static async validatePassword(username: string, password: string): Promise<boolean> {
    try {
      const user = await this.getByUsername(username);
      if (!user || !user.password_hash) return false;
      
      return await bcrypt.compare(password, user.password_hash);
    } catch (error) {
      return false;
    }
  }
}