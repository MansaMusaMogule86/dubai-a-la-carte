import { Card, CardContent } from "@/components/ui/card";
import { 
  Plane, 
  Building, 
  GraduationCap, 
  Car, 
  Home, 
  Shield,
  Crown,
  Users
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "VIP Travel & Transport",
    description: "Private jets, luxury cars, yacht charters, and exclusive experiences across the UAE.",
    features: ["Private jet bookings", "Luxury car fleet", "Yacht charters", "Airport VIP services"]
  },
  {
    icon: Building,
    title: "Business Setup & Visa",
    description: "Complete UAE business formation, visa processing, and legal documentation services.",
    features: ["Company formation", "Visa processing", "Legal documentation", "Banking assistance"]
  },
  {
    icon: Home,
    title: "Premium Real Estate",
    description: "Curated luxury properties with full relocation support and interior design services.",
    features: ["Luxury property search", "Relocation assistance", "Interior design", "Property management"]
  },
  {
    icon: GraduationCap,
    title: "Education & Schools",
    description: "Access to Dubai's top international schools and universities for your family.",
    features: ["School admissions", "University placements", "Educational consulting", "Tutoring services"]
  },
  {
    icon: Shield,
    title: "Legal & Financial",
    description: "Comprehensive legal support, banking setup, and financial planning services.",
    features: ["Legal consultations", "Banking setup", "Financial planning", "Insurance services"]
  },
  {
    icon: Crown,
    title: "Lifestyle Concierge",
    description: "Exclusive access to Dubai's finest experiences, events, and luxury services.",
    features: ["VIP event access", "Restaurant reservations", "Personal shopping", "Health & wellness"]
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Comprehensive Dubai Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From relocation to luxury experiences, our full-service platform 
            handles every aspect of your Dubai lifestyle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-primary mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};