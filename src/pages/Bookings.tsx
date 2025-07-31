import { Navigation } from "@/components/Navigation";
import { useAuth } from "@/hooks/useAuth";
import { Plane, Hotel, Car, Music, Plus, Calendar, Ship, MapPin, Clock, Star, Crown, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, lazy, Suspense } from "react";

// Lazy load heavy components for better performance
const BookingsList = lazy(() => import("../components/BookingsList").catch(() => ({ default: () => <div>Failed to load bookings</div> })));

interface BookingOption {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  location: string;
  rating: number;
  isExclusive?: boolean;
  isHotDeal?: boolean;
  isFullyBooked?: boolean;
  category: string;
}

const PremiumBookingCard = ({ booking }: { booking: BookingOption }) => (
  <Card className="overflow-hidden hover:shadow-luxury hover:scale-105 transition-all duration-300 group cursor-pointer">
    <div className="relative h-48 bg-gradient-to-br from-gold/20 to-primary/20">
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute top-4 left-4 flex gap-2">
        {booking.isExclusive && (
          <Badge className="bg-gold text-primary border-0">
            <Crown className="w-3 h-3 mr-1" />
            Exclusive
          </Badge>
        )}
        {booking.isHotDeal && (
          <Badge className="bg-red-500 text-white border-0">
            <Zap className="w-3 h-3 mr-1" />
            Hot Deal
          </Badge>
        )}
        {booking.isFullyBooked && (
          <Badge variant="secondary" className="bg-gray-500 text-white border-0">
            Fully Booked
          </Badge>
        )}
      </div>
      <div className="absolute top-4 right-4">
        <div className="flex items-center gap-1 bg-black/30 px-2 py-1 rounded-full">
          <Star className="w-3 h-3 text-gold fill-gold" />
          <span className="text-white text-xs font-medium">{booking.rating}</span>
        </div>
      </div>
    </div>
    
    <CardContent className="p-6">
      <div className="mb-3">
        <h3 className="text-lg font-semibold mb-1 group-hover:text-gold transition-colors">
          {booking.title}
        </h3>
        <p className="text-sm text-muted-foreground">{booking.description}</p>
      </div>
      
      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
        <div className="flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          {booking.location}
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {booking.duration}
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <span className="text-2xl font-bold text-gold">{booking.price}</span>
          <span className="text-sm text-muted-foreground ml-1">per person</span>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-xs"
            disabled={booking.isFullyBooked}
          >
            Add to Itinerary
          </Button>
          <Button 
            size="sm" 
            className="text-xs"
            disabled={booking.isFullyBooked}
          >
            Book Now
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

const CategoryFilter = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: { 
  categories: string[]; 
  activeCategory: string; 
  onCategoryChange: (category: string) => void; 
}) => (
  <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
    {categories.map((category) => (
      <Button
        key={category}
        variant={activeCategory === category ? "default" : "outline"}
        size="sm"
        onClick={() => onCategoryChange(category)}
        className="whitespace-nowrap"
      >
        {category}
      </Button>
    ))}
  </div>
);

const Bookings = () => {
  const { user, signOut } = useAuth();
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTab, setActiveTab] = useState("book");

  const categories = ["All", "Flights", "Hotels", "Yachts", "Limos", "Desert Safari", "Helicopter Rides"];

  const premiumBookings: BookingOption[] = [
    {
      id: "1",
      title: "Private Jet to Paris",
      description: "Gulfstream G650 with personal concierge",
      image: "luxury-jet",
      price: "$45,000",
      duration: "7 hours",
      location: "Dubai → Paris",
      rating: 5.0,
      isExclusive: true,
      category: "Flights"
    },
    {
      id: "2",
      title: "Atlantis Royal Suite",
      description: "Penthouse with private butler & infinity pool",
      image: "atlantis-suite",
      price: "$8,500",
      duration: "Per night",
      location: "Palm Jumeirah",
      rating: 4.9,
      isHotDeal: true,
      category: "Hotels"
    },
    {
      id: "3",
      title: "Platinum Desert Safari",
      description: "Private camp with falcon show & gourmet dinner",
      image: "desert-safari",
      price: "$1,200",
      duration: "6 hours",
      location: "Al Marmoom Desert",
      rating: 4.8,
      isExclusive: true,
      category: "Desert Safari"
    },
    {
      id: "4",
      title: "Superyacht Charter",
      description: "180ft Azimut with crew & water sports",
      image: "superyacht",
      price: "$12,000",
      duration: "Full day",
      location: "Dubai Marina",
      rating: 4.9,
      category: "Yachts"
    },
    {
      id: "5",
      title: "Lamborghini Huracán",
      description: "24-hour luxury car rental with chauffeur",
      image: "lamborghini",
      price: "$2,500",
      duration: "24 hours",
      location: "Dubai Downtown",
      rating: 4.7,
      isHotDeal: true,
      category: "Limos"
    },
    {
      id: "6",
      title: "Helicopter City Tour",
      description: "Private helicopter with champagne service",
      image: "helicopter",
      price: "$3,800",
      duration: "2 hours",
      location: "Dubai Helipad",
      rating: 5.0,
      isExclusive: true,
      category: "Helicopter Rides"
    }
  ];

  const filteredBookings = activeCategory === "All" 
    ? premiumBookings 
    : premiumBookings.filter(booking => booking.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation user={user} onLogout={signOut} />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dubai <span className="text-gold">À La Carte</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Curated luxury experiences at your fingertips
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="book">Book Experience</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>

            <TabsContent value="book" className="space-y-6">
              <div className="text-center mb-6">
                <div className="flex gap-4 justify-center mb-6">
                  <Button variant="premium" size="lg">
                    <Calendar className="w-5 h-5 mr-2" />
                    Calendar View
                  </Button>
                  <Button variant="elegant" size="lg">
                    Quick Book
                  </Button>
                </div>
              </div>

              <CategoryFilter 
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBookings.map((booking) => (
                  <PremiumBookingCard key={booking.id} booking={booking} />
                ))}
              </div>

              {filteredBookings.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No experiences available in this category</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="upcoming">
              <Suspense fallback={
                <div className="animate-pulse space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-32 bg-secondary rounded-lg" />
                  ))}
                </div>
              }>
                <BookingsList />
              </Suspense>
            </TabsContent>

            <TabsContent value="history">
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">Booking History</h3>
                <p className="text-muted-foreground mb-6">
                  View your past experiences and rebook favorites
                </p>
                <Button variant="outline">
                  Load History
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Bookings;