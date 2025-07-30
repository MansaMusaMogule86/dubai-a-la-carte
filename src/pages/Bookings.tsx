import { Navigation } from "@/components/Navigation";
import { useAuth } from "@/hooks/useAuth";
import { Plane, Hotel, Car, Music, Plus, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { lazy, Suspense } from "react";

// Lazy load heavy components for better performance
const BookingsList = lazy(() => import("../components/BookingsList").catch(() => ({ default: () => <div>Failed to load bookings</div> })));

const BookingCard = ({ icon: Icon, title, description, count = 0 }: {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  count?: number;
}) => (
  <Card className="p-6 text-center hover:shadow-luxury hover:scale-105 transition-all duration-300 cursor-pointer group">
    <div className="relative">
      <Icon className="w-12 h-12 text-gold mx-auto mb-4 group-hover:text-gold-light transition-colors" />
      {count > 0 && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold text-primary text-xs rounded-full flex items-center justify-center font-bold">
          {count}
        </div>
      )}
    </div>
    <h3 className="text-xl font-semibold mb-2 group-hover:text-gold transition-colors">{title}</h3>
    <p className="text-muted-foreground mb-4">{description}</p>
    <Button variant="outline" size="sm" className="w-full group-hover:border-gold">
      <Plus className="w-4 h-4 mr-2" />
      Book Now
    </Button>
  </Card>
);

const Bookings = () => {
  const { user, signOut } = useAuth();

  const bookingCategories = [
    {
      icon: Plane,
      title: "Flight Bookings",
      description: "Private jets & first-class flights",
      count: 3
    },
    {
      icon: Hotel,
      title: "Hotel Reservations",
      description: "Luxury suites & penthouses",
      count: 2
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Limousines & luxury vehicles",
      count: 5
    },
    {
      icon: Music,
      title: "Nightlife & Events",
      description: "VIP club reservations",
      count: 1
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation user={user} onLogout={signOut} />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your <span className="text-gold">Bookings</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              View and manage all your flight, hotel, transportation, and entertainment reservations
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="premium" size="lg">
                <Calendar className="w-5 h-5 mr-2" />
                View Calendar
              </Button>
              <Button variant="elegant" size="lg">
                Export Bookings
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {bookingCategories.map((category, index) => (
              <BookingCard key={index} {...category} />
            ))}
          </div>

          <Suspense fallback={
            <div className="animate-pulse space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-24 bg-secondary rounded-lg" />
              ))}
            </div>
          }>
            <BookingsList />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Bookings;