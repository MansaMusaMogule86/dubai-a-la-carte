import { Navigation } from "@/components/Navigation";
import { useAuth } from "@/hooks/useAuth";
import { Home, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RealEstate = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Navigation user={user} onLogout={signOut} />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Luxury <span className="text-gold">Real Estate</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exclusive access to Dubai's most prestigious properties and expert real estate consultation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6">
              <Home className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Listings</h3>
              <p className="text-muted-foreground mb-4">
                Access to exclusive off-market properties in Dubai's most desirable locations.
              </p>
              <Button variant="outline">View Listings</Button>
            </Card>

            <Card className="p-6">
              <MapPin className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">Prime Locations</h3>
              <p className="text-muted-foreground mb-4">
                Palm Jumeirah, Downtown Dubai, Dubai Marina, and other prestigious areas.
              </p>
              <Button variant="outline">Explore Areas</Button>
            </Card>

            <Card className="p-6">
              <Calendar className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Consultation</h3>
              <p className="text-muted-foreground mb-4">
                Schedule private viewings with our certified real estate specialists.
              </p>
              <Button variant="outline">Book Agent</Button>
            </Card>
          </div>

          <Card className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our real estate experts are standing by to help you discover the perfect luxury property in Dubai.
            </p>
            <Button variant="premium" size="lg">
              Connect with Agent
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RealEstate;