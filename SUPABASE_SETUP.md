# Supabase Setup Guide

This guide will help you set up Supabase as the backend for your Southampton Spark admin dashboard.

## Why Supabase + Vercel Hobby?

✅ **Completely FREE** for small businesses  
✅ **No server maintenance** required  
✅ **Built-in authentication**  
✅ **Real-time database**  
✅ **File storage included**  
✅ **Easy customer handover**  

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. **Sign up** with GitHub
3. **Create new project**:
   - Name: `southampton-spark`
   - Database password: (save this securely)
   - Region: Choose closest to your customers

## Step 2: Set up Database Tables

In your Supabase dashboard, go to **SQL Editor** and run these commands:

### Create Gallery Images Table
```sql
CREATE TABLE gallery_images (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  image_path TEXT,
  before_image_path TEXT,
  after_image_path TEXT,
  is_before_after BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access" ON gallery_images
FOR SELECT USING (true);

-- Allow authenticated users to insert/update/delete
CREATE POLICY "Allow authenticated users full access" ON gallery_images
FOR ALL USING (auth.role() = 'authenticated');
```

### Create Reviews Table
```sql
CREATE TABLE reviews (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  text TEXT NOT NULL,
  service TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access" ON reviews
FOR SELECT USING (true);

-- Allow authenticated users to insert/update/delete
CREATE POLICY "Allow authenticated users full access" ON reviews
FOR ALL USING (auth.role() = 'authenticated');
```

### Create Storage Bucket for Images
```sql
-- Create storage bucket for gallery images
INSERT INTO storage.buckets (id, name, public) VALUES ('gallery-images', 'gallery-images', true);

-- Allow public access to view images
CREATE POLICY "Allow public access" ON storage.objects
FOR SELECT USING (bucket_id = 'gallery-images');

-- Allow authenticated users to upload images
CREATE POLICY "Allow authenticated uploads" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'gallery-images' AND auth.role() = 'authenticated');

-- Allow authenticated users to delete images
CREATE POLICY "Allow authenticated deletes" ON storage.objects
FOR DELETE USING (bucket_id = 'gallery-images' AND auth.role() = 'authenticated');
```

## Step 3: Create Admin User

In Supabase dashboard:

1. Go to **Authentication** → **Users**
2. **Add user**:
   - Email: `admin@southamptonpark.com` (or customer's email)
   - Password: Generate a secure password
   - Email confirmed: ✅ Check this box
3. **Save** the credentials securely

## Step 4: Configure Environment Variables

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy your project details:
   - **Project URL**
   - **Anon Public Key**

3. Create `.env` file in your project root:
```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## Step 5: Deploy to Vercel

1. **Push changes** to GitHub
2. **Vercel will auto-deploy** your site
3. **Add environment variables** in Vercel dashboard:
   - Go to your project → Settings → Environment Variables
   - Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
4. **Redeploy** the site

## Step 6: Test Admin Dashboard

1. Go to `https://your-vercel-url/admin/login`
2. Use the admin email/password you created
3. Test uploading images and adding reviews

## Customer Handover

### What Customer Gets:
1. **Supabase account** with their email
2. **Admin dashboard** access
3. **Documentation** on how to use it

### Monthly Costs:
- **Supabase**: FREE (up to 500MB database + 1GB storage)
- **Vercel**: FREE (Hobby plan)
- **Total**: $0/month

### When They Might Need to Upgrade:
- **Supabase Pro ($25/month)**: After 500MB database or 1GB storage
- **Vercel Pro ($20/month)**: For custom domain + more bandwidth

## Maintenance

### Automatic:
- ✅ Security updates
- ✅ Database backups
- ✅ SSL certificates
- ✅ CDN optimization

### Manual (Customer or You):
- Adding new images via admin dashboard
- Adding new reviews
- Changing admin password

## Security Features

- ✅ **Row Level Security** enabled
- ✅ **Authentication required** for admin actions
- ✅ **Public read access** for gallery/reviews
- ✅ **HTTPS encryption** everywhere
- ✅ **SQL injection prevention**

## Support

If issues arise:
1. Check Supabase dashboard for database errors
2. Check Vercel dashboard for deployment issues
3. Check browser console for frontend errors

This setup provides a production-ready, scalable solution that can grow with the customer's business!