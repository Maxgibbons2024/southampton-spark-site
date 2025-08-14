import Joi from 'joi';

export const loginSchema = Joi.object({
  username: Joi.string().min(3).max(50).required(),
  password: Joi.string().min(6).max(100).required(),
});

export const galleryImageSchema = Joi.object({
  title: Joi.string().min(1).max(200).required(),
  description: Joi.string().max(500).allow('').optional(),
  category: Joi.string().valid(
    'rewiring',
    'consumer-units',
    'ev-chargers',
    'lighting',
    'eicr',
    'fault-finding'
  ).required(),
  is_before_after: Joi.boolean().optional(),
});

export const updateGalleryImageSchema = Joi.object({
  title: Joi.string().min(1).max(200).optional(),
  description: Joi.string().max(500).allow('').optional(),
  category: Joi.string().valid(
    'rewiring',
    'consumer-units',
    'ev-chargers',
    'lighting',
    'eicr',
    'fault-finding'
  ).optional(),
  is_before_after: Joi.boolean().optional(),
});

export const reviewSchema = Joi.object({
  name: Joi.string().min(1).max(100).required(),
  location: Joi.string().min(1).max(100).required(),
  rating: Joi.number().integer().min(1).max(5).required(),
  text: Joi.string().min(1).max(1000).required(),
  service: Joi.string().max(100).allow('').optional(),
});

export const updateReviewSchema = Joi.object({
  name: Joi.string().min(1).max(100).optional(),
  location: Joi.string().min(1).max(100).optional(),
  rating: Joi.number().integer().min(1).max(5).optional(),
  text: Joi.string().min(1).max(1000).optional(),
  service: Joi.string().max(100).allow('').optional(),
});