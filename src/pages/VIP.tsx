import { Navigation } from "@/components/Navigation";
import { useAuth } from "@/hooks/useAuth";
import { Crown, Sparkles, Calendar, Star, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ServiceChatbot } from "@/components/ServiceChatbot";
import venueCoucou from "@/assets/venue-coucou.jpg";
import venueAmazonico from "@/assets/venue-amazonico.jpg";
import venueSalvaje from "@/assets/venue-salvaje.jpg";
import venueVerdeBeach from "@/assets/venue-verde-beach.jpg";
import venueChicNonna from "@/assets/venue-chic-nonna.jpg";
import venueGattopardo from "@/assets/venue-gattopardo.jpg";
import venueSurfClub from "@/assets/venue-surf-club.jpg";
import venueCeLaVie from "@/assets/venue-ce-la-vie.jpg";
import venueBoaSteakhouse from "@/assets/venue-boa-steakhouse.jpg";
import venueCavalliClub from "@/assets/venue-cavalli-club.jpg";
import venueWhiteDubai from "@/assets/venue-white-dubai.jpg";
import venueGoldOn27 from "@/assets/venue-gold-on-27.jpg";
import venueArmaniPrive from "@/assets/venue-armani-prive.jpg";
import venueSky20 from "@/assets/venue-sky-2-0.jpg";
import venueCirqueLeSoir from "@/assets/venue-cirque-le-soir.jpg";
import venueSanBeach from "@/assets/venue-san-beach.jpg";
import venueUrla from "@/assets/venue-urla.jpg";
import venueBarDesPres from "@/assets/venue-bar-des-pres.jpg";

