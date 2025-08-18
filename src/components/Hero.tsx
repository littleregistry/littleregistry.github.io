import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image-9.svg";
import logo from "@/assets/logo-lr.svg"
import installButton from  "@/assets/find-shopify.jpeg"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      
      <div className="container mx-auto px-6 py-20 relative z-10">      
      <img src={logo} alt="logo" width="200" height="100" />
      <br/>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
              <Sparkles className="w-4 h-4 text-neon-blue" />
              <span className="text-sm font-medium text-muted-foreground">
                Transform Your Boutique Store Experience
              </span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Easiest way to add a registry & wishlist
                <br />
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                to your store
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Boost sales & attract new customers by letting users create stunning gift lists and curated collections for baby showers, weddings, birthdays, holidays, and special occasions — all from your store. 
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">

              <img src={installButton} alt="install button" width="180" height="90" />

              <Button variant="hero" size="lg" className="group">
              View Demo
                {/* Install Now - Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> */}
              </Button>
              {/* <Button variant="soft" size="lg">
                View Demo
              </Button> */}
            </div>
            
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                <span>5-minute setup</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-royal-purple rounded-full"></div>
                <span>No coding required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                <span>Privacy first settings</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-card rounded-3xl blur-2xl opacity-30"></div>
            <img 
              src={heroImage} 
              alt="Beautiful gift registry interface showing boutique items"
              className="relative rounded-3xl shadow-card w-full h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-electric-blue/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-royal-purple/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;