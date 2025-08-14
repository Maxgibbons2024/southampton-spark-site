import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  fromPrice?: string;
}

const ServiceCard = ({ title, description, icon: Icon, features, fromPrice }: ServiceCardProps) => {
  return (
    <Card className="h-full shadow-card hover:shadow-hero transition-smooth group">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        {fromPrice && (
          <div className="text-lg font-semibold text-primary">
            From {fromPrice}
          </div>
        )}
        <Button className="w-full shadow-button" asChild>
          <Link to="/contact">Get Quote</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;