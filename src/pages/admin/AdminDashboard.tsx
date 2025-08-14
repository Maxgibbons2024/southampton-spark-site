import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { 
  Images, 
  MessageSquare, 
  Plus,
  TrendingUp,
  Users,
  Star
} from 'lucide-react';
import { galleryService } from '../../services/galleryService';
import { reviewService } from '../../services/reviewService';

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState({
    totalImages: 0,
    totalReviews: 0,
    averageRating: 0,
    loading: true
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [images, reviews] = await Promise.all([
          galleryService.getAll(),
          reviewService.getAll()
        ]);
        
        const averageRating = reviews.length > 0 
          ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
          : 0;

        setStats({
          totalImages: images.length,
          totalReviews: reviews.length,
          averageRating: Number(averageRating.toFixed(1)),
          loading: false
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
        setStats(prev => ({ ...prev, loading: false }));
      }
    };

    fetchStats();
  }, []);

  const quickActions = [
    {
      title: 'Add New Image',
      description: 'Upload a new project image to the gallery',
      icon: Images,
      link: '/admin/gallery/new',
      color: 'bg-blue-500'
    },
    {
      title: 'Add New Review',
      description: 'Add a customer testimonial',
      icon: MessageSquare,
      link: '/admin/reviews/new',
      color: 'bg-green-500'
    }
  ];

  const statCards = [
    {
      title: 'Total Images',
      value: stats.totalImages,
      icon: Images,
      color: 'text-blue-600'
    },
    {
      title: 'Total Reviews',
      value: stats.totalReviews,
      icon: MessageSquare,
      color: 'text-green-600'
    },
    {
      title: 'Average Rating',
      value: `${stats.averageRating}/5`,
      icon: Star,
      color: 'text-yellow-600'
    },
    {
      title: 'Happy Customers',
      value: '500+',
      icon: Users,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Dashboard Overview</h2>
        <p className="text-muted-foreground">
          Manage your gallery images and customer reviews
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stats.loading ? '...' : stat.value}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Card key={action.title} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-lg ${action.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">{action.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        {action.description}
                      </p>
                      <Button size="sm" asChild>
                        <Link to={action.link}>
                          <Plus className="h-4 w-4 mr-2" />
                          Add New
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium">Gallery Management</p>
                <p className="text-sm text-muted-foreground">
                  Manage project images and before/after photos
                </p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link to="/admin/gallery">Manage Gallery</Link>
              </Button>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium">Review Management</p>
                <p className="text-sm text-muted-foreground">
                  Add and manage customer testimonials
                </p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link to="/admin/reviews">Manage Reviews</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;