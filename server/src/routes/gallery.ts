import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { GalleryImageModel } from '../models/GalleryImage';
import { authenticateToken, AuthRequest } from '../middleware/auth';
import { galleryImageSchema, updateGalleryImageSchema } from '../validation/schemas';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../../uploads/gallery');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

// Public routes (no auth required)
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    let images;
    
    if (category && category !== 'all') {
      images = await GalleryImageModel.getByCategory(category as string);
    } else {
      images = await GalleryImageModel.getAll();
    }
    
    res.json(images);
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid image ID' });
    }

    const image = await GalleryImageModel.getById(id);
    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }

    res.json(image);
  } catch (error) {
    console.error('Error fetching gallery image:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Protected routes (auth required)
router.post('/', authenticateToken, upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'before_image', maxCount: 1 },
  { name: 'after_image', maxCount: 1 }
]), async (req: AuthRequest, res) => {
  try {
    const { error } = galleryImageSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    
    const imageData = {
      title: req.body.title,
      description: req.body.description || '',
      category: req.body.category,
      is_before_after: req.body.is_before_after === 'true',
      image_path: files.image ? files.image[0].filename : undefined,
      before_image_path: files.before_image ? files.before_image[0].filename : undefined,
      after_image_path: files.after_image ? files.after_image[0].filename : undefined,
    };

    const id = await GalleryImageModel.create(imageData);
    const createdImage = await GalleryImageModel.getById(id);
    
    res.status(201).json({
      message: 'Image uploaded successfully',
      image: createdImage
    });
  } catch (error) {
    console.error('Error creating gallery image:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/:id', authenticateToken, upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'before_image', maxCount: 1 },
  { name: 'after_image', maxCount: 1 }
]), async (req: AuthRequest, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid image ID' });
    }

    const { error } = updateGalleryImageSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const existingImage = await GalleryImageModel.getById(id);
    if (!existingImage) {
      return res.status(404).json({ error: 'Image not found' });
    }

    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    
    const updateData: any = {};
    if (req.body.title !== undefined) updateData.title = req.body.title;
    if (req.body.description !== undefined) updateData.description = req.body.description;
    if (req.body.category !== undefined) updateData.category = req.body.category;
    if (req.body.is_before_after !== undefined) updateData.is_before_after = req.body.is_before_after === 'true';
    
    if (files.image) updateData.image_path = files.image[0].filename;
    if (files.before_image) updateData.before_image_path = files.before_image[0].filename;
    if (files.after_image) updateData.after_image_path = files.after_image[0].filename;

    const success = await GalleryImageModel.update(id, updateData);
    if (!success) {
      return res.status(404).json({ error: 'Image not found' });
    }

    const updatedImage = await GalleryImageModel.getById(id);
    res.json({
      message: 'Image updated successfully',
      image: updatedImage
    });
  } catch (error) {
    console.error('Error updating gallery image:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid image ID' });
    }

    const image = await GalleryImageModel.getById(id);
    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }

    // Delete associated files
    const uploadDir = path.join(__dirname, '../../uploads/gallery');
    if (image.image_path) {
      const imagePath = path.join(uploadDir, image.image_path);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
    if (image.before_image_path) {
      const beforePath = path.join(uploadDir, image.before_image_path);
      if (fs.existsSync(beforePath)) {
        fs.unlinkSync(beforePath);
      }
    }
    if (image.after_image_path) {
      const afterPath = path.join(uploadDir, image.after_image_path);
      if (fs.existsSync(afterPath)) {
        fs.unlinkSync(afterPath);
      }
    }

    const success = await GalleryImageModel.delete(id);
    if (!success) {
      return res.status(404).json({ error: 'Image not found' });
    }

    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting gallery image:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;