import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Checkbox } from '../../components/ui/checkbox';
import { toast } from '../../hooks/use-toast';
import { ArrowLeft, Upload, Loader2, X } from 'lucide-react';
import { galleryService, GalleryImage } from '../../services/galleryService';

const AdminGalleryForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    is_before_after: false,
  });
  const [files, setFiles] = useState({
    image: null as File | null,
    before_image: null as File | null,
    after_image: null as File | null,
  });
  const [existingImage, setExistingImage] = useState<GalleryImage | null>(null);

  const categories = [
    { value: 'rewiring', label: 'Rewiring' },
    { value: 'consumer-units', label: 'Consumer Units' },
    { value: 'ev-chargers', label: 'EV Chargers' },
    { value: 'lighting', label: 'Lighting' },
    { value: 'eicr', label: 'EICR Testing' },
    { value: 'fault-finding', label: 'Fault Finding' }
  ];

  useEffect(() => {
    if (isEdit && id) {
      fetchImage();
    }
  }, [isEdit, id]);

  const fetchImage = async () => {
    try {
      const image = await galleryService.getById(Number(id));
      setExistingImage(image);
      setFormData({
        title: image.title,
        description: image.description || '',
        category: image.category,
        is_before_after: image.is_before_after,
      });
    } catch (error) {
      console.error('Error fetching image:', error);
      toast({
        title: 'Error',
        description: 'Failed to load image data',
        variant: 'destructive',
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCategoryChange = (value: string) => {
    setFormData({
      ...formData,
      category: value,
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      is_before_after: checked,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const fieldName = e.target.name as keyof typeof files;
    
    if (file) {
      setFiles({
        ...files,
        [fieldName]: file,
      });
    }
  };

  const removeFile = (fieldName: keyof typeof files) => {
    setFiles({
      ...files,
      [fieldName]: null,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const submitFormData = new FormData();
      submitFormData.append('title', formData.title);
      submitFormData.append('description', formData.description);
      submitFormData.append('category', formData.category);
      submitFormData.append('is_before_after', formData.is_before_after.toString());

      if (files.image) {
        submitFormData.append('image', files.image);
      }
      if (files.before_image) {
        submitFormData.append('before_image', files.before_image);
      }
      if (files.after_image) {
        submitFormData.append('after_image', files.after_image);
      }

      if (isEdit) {
        await galleryService.update(Number(id), submitFormData);
        toast({
          title: 'Success',
          description: 'Image updated successfully',
        });
      } else {
        await galleryService.create(submitFormData);
        toast({
          title: 'Success',
          description: 'Image uploaded successfully',
        });
      }

      navigate('/admin/gallery');
    } catch (error) {
      console.error('Error saving image:', error);
      toast({
        title: 'Error',
        description: isEdit ? 'Failed to update image' : 'Failed to upload image',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const FileInput = ({ 
    name, 
    label, 
    accept = "image/*",
    existingPath 
  }: { 
    name: keyof typeof files;
    label: string;
    accept?: string;
    existingPath?: string;
  }) => (
    <div className="space-y-2">
      <Label>{label}</Label>
      {existingPath && !files[name] && (
        <div className="mb-2">
          <img 
            src={galleryService.getImageUrl(existingPath)} 
            alt="Current image" 
            className="w-32 h-32 object-cover rounded border"
          />
          <p className="text-xs text-muted-foreground mt-1">Current image</p>
        </div>
      )}
      {files[name] && (
        <div className="flex items-center space-x-2 p-2 border rounded">
          <span className="text-sm flex-1">{files[name]!.name}</span>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => removeFile(name)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
      <Input
        type="file"
        name={name}
        accept={accept}
        onChange={handleFileChange}
        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
      />
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button variant="outline" onClick={() => navigate('/admin/gallery')}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div>
          <h2 className="text-3xl font-bold">
            {isEdit ? 'Edit Image' : 'Add New Image'}
          </h2>
          <p className="text-muted-foreground">
            {isEdit ? 'Update the gallery image details' : 'Upload a new image to the gallery'}
          </p>
        </div>
      </div>

      {/* Form */}
      <Card>
        <CardHeader>
          <CardTitle>Image Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter image title"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select value={formData.category} onValueChange={handleCategoryChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Enter image description"
                    rows={4}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="is_before_after"
                    checked={formData.is_before_after}
                    onCheckedChange={handleCheckboxChange}
                  />
                  <Label htmlFor="is_before_after">
                    This is a before/after project
                  </Label>
                </div>
              </div>

              {/* File Uploads */}
              <div className="space-y-4">
                {!formData.is_before_after ? (
                  <FileInput 
                    name="image" 
                    label="Project Image"
                    existingPath={existingImage?.image_path}
                  />
                ) : (
                  <>
                    <FileInput 
                      name="before_image" 
                      label="Before Image"
                      existingPath={existingImage?.before_image_path}
                    />
                    <FileInput 
                      name="after_image" 
                      label="After Image"
                      existingPath={existingImage?.after_image_path}
                    />
                  </>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-center space-x-4 pt-4">
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {isEdit ? 'Updating...' : 'Uploading...'}
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    {isEdit ? 'Update Image' : 'Upload Image'}
                  </>
                )}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate('/admin/gallery')}
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

export default AdminGalleryForm;