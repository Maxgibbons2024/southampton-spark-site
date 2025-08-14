import express from 'express';
import { ReviewModel } from '../models/Review';
import { authenticateToken, AuthRequest } from '../middleware/auth';
import { reviewSchema, updateReviewSchema } from '../validation/schemas';

const router = express.Router();

// Public routes (no auth required)
router.get('/', async (req, res) => {
  try {
    const reviews = await ReviewModel.getAll();
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid review ID' });
    }

    const review = await ReviewModel.getById(id);
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    res.json(review);
  } catch (error) {
    console.error('Error fetching review:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Protected routes (auth required)
router.post('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { name, location, rating, text, service } = req.body;
    
    const id = await ReviewModel.create({
      name,
      location,
      rating,
      text,
      service: service || ''
    });

    const createdReview = await ReviewModel.getById(id);
    
    res.status(201).json({
      message: 'Review created successfully',
      review: createdReview
    });
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid review ID' });
    }

    const { error } = updateReviewSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const success = await ReviewModel.update(id, req.body);
    if (!success) {
      return res.status(404).json({ error: 'Review not found' });
    }

    const updatedReview = await ReviewModel.getById(id);
    res.json({
      message: 'Review updated successfully',
      review: updatedReview
    });
  } catch (error) {
    console.error('Error updating review:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid review ID' });
    }

    const success = await ReviewModel.delete(id);
    if (!success) {
      return res.status(404).json({ error: 'Review not found' });
    }

    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    console.error('Error deleting review:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;