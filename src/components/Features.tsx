import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Heart, 
  ShoppingBag, 
  Users, 
  Smartphone, 
  BarChart3, 
  Palette 
} from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Beautiful Registries",
    description: "Elegant, customizable gift registry pages that match your boutique's aesthetic and brand."
  },
  {
    icon: ShoppingBag,
    title: "Seamless Shopping",
    description: "Customers can easily browse, add items, and purchase gifts directly from your store."
  },
  {
    icon: Users,
    title: "Customer Engagement",
    description: "Build deeper relationships with customers through special occasions and life events."
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Perfect experience on all devices - desktop, tablet, and mobile phones."
  },
  {
    icon: BarChart3,
    title: "Sales Analytics",
    description: "Track registry performance, popular items, and customer behavior with detailed insights."
  },
  {
    icon: Palette,
    title: "Brand Customization",
    description: "Customize colors, fonts, and layouts to perfectly match your boutique's unique style."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">
            Everything You Need for 
            <span className="bg-gradient-accent bg-clip-text text-transparent ml-2">
              Perfect Registries
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools your boutique needs to offer 
            an exceptional gift registry experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 animate-slide-up border-border/50 bg-gradient-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary-soft rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;