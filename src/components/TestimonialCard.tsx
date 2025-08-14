import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  service?: string;
}

const TestimonialCard = ({ name, location, rating, text, service }: TestimonialCardProps) => {
  return (
    <Card className="h-full shadow-card hover:shadow-hero transition-smooth">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <blockquote className="text-foreground italic">
          "{text}"
        </blockquote>
        <div className="border-t pt-4">
          <div className="font-semibold text-foreground">{name}</div>
          <div className="text-sm text-muted-foreground">{location}</div>
          {service && (
            <div className="text-xs text-primary font-medium mt-1">{service}</div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;