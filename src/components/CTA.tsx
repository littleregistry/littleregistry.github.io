import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm px-4 py-2 rounded-full border border-border/30 mb-8">
            <Sparkles className="w-4 h-4 text-neon-blue" />
            <span className="text-sm font-medium">Ready to Transform Your Boutique?</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Start Your 
            <span className="bg-gradient-accent bg-clip-text text-transparent ml-2">
              Free Trial Today
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of successful boutique stores. Setup takes just 5 minutes, 
            and you'll see results from day one. No commitment, cancel anytime.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="group">
              <a href="https://apps.shopify.com/little-registry?show_store_picker=1">Install App</a>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="soft" size="lg">
              <a href="https://cal.com/littleregistry">Schedule Demo</a>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 text-sm">
              <Shield className="w-5 h-5 text-electric-blue" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Zap className="w-5 h-5 text-royal-purple" />
              <span>5-minute setup</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Sparkles className="w-5 h-5 text-neon-blue" />
              <span>Live support available</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-electric-blue/10 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-royal-purple/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-neon-blue/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CTA;