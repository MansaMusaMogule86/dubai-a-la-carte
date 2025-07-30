import { Navigation } from "@/components/Navigation";
import { useAuth } from "@/hooks/useAuth";
import { Crown, Sparkles, Calendar, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const VIP = () => {
  const {
    user,
    signOut
  } = useAuth();
  return <div className="min-h-screen bg-background">
      <Navigation user={user} onLogout={signOut} />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              VIP <span className="text-gold">Lounge Access</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exclusive access to Dubai's most prestigious events, venues, and VIP experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-gold transition-all duration-300 border-gold/20">
              <Crown className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Private Events</h3>
              <p className="text-muted-foreground text-sm">Exclusive galas & private parties</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-gold transition-all duration-300 border-gold/20">
              <Sparkles className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Premium Venues</h3>
              <p className="text-muted-foreground text-sm">Access to elite clubs & lounges</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-gold transition-all duration-300 border-gold/20">
              <Calendar className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Event Calendar</h3>
              <p className="text-muted-foreground text-sm">Curated luxury experiences</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-gold transition-all duration-300 border-gold/20">
              <Star className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">VIP Treatment</h3>
              <p className="text-muted-foreground text-sm">Priority reservations & perks</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-gradient-to-br from-card to-card/50">
              <h2 className="text-2xl font-bold mb-6">Upcoming Exclusive Events</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                  <div>
                    <h3 className="font-semibold">Burj Al Arab Gala</h3>
                    <p className="text-sm text-muted-foreground">Private dinner experience</p>
                  </div>
                  <span className="text-sm font-medium text-gold">Feb 15</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                  <div>
                    <h3 className="font-semibold">Dubai Opera VIP Night</h3>
                    <p className="text-sm text-muted-foreground">Exclusive box seats</p>
                  </div>
                  <span className="text-sm font-medium text-gold">Feb 22</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                  <div>
                    <h3 className="font-semibold">Atlantis Private Beach</h3>
                    <p className="text-sm text-muted-foreground">Members-only access</p>
                  </div>
                  <span className="text-sm font-medium text-gold">Feb 28</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-gold/5 to-transparent border-gold/20">
              <h2 className="text-2xl font-bold mb-4">VIP Membership Benefits</h2>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Crown className="w-5 h-5 text-gold mr-3" />
                  <span>Priority table reservations</span>
                </li>
                <li className="flex items-center">
                  <Crown className="w-5 h-5 text-gold mr-3" />
                  <span>Complimentary champagne service</span>
                </li>
                <li className="flex items-center">
                  <Crown className="w-5 h-5 text-gold mr-3" />
                  <span>Express entry and VIP treatment</span>
                </li>
                <li className="flex items-center">
                  <Crown className="w-5 h-5 text-gold mr-3" />
                  <span>Dedicated VIP concierge</span>
                </li>
                <li className="flex items-center">
                  <Crown className="w-5 h-5 text-gold mr-3" />
                  <span>Access to exclusive venues</span>
                </li>
              </ul>
              <Button variant="premium" className="w-full">
                Reserve VIP Table
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>;
};
export default VIP;