import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Settings, Heart, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Install the App",
    description: "Quick 5-minute setup from the Shopify App Store. No technical knowledge required."
  },
  {
    number: "02", 
    icon: Settings,
    title: "Customize Your Style",
    description: "Match your boutique's branding with colors, fonts, and layout customizations."
  },
  {
    number: "03",
    icon: Heart,
    title: "Customers Create Registries",
    description: "Your customers easily create beautiful registries for their special occasions."
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Watch Sales Grow",
    description: "Track performance and enjoy increased customer loyalty and higher average order values."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with gift registries in four simple steps. 
            No technical expertise needed.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="relative group hover:shadow-card transition-all duration-300 border-border/50 bg-gradient-card animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                
                <div className="w-16 h-16 bg-primary-soft rounded-lg flex items-center justify-center mx-auto mb-6 mt-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="group">
            Start Your Free Trial
            <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;