const VIP = () => {
  const { user, signOut } = useAuth();

  const premiumVenues = [
    {
      name: "Coucou (Palm)",
      description: "Experience panoramic 360-degree views of the Dubai skyline from The Palm Tower. Coucou offers refined Mediterranean cuisine, live performances, and a vibrant atmosphere, making it an unforgettable family-friendly destination.",
      image: venueCoucou,
      highlights: ["360° Dubai Views", "Mediterranean Cuisine", "Live Performances"],
      location: "Palm Tower"
    },
    {
      name: "Amazonico",
      description: "Indulge in an exotic celebration at Amazonico, featuring elegant jungle-inspired interiors and exquisite Latin American cuisine. Known for its refined flavors and vibrant ambiance.",
      image: venueAmazonico,
      highlights: ["Jungle-Inspired Decor", "Latin American Cuisine", "Vibrant Ambiance"],
      location: "DIFC"
    },
    {
      name: "Salvaje (Burj View)",
      description: "Celebrate with a vibrant ambiance and innovative cuisine at Salvaje, offering stunning views of the Burj Khalifa. A premier choice for luxury party enthusiasts seeking exotic flavors.",
      image: venueSalvaje,
      highlights: ["Burj Khalifa Views", "Innovative Cuisine", "Vibrant Atmosphere"],
      location: "Downtown Dubai"
    },
    {
      name: "Verde Beach (Jumeirah)",
      description: "Enjoy unparalleled beachfront luxury at Verde Beach, with stunning waterfront views. Experience premium services and exquisite Mediterranean-inspired cuisine by the sea.",
      image: venueVerdeBeach,
      highlights: ["Beachfront Dining", "Mediterranean Menu", "Waterfront Views"],
      location: "Jumeirah"
    },
    {
      name: "Chic Nonna (Burj View)",
      description: "Experience Italian elegance and intimate dining with Burj Khalifa views at Chic Nonna. Delight in homemade pasta, wood-fired pizzas, and gourmet antipasti for a sophisticated celebration.",
      image: venueChicNonna,
      highlights: ["Italian Cuisine", "Burj Views", "Intimate Dining"],
      location: "DIFC"
    },
    {
      name: "Gattopardo (Burj View)",
      description: "Located in the heart of DIFC, Gattopardo offers a cosmopolitan atmosphere with stunning Burj Khalifa views and refined Italian culinary options for a chic celebration.",
      image: venueGattopardo,
      highlights: ["Cosmopolitan Vibe", "Italian Fine Dining", "DIFC Location"],
      location: "DIFC"
    },
    {
      name: "Surf Club (Palm View)",
      description: "Enjoy a relaxed yet sophisticated ambiance at Surf Club on Palm West Beach. This venue features a seafood-focused menu with sushi and charcoal grills, ideal for a stylish celebration.",
      image: venueSurfClub,
      highlights: ["Palm Beach Views", "Seafood & Sushi", "Relaxed Luxury"],
      location: "Palm West Beach"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation user={user} onLogout={signOut} />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-6">
              <Crown className="w-8 h-8 text-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dubai's Most <span className="text-gold">Exclusive Clubs & Lounges</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Experience the pinnacle of Dubai's nightlife scene with exclusive access to the city's most prestigious venues, 
              private tables, and red-carpet treatment at every location.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <div className="flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-gold" />
                <span>VIP Table Service</span>
              </div>
              <div className="flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-gold" />
                <span>Premium Bottle Service</span>
              </div>
              <div className="flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4 text-gold" />
                <span>Instant Reservations</span>
              </div>
            </div>
          </div>

          {/* Premium Dubai Clubs & Lounges */}
          <Card className="mb-12 overflow-hidden">
            <div className="bg-gradient-to-r from-gold/10 to-gold/5 p-6 border-b border-gold/20">
              <h2 className="text-2xl font-bold text-center">Dubai's Most Exclusive Clubs & Lounges</h2>
              <p className="text-center text-muted-foreground mt-2">Experience the pinnacle of luxury nightlife in Dubai</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              <Card className="overflow-hidden hover:shadow-card transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={venueCeLaVie} 
                    alt="CÉ LA VIE Dubai"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-gold transition-colors">CÉ LA VIE Dubai</h3>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1" />
                      SLS Dubai Hotel
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Rooftop sophistication with 360° city views</p>
                  <Button variant="gold" size="sm" onClick={() => window.open("https://w.app/Dubaialacarte", "_blank")}>
                    <Phone className="w-3 h-3 mr-1" />
                    Reserve
                  </Button>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-card transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={venueBoaSteakhouse} 
                    alt="BOA Steakhouse"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-gold transition-colors">BOA Steakhouse</h3>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1" />
                      Four Seasons Resort Dubai
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Premium steakhouse with panoramic Marina views</p>
                  <Button variant="gold" size="sm" onClick={() => window.open("https://w.app/Dubaialacarte", "_blank")}>
                    <Phone className="w-3 h-3 mr-1" />
                    Reserve
                  </Button>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-card transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={venueCavalliClub} 
                    alt="Cavalli Club"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-gold transition-colors">Cavalli Club</h3>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1" />
                      Fairmont Dubai
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Luxurious dining and entertainment venue</p>
                  <Button variant="gold" size="sm" onClick={() => window.open("https://w.app/Dubaialacarte", "_blank")}>
                    <Phone className="w-3 h-3 mr-1" />
                    Reserve
                  </Button>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-card transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={venueWhiteDubai} 
                    alt="WHITE Dubai"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-gold transition-colors">WHITE Dubai</h3>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1" />
                      Meydan Racecourse
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Iconic rooftop club with world-class DJs</p>
                  <Button variant="gold" size="sm" onClick={() => window.open("https://w.app/Dubaialacarte", "_blank")}>
                    <Phone className="w-3 h-3 mr-1" />
                    Reserve
                  </Button>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-card transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={venueGoldOn27} 
                    alt="Gold on 27"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-gold transition-colors">Gold on 27</h3>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1" />
                      Burj Al Arab Jumeirah
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Hidden speakeasy at Burj Al Arab</p>
                  <Button variant="gold" size="sm" onClick={() => window.open("https://w.app/Dubaialacarte", "_blank")}>
                    <Phone className="w-3 h-3 mr-1" />
                    Reserve
                  </Button>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-card transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={venueArmaniPrive} 
                    alt="Armani/Privé"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-gold transition-colors">Armani/Privé</h3>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1" />
                      Armani Hotel Dubai
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Ultra-exclusive nightclub in Burj Khalifa</p>
                  <Button variant="gold" size="sm" onClick={() => window.open("https://w.app/Dubaialacarte", "_blank")}>
                    <Phone className="w-3 h-3 mr-1" />
                    Reserve
                  </Button>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-card transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={venueSky20} 
                    alt="SKY 2.0"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-gold transition-colors">SKY 2.0</h3>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1" />
                      Four Points by Sheraton
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Sky-high nightclub with stunning city views</p>
                  <Button variant="gold" size="sm" onClick={() => window.open("https://w.app/Dubaialacarte", "_blank")}>
                    <Phone className="w-3 h-3 mr-1" />
                    Reserve
                  </Button>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-card transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={venueCirqueLeSoir} 
                    alt="Cirque Le Soir"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-gold transition-colors">Cirque Le Soir</h3>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1" />
                      Fairmont Dubai
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Theatrical circus-themed nightclub experience</p>
                  <Button variant="gold" size="sm" onClick={() => window.open("https://w.app/Dubaialacarte", "_blank")}>
                    <Phone className="w-3 h-3 mr-1" />
                    Reserve
                  </Button>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-card transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={venueSanBeach} 
                    alt="SĀN Beach"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-gold transition-colors">SĀN Beach</h3>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1" />
                      Atlantis The Palm
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Beachfront luxury club and restaurant</p>
                  <Button variant="gold" size="sm" onClick={() => window.open("https://w.app/Dubaialacarte", "_blank")}>
                    <Phone className="w-3 h-3 mr-1" />
                    Reserve
                  </Button>
                </div>
              </Card>
            </div>
          </Card>

          {/* Premium Venues */}
          <Card className="mb-12 overflow-hidden">
            <div className="bg-gradient-to-r from-gold/10 to-gold/5 p-6 border-b border-gold/20">
              <h2 className="text-2xl font-bold text-center">Premium Dubai Venues & Restaurants</h2>
              <p className="text-center text-muted-foreground mt-2">Discover Dubai's most exclusive dining destinations</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {premiumVenues.map((venue, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-card transition-all duration-300 group">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={venue.image} 
                      alt={venue.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold group-hover:text-gold transition-colors">{venue.name}</h3>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3 mr-1" />
                        {venue.location}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{venue.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {venue.highlights.map((highlight, i) => (
                        <span key={i} className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="gold" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => window.open("https://w.app/Dubaialacarte", "_blank")}
                      >
                        <Phone className="w-3 h-3 mr-1" />
                        Reserve
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => alert(`More details about ${venue.name} coming soon`)}
                      >
                        Details
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>

          {/* Premium Fine Dining Venues */}
          <Card className="mb-12 overflow-hidden">
            <div className="bg-gradient-to-r from-gold/10 to-gold/5 p-6 border-b border-gold/20">
              <h2 className="text-2xl font-bold text-center">Exclusive Fine Dining Experiences</h2>
              <p className="text-center text-muted-foreground mt-2">Discover Dubai's premier gourmet destinations</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              <Card className="overflow-hidden hover:shadow-card transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={venueUrla} 
                    alt="Urla Dubai"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-gold transition-colors">Urla (Burj View)</h3>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1" />
                      DIFC
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Mediterranean fine dining with stunning Burj Khalifa views and refined culinary excellence</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full">Burj Views</span>
                    <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full">Mediterranean</span>
                    <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full">Fine Dining</span>
                  </div>
                  <Button variant="gold" size="sm" onClick={() => window.open("https://w.app/Dubaialacarte", "_blank")}>
                    <Phone className="w-3 h-3 mr-1" />
                    Reserve
                  </Button>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-card transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={venueBarDesPres} 
                    alt="Bar des Pres Dubai"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-gold transition-colors">Bar des Pres (Burj View)</h3>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1" />
                      DIFC
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">French-Japanese fusion cuisine with Burj Khalifa views, offering an elegant gastronomic journey</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full">French-Japanese</span>
                    <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full">Burj Views</span>
                    <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full">Fusion Cuisine</span>
                  </div>
                  <Button variant="gold" size="sm" onClick={() => window.open("https://w.app/Dubaialacarte", "_blank")}>
                    <Phone className="w-3 h-3 mr-1" />
                    Reserve
                  </Button>
                </div>
              </Card>
            </div>
          </Card>

          {/* Call to Action */}
          <Card className="p-8 text-center bg-gradient-to-br from-gold/5 to-transparent border-gold/20">
            <h2 className="text-2xl font-bold mb-4">Ready for Your VIP Experience?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join Dubai's most exclusive circle and gain access to the city's most prestigious venues and events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="premium" 
                size="lg"
                onClick={() => alert("VIP membership enrollment coming soon")}
              >
                <Crown className="w-5 h-5 mr-2" />
                Become VIP Member
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gold/30 text-gold hover:bg-gold/10"
                onClick={() => alert("VIP event calendar coming soon")}
              >
                <Calendar className="w-5 h-5 mr-2" />
                View Event Calendar
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* VIP Dining Assistant */}
      <ServiceChatbot
        serviceName="VIP Services"
        botName="Sofia"
        botColor="#D4AF37"
        systemPrompt="You are Sofia, a luxury VIP concierge assistant specializing in premium dining and entertainment in Dubai. You have extensive knowledge of high-end restaurants, exclusive venues, private dining experiences, yacht charters, private jets, and luxury accommodations. You provide personalized recommendations based on preferences, budget, and occasion. You speak with elegance and sophistication, offering insider knowledge about Dubai's most exclusive venues including Coucou, Amazonico, Salvaje, Verde Beach, Chic Nonna, Gattopardo, and Surf Club. Always provide specific details about ambiance, cuisine, views, and booking requirements."
        welcomeMessage="Welcome! I'm Sofia, your personal VIP concierge. I specialize in Dubai's most exclusive dining experiences and luxury services. How may I assist you in creating an unforgettable experience today?"
        position="right"
      />
    </div>
  );
};

export default VIP;