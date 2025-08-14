# Southampton Spark Admin Dashboard

This admin dashboard allows you to manage gallery images and customer reviews for your electrical services website.

## Features

- **Gallery Management**: Upload, edit, and delete project images
- **Review Management**: Add, edit, and delete customer testimonials
- **Before/After Images**: Support for before/after project photos
- **Category Filtering**: Organize images by service type
- **Secure Authentication**: JWT-based admin login

## Setup Instructions

### 1. Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and update the values as needed.

4. Create the admin user:
   ```bash
   npm run setup-admin
   ```
   This creates a default admin user with:
   - Username: `admin`
   - Password: `admin123`
   
   **IMPORTANT**: Change these credentials after first login!

5. Start the development server:
   ```bash
   npm run dev
   ```

The backend will run on `http://localhost:5000`

### 2. Frontend Setup

1. Navigate to the root directory:
   ```bash
   cd ..
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will run on `http://localhost:5173`

## Admin Access

1. Go to `http://localhost:5173/admin/login`
2. Use the default credentials:
   - Username: `admin`
   - Password: `admin123`

## Admin Features

### Gallery Management
- **Add Images**: Upload project photos with titles, descriptions, and categories
- **Before/After**: Support for before/after project comparisons
- **Categories**: Organize by service type (Rewiring, Consumer Units, EV Chargers, etc.)
- **Edit/Delete**: Modify or remove existing images

### Review Management
- **Add Reviews**: Create customer testimonials with ratings
- **Star Ratings**: 1-5 star rating system
- **Customer Info**: Name, location, and service type
- **Edit/Delete**: Modify or remove existing reviews

## File Structure

```
server/
├── src/
│   ├── database/     # Database setup and configuration
│   ├── models/       # Data models (Gallery, Review, Admin)
│   ├── routes/       # API routes
│   ├── middleware/   # Authentication middleware
│   ├── validation/   # Input validation schemas
│   └── server.ts     # Main server file
├── uploads/          # Uploaded images
└── data/            # SQLite database

src/
├── components/admin/ # Admin dashboard components
├── pages/admin/     # Admin pages
├── services/        # API services
├── contexts/        # React contexts (Auth)
└── lib/            # Utilities and API configuration
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login

### Gallery
- `GET /api/gallery` - Get all images
- `GET /api/gallery?category=rewiring` - Get images by category
- `POST /api/gallery` - Upload new image (admin only)
- `PUT /api/gallery/:id` - Update image (admin only)
- `DELETE /api/gallery/:id` - Delete image (admin only)

### Reviews
- `GET /api/reviews` - Get all reviews
- `POST /api/reviews` - Create new review (admin only)
- `PUT /api/reviews/:id` - Update review (admin only)
- `DELETE /api/reviews/:id` - Delete review (admin only)

## Production Deployment

### Backend
1. Set `NODE_ENV=production` in your environment
2. Update CORS origin in `server.ts` to your domain
3. Use a secure JWT_SECRET
4. Consider using PostgreSQL instead of SQLite

### Frontend
1. Update `VITE_API_URL` to your production API URL
2. Build the frontend: `npm run build`
3. Serve the `dist` folder with your web server

## Security Notes

- Change default admin credentials immediately
- Use a strong JWT secret in production
- Enable HTTPS in production
- Regularly update dependencies
- Consider adding rate limiting for additional protection

## Troubleshooting

### Common Issues

1. **CORS Errors**: Make sure the backend is running and CORS is configured correctly
2. **Authentication Issues**: Check JWT token expiration and secret
3. **File Upload Issues**: Ensure upload directory permissions are correct
4. **Database Issues**: Check database file permissions and path

### Getting Help

If you encounter issues:
1. Check the browser console for errors
2. Check the server logs
3. Verify environment variables are set correctly
4. Ensure both frontend and backend are running