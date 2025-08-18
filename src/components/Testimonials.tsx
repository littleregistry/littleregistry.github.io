import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Penelope Stipanovich",
    role: "Owner, Smoochie Baby",
    content: "Thanks to Little Registry, we’ve been able to offer an elevated, boutique-style registry experience that aligns perfectly with our brand. It’s been a game changer for Smoochie Baby, and I recommend it wholeheartedly to any retailer looking to add a high-touch, thoughtfully built registry system to their Shopify store.",
    rating: 5,
    // location: "San Francisco, CA"
  },
  // {
  //   name: "Maria Rodriguez", 
  //   role: "Manager, Nest Home Interiors",
  //   content: "The customization options are amazing. The registries look like they were designed specifically for our brand.",
  //   rating: 5,
  //   location: "Austin, TX"
  // },
  {
    name: "Emma Thompson",
    role: "IT Director, Blissful Baby Boutique", 
    content: "Setup was incredibly easy and our customers immediately started using it. The support team is fantastic too!",
    rating: 5,
    // location: "Portland, OR"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">
            Loved by 
            <span className="bg-gradient-accent bg-clip-text text-transparent ml-2">
              Boutique Owners
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of successful boutique stores who've transformed their 
            customer experience with our gift registry platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card transition-all duration-300 border-border/50 bg-gradient-card animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-warm-gold mb-6" />
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warm-gold text-warm-gold" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-primary-soft px-6 py-3 rounded-full">
            {/* <Star className="w-5 h-5 fill-warm-gold text-warm-gold" /> */}
            {/* <span className="font-semibold">4.9/5 rating</span> */}
            <span className="text-muted-foreground">Loved by 200+ boutique stores</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;