import { Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">Little Registry</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Add a beautiful gift registry to your boutique stores in minutes. Helping customers celebrate 
              life's special moments.
            </p>
          </div>
          
          {/* Product */}
          <div className="space-y-4">
            {/* <h4 className="font-semibold text-foreground">Product</h4> */}
            {/* <ul className="space-y-2 text-muted-foreground"> */}
              {/* <li><a href="#" className="hover:text-primary transition-colors">Features</a></li> */}
              {/* <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li> */}
              {/* <li><a href="#" className="hover:text-primary transition-colors">Demo</a></li> */}
              {/* <li><a href="#" className="hover:text-primary transition-colors">API</a></li> */}
            {/* </ul> */}
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              {/* <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li> */}
              <li><a href="https://docs.littleregistry.com/introduction" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="https://blog.littleregistry.com/" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="https://go.crisp.chat/chat/embed/?website_id=89c96ef7-cccf-4f92-8cc1-894a926bef19" className="hover:text-primary transition-colors" className="hover:text-primary transition-colors">Contact Us</a></li>
              {/* <li><a href="https://go.crisp.chat/chat/embed/?website_id=89c96ef7-cccf-4f92-8cc1-894a926bef19" className="hover:text-primary transition-colors">Contact Us</a></li> */}
              
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@littleregistry.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>New York, NY</span>
              </div>
              {/* <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span><a href="https://go.crisp.chat/chat/embed/?website_id=89c96ef7-cccf-4f92-8cc1-894a926bef19" className="hover:text-primary transition-colors">Contact Us</a></span>
              </div> */}
              
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Little Registry. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="/terms" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
            {/* <a href="#" className="hover:text-primary transition-colors">Cookies</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;