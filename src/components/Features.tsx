import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ShoppingBag, 
  Users, 
  Palette,
  BarChart3, 
  Lock,
  Globe
} from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Branded & Shareable Lists",
    description: "Elegant gift lists customized to match your boutique’s style. Customize colors, fonts, layouts, and allow customers to create personalized registries."
  },
  {
    icon: ShoppingBag,
    title: "Shopify POS Integration",
    description: "Customers can easily add items from your Shopify store to their gift lists, while their friends can purchase from their lists. Real-time email notifications and order tracking."
  },
  {
    icon: Users,
    title: "Registry Management Tools",
    description: "Enable sales associates to easily manage customer registries and discounts from the admin panel. Build deeper relationships with customers through special occasions."
  },
  {
    icon: Lock,
    title: "Privacy Settings",
    description: "Give customers full control over their registries with options to hide addresses, create private and password-protected gift lists for added security."
  },
  {
    icon: BarChart3,
    title: "Sales Analytics",
    description: "Track registry performance, popular items, and customer behavior with detailed insights to optimize inventory"
  },
  {
    icon: Globe,
    title: "Localization",
    description: "Multiple currency options and 10+ languages support, including English, Spanish, Italian, Portuguese, Swedish, Estonian, Dutch, German, and French."
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
              Perfect Gift Lists
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