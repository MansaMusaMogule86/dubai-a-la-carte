import { Navigation } from "@/components/Navigation";
import { useAuth } from "@/hooks/useAuth";
import { Plane, Hotel, Car, Music } from "lucide-react";
import { Card } from "@/components/ui/card";

const Bookings = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Navigation user={user} onLogout={signOut} />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your <span className="text-gold">Bookings</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              View and manage all your flight, hotel, transportation, and entertainment reservations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-luxury transition-all duration-300">
              <Plane className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flight Bookings</h3>
              <p className="text-muted-foreground">Private jets & first-class flights</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-luxury transition-all duration-300">
              <Hotel className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hotel Reservations</h3>
              <p className="text-muted-foreground">Luxury suites & penthouses</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-luxury transition-all duration-300">
              <Car className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Transportation</h3>
              <p className="text-muted-foreground">Limousines & luxury vehicles</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-luxury transition-all duration-300">
              <Music className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nightlife & Events</h3>
              <p className="text-muted-foreground">VIP club reservations</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;