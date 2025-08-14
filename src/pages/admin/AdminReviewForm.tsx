import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { toast } from '../../hooks/use-toast';
import { ArrowLeft, Save, Loader2, Star } from 'lucide-react';
import { reviewService, Review } from '../../services/reviewService';

const AdminReviewForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    rating: 5,
    text: '',
    service: '',
  });

  useEffect(() => {
    if (isEdit && id) {
      fetchReview();
    }
  }, [isEdit, id]);

  const fetchReview = async () => {
    try {
      const review = await reviewService.getById(Number(id));
      setFormData({
        name: review.name,
        location: review.location,
        rating: review.rating,
        text: review.text,
        service: review.service || '',
      });
    } catch (error) {
      console.error('Error fetching review:', error);
      toast({
        title: 'Error',
        description: 'Failed to load review data',
        variant: 'destructive',
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'rating' ? parseInt(value) || 0 : value,
    });
  };

  const handleRatingClick = (rating: number) => {
    setFormData({
      ...formData,
      rating,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isEdit) {
        await reviewService.update(Number(id), formData);
        toast({
          title: 'Success',
          description: 'Review updated successfully',
        });
      } else {
        await reviewService.create(formData);
        toast({
          title: 'Success',
          description: 'Review created successfully',
        });
      }

      navigate('/admin/reviews');
    } catch (error) {
      console.error('Error saving review:', error);
      toast({
        title: 'Error',
        description: isEdit ? 'Failed to update review' : 'Failed to create review',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const renderStarRating = () => {
    return (
      <div className="flex items-center space-x-1">
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            className={`h-6 w-6 cursor-pointer transition-colors ${
              index < formData.rating 
                ? "text-yellow-400 fill-current hover:text-yellow-500" 
                : "text-gray-300 hover:text-yellow-400"
            }`}
            onClick={() => handleRatingClick(index + 1)}
          />
        ))}
        <span className="ml-2 text-sm text-muted-foreground">
          {formData.rating}/5 stars
        </span>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button variant="outline" onClick={() => navigate('/admin/reviews')}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div>
          <h2 className="text-3xl font-bold">
            {isEdit ? 'Edit Review' : 'Add New Review'}
          </h2>
          <p className="text-muted-foreground">
            {isEdit ? 'Update the customer review' : 'Add a new customer testimonial'}
          </p>
        </div>
      </div>

      {/* Form */}
      <Card>
        <CardHeader>
          <CardTitle>Review Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Customer Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter customer name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Enter location (e.g., Southampton)"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Rating *</Label>
                  {renderStarRating()}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Type</Label>
                  <Input
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    placeholder="Enter service type (e.g., EICR Testing)"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="text">Review Text *</Label>
                  <Textarea
                    id="text"
                    name="text"
                    value={formData.text}
                    onChange={handleInputChange}
                    placeholder="Enter the customer review..."
                    rows={8}
                    required
                    className="resize-none"
                  />
                  <div className="text-xs text-muted-foreground text-right">
                    {formData.text.length}/1000 characters
                  </div>
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Preview</h3>
              <Card className="p-4 bg-muted/20">
                <div className="space-y-3">
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star
                        key={index}
                        className={`h-4 w-4 ${
                          index < formData.rating 
                            ? "text-yellow-400 fill-current" 
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <blockquote className="text-sm italic">
                    "{formData.text || 'Review text will appear here...'}"
                  </blockquote>
                  <div className="border-t pt-3">
                    <div className="font-semibold text-sm">
                      {formData.name || 'Customer Name'}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {formData.location || 'Location'}
                    </div>
                    {formData.service && (
                      <div className="text-xs text-primary font-medium mt-1">
                        {formData.service}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </div>

            {/* Submit Button */}
            <div className="flex items-center space-x-4 pt-4">
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {isEdit ? 'Updating...' : 'Creating...'}
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    {isEdit ? 'Update Review' : 'Create Review'}
                  </>
                )}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate('/admin/reviews')}
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminReviewForm;