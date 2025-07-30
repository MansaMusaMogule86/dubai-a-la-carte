import { Navigation } from "@/components/Navigation";
import { useAuth } from "@/hooks/useAuth";
import { Crown, Sparkles, Calendar, Star, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import venueCoucou from "@/assets/venue-coucou.jpg";
import venueAmazonico from "@/assets/venue-amazonico.jpg";
import venueSalvaje from "@/assets/venue-salvaje.jpg";
import venueVerdeBeach from "@/assets/venue-verde-beach.jpg";
import venueChicNonna from "@/assets/venue-chic-nonna.jpg";
import venueGattopardo from "@/assets/venue-gattopardo.jpg";
import venueSurfClub from "@/assets/venue-surf-club.jpg";

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              VIP Lounge Access Dubai – <span className="text-gold">Exclusive Events & Premium Venues 2025</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Secure your VIP Lounge Access in Dubai 2025—exclusive tables, private events, and premium nightlife with instant booking and red-carpet treatment.
            </p>
          </div>

          {/* VIP Services Table */}
          <Card className="mb-12 overflow-hidden">
            <div className="bg-gradient-to-r from-gold/10 to-gold/5 p-6 border-b border-gold/20">
              <h2 className="text-2xl font-bold text-center">VIP Services & Exclusive Access</h2>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-gold/20">
                    <TableHead className="font-semibold text-foreground">VIP Service</TableHead>
                    <TableHead className="font-semibold text-foreground">What You Get</TableHead>
                    <TableHead className="font-semibold text-foreground text-center">Instant Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-gold/10">
                    <TableCell className="font-medium">🎤 Private Events</TableCell>
                    <TableCell>Invitation-only galas, brand launches & after-parties at Atlantis Royal, One&Only Royal Mirage, floating Dubai Canal lounges</TableCell>
                    <TableCell className="text-center">
                      <Button 
                        variant="gold" 
                        size="sm"
                        onClick={() => alert("Private event invitation system coming soon")}
                      >
                        Request Invite
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-gold/10">
                    <TableCell className="font-medium">🍾 Premium Venues</TableCell>
                    <TableCell>Skip-the-line tables at CÉ LA VI, BOA, Cavalli Club, WHITE Dubai & hidden speakeasy Gold on 27 (Burj Al Arab)</TableCell>
                    <TableCell className="text-center">
                      <Button 
                        variant="gold" 
                        size="sm"
                        onClick={() => alert("Table reservation system coming soon")}
                      >
                        Reserve Table
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-gold/10">
                    <TableCell className="font-medium">🎪 Exclusive Galas</TableCell>
                    <TableCell>Red-carpet nights during Dubai World Cup, Art Dubai, GITEX, Diwali @ Bollywood Parks</TableCell>
                    <TableCell className="text-center">
                      <Button 
                        variant="gold" 
                        size="sm"
                        onClick={() => alert("Exclusive gala reservation coming soon")}
                      >
                        Lock My Spot
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-gold/10">
                    <TableCell className="font-medium">🚪 Elite Clubs</TableCell>
                    <TableCell>Lifetime-style access to Armani/Privé, SKY 2.0, Cirque Le Soir, SĀN Beach, DRIFT</TableCell>
                    <TableCell className="text-center">
                      <Button 
                        variant="gold" 
                        size="sm"
                        onClick={() => alert("Elite club pass activation coming soon")}
                      >
                        Activate Pass
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-gold/10">
                    <TableCell className="font-medium">📅 Live Event Calendar</TableCell>
                    <TableCell>Real-time VIP-only calendar, 1-tap RSVP & wait-list sync to Apple/Google</TableCell>
                    <TableCell className="text-center">
                      <Button 
                        variant="gold" 
                        size="sm"
                        onClick={() => alert("Live event calendar coming soon")}
                      >
                        View Calendar
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-gold/10">
                    <TableCell className="font-medium">🎁 Curated Luxury</TableCell>
                    <TableCell>Personal hostess, limo transfers, complimentary champagne, backstage meet-and-greets</TableCell>
                    <TableCell className="text-center">
                      <Button 
                        variant="gold" 
                        size="sm"
                        onClick={() => alert("Luxury upgrade system coming soon")}
                      >
                        Upgrade My Night
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-gold/10">
                    <TableCell className="font-medium">⚡ Priority Perks</TableCell>
                    <TableCell>Skip queues, best-table guarantee, chef's tasting menu, discrete billing</TableCell>
                    <TableCell className="text-center">
                      <Button 
                        variant="gold" 
                        size="sm"
                        onClick={() => alert("Priority booking system coming soon")}
                      >
                        Book Priority
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
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

          {/* VIP Gallery */}
          <Card className="mb-12 overflow-hidden">
            <div className="bg-gradient-to-r from-gold/10 to-gold/5 p-6 border-b border-gold/20">
              <h2 className="text-2xl font-bold text-center">VIP Experience Gallery</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="aspect-[4/3] bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center border-r border-gold/10">
                <div className="text-center p-6">
                  <Crown className="w-16 h-16 text-gold mx-auto mb-4" />
                  <p className="text-sm font-medium">Urla (Burj View)</p>
                  <p className="text-xs text-muted-foreground">Mediterranean Fine Dining</p>
                </div>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-gold/15 to-gold/8 flex items-center justify-center border-r border-gold/10">
                <div className="text-center p-6">
                  <Sparkles className="w-16 h-16 text-gold mx-auto mb-4" />
                  <p className="text-sm font-medium">Bar des Pres (Burj View)</p>
                  <p className="text-xs text-muted-foreground">French-Japanese Fusion</p>
                </div>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-gold/10 to-gold/3 flex items-center justify-center">
                <div className="text-center p-6">
                  <Star className="w-16 h-16 text-gold mx-auto mb-4" />
                  <p className="text-sm font-medium">Aristo Desert (Al Ain)</p>
                  <p className="text-xs text-muted-foreground">Desert Luxury Experience</p>
                </div>
              </div>
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
    </div>
  );
};

export default VIP;