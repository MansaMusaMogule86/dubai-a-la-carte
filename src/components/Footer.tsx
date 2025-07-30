import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-primary text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to experience Dubai like never before?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join the exclusive circle of individuals who trust us with their Dubai lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl" className="text-base">
                Start Your Journey
              </Button>
              <Button variant="outline" size="xl" className="border-white/30 bg-slate-50 text-zinc-950">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">{/* Changed from md:grid-cols-2 lg:grid-cols-4 to lg:grid-cols-3 for 3 equal sections */}
          {/* Address */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Address</h4>
            <h3 className="text-xl font-bold mb-4">Dubai À La Carte</h3>
            <p className="text-white/80 mb-6">
              Your premier luxury concierge service in Dubai.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-gold" />
                <span className="text-white/80">DIFC, Dubai, UAE</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-gold" />
                <span className="text-white/80">+971 4 123 4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-gold" />
                <span className="text-white/80">hello@dubaialacarte.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">VIP Travel</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Business Setup</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Real Estate</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Education</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Legal Services</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Lifestyle</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Our Team</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Press</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Privacy</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 mb-4 md:mb-0">
            © 2024 Dubai À La Carte. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white/60 hover:text-gold transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-gold transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-gold transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};