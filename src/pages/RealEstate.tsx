import { Navigation } from "@/components/Navigation";
import { useAuth } from "@/hooks/useAuth";
import { Home, MapPin, Calendar, Eye, Bed, Bath, Car, Star, ArrowRight, Search, Filter, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import penthouseBurjKhalifa from "@/assets/penthouse-burj-khalifa.jpg";
import villaPalmJumeirah from "@/assets/villa-palm-jumeirah.jpg";
import apartmentMarinaWalk from "@/assets/apartment-marina-walk.jpg";
import locationDowntownDubai from "@/assets/location-downtown-dubai.jpg";
import locationPalmJumeirah from "@/assets/location-palm-jumeirah.jpg";
import locationDubaiMarina from "@/assets/location-dubai-marina.jpg";
import locationDIFC from "@/assets/location-difc.jpg";

const RealEstate = () => {
  const { user, signOut } = useAuth();

  const featuredProperties = [
    {
      id: 1,
      title: "Penthouse at Burj Khalifa",
      location: "Downtown Dubai",
      price: "AED 45,000,000",
      type: "Penthouse",
      bedrooms: 4,
      bathrooms: 5,
      parking: 3,
      area: "6,500 sq ft",
      image: penthouseBurjKhalifa,
      rating: 5.0,
      features: ["Private Pool", "360° City Views", "Concierge Service"]
    },
    {
      id: 2,
      title: "Villa at Palm Jumeirah",
      location: "Palm Jumeirah",
      price: "AED 28,000,000",
      type: "Villa",
      bedrooms: 6,
      bathrooms: 7,
      parking: 4,
      area: "8,200 sq ft",
      image: villaPalmJumeirah,
      rating: 4.9,
      features: ["Private Beach", "Garden", "Maid's Room"]
    },
    {
      id: 3,
      title: "Apartment at Marina Walk",
      location: "Dubai Marina",
      price: "AED 3,500,000",
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 3,
      parking: 2,
      area: "1,800 sq ft",
      image: apartmentMarinaWalk,
      rating: 4.8,
      features: ["Marina Views", "Gym Access", "Pool"]
    }
  ];

  const primeLocations = [
    {
      name: "Downtown Dubai",
      description: "Heart of the city with iconic landmarks",
      avgPrice: "AED 2,500/sq ft",
      properties: 150,
      highlights: ["Burj Khalifa", "Dubai Mall", "Dubai Fountain"],
      image: locationDowntownDubai
    },
    {
      name: "Palm Jumeirah",
      description: "Exclusive island lifestyle",
      avgPrice: "AED 2,800/sq ft",
      properties: 89,
      highlights: ["Private Beaches", "Luxury Resorts", "Iconic Views"],
      image: locationPalmJumeirah
    },
    {
      name: "Dubai Marina",
      description: "Waterfront living with marina views",
      avgPrice: "AED 1,900/sq ft",
      properties: 240,
      highlights: ["Marina Walk", "JBR Beach", "Fine Dining"],
      image: locationDubaiMarina
    },
    {
      name: "DIFC",
      description: "Financial district with modern towers",
      avgPrice: "AED 2,200/sq ft",
      properties: 78,
      highlights: ["Business Hub", "Art Galleries", "Upscale Dining"],
      image: locationDIFC
    }
  ];

  const services = [
    {
      icon: Search,
      title: "Property Search",
      description: "AI-powered search with personalized recommendations",
      features: ["Advanced Filters", "Price Alerts", "Market Analysis"]
    },
    {
      icon: Eye,
      title: "Virtual Tours",
      description: "3D walkthroughs and virtual reality experiences",
      features: ["360° Views", "VR Headsets", "Live Video Tours"]
    },
    {
      icon: Calendar,
      title: "Property Viewings",
      description: "Schedule private viewings with certified agents",
      features: ["Flexible Scheduling", "Expert Agents", "Transportation"]
    },
    {
      icon: Home,
      title: "Investment Advisory",
      description: "Professional guidance on property investments",
      features: ["ROI Analysis", "Market Trends", "Portfolio Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation user={user} onLogout={signOut} />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gold/10 text-gold border-gold/20">
              🏆 Dubai's Premier Real Estate Concierge
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Dream Property in <span className="text-gold">Dubai</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Exclusive access to Dubai's most prestigious properties with expert real estate consultation. 
              From luxury penthouses to waterfront villas, we'll find your perfect home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl">
                Browse Properties
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="elegant" size="xl">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Premium Real Estate Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-luxury transition-all duration-300 group">
                  <Icon className="w-12 h-12 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>

          {/* Featured Properties */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Featured Properties</h2>
                <p className="text-muted-foreground">Handpicked luxury properties from our exclusive portfolio</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredProperties.map((property) => (
                <Card key={property.id} className="overflow-hidden hover:shadow-luxury transition-all duration-300 group">
                  <div className="relative">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Button variant="ghost" size="sm" className="absolute top-3 right-3 bg-white/80 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Badge className="absolute bottom-3 left-3 bg-black/80 text-white">
                      {property.type}
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{property.title}</h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-gold fill-current" />
                        <span className="text-sm text-muted-foreground ml-1">{property.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    
                    <div className="text-2xl font-bold text-gold mb-4">{property.price}</div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Bed className="w-4 h-4 mr-1" />
                        {property.bedrooms} Bed
                      </div>
                      <div className="flex items-center">
                        <Bath className="w-4 h-4 mr-1" />
                        {property.bathrooms} Bath
                      </div>
                      <div className="flex items-center">
                        <Car className="w-4 h-4 mr-1" />
                        {property.parking} Park
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {property.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="premium" size="sm" className="flex-1">
                        Schedule Tour
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Prime Locations */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Prime Dubai Locations</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore Dubai's most sought-after neighborhoods and discover your ideal location
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {primeLocations.map((location, index) => (
                <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 cursor-pointer group overflow-hidden">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img 
                      src={location.image} 
                      alt={location.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-gold transition-colors">{location.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{location.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Avg Price:</span>
                      <span className="font-semibold">{location.avgPrice}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Properties:</span>
                      <span className="font-semibold">{location.properties}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    {location.highlights.map((highlight, idx) => (
                      <div key={idx} className="text-xs text-muted-foreground flex items-center">
                        <div className="w-1 h-1 bg-gold rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="p-8 bg-gradient-card text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              Our real estate experts are standing by to help you discover the perfect luxury property in Dubai. 
              Get personalized recommendations and exclusive access to off-market listings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="premium" 
                size="lg"
                onClick={() => alert("Property consultation booking coming soon")}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button 
                variant="elegant" 
                size="lg"
                onClick={() => alert("Property catalog coming soon")}
              >
                Browse All Properties
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = "/chat"}
              >
                Property Concierge
              </Button>
            </div>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground">
                ⭐ 4.9/5 rating • 1,200+ successful transactions • 24/7 support
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RealEstate;