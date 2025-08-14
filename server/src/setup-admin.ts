import { initDatabase } from './database/setup';
import { AdminUserModel } from './models/AdminUser';

async function setupAdmin() {
  try {
    await initDatabase();
    console.log('Database initialized');

    // Check if admin user already exists
    const existingAdmin = await AdminUserModel.getByUsername('admin');
    if (existingAdmin) {
      console.log('Admin user already exists');
      process.exit(0);
    }

    // Create default admin user
    const adminId = await AdminUserModel.create('admin', 'admin123');
    console.log(`Admin user created with ID: ${adminId}`);
    console.log('Default credentials: username="admin", password="admin123"');
    console.log('IMPORTANT: Change these credentials after first login!');
    
    process.exit(0);
  } catch (error) {
    console.error('Error setting up admin:', error);
    process.exit(1);
  }
}

setupAdmin();