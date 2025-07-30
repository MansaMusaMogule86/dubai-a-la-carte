import { Navigation } from "@/components/Navigation";
import { useAuth } from "@/hooks/useAuth";
import { Crown, Sparkles, Calendar, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const VIP = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Navigation user={user} onLogout={signOut} />
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
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
                      <Button variant="gold" size="sm">Request Invite</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-gold/10">
                    <TableCell className="font-medium">🍾 Premium Venues</TableCell>
                    <TableCell>Skip-the-line tables at CÉ LA VI, BOA, Cavalli Club, WHITE Dubai & hidden speakeasy Gold on 27 (Burj Al Arab)</TableCell>
                    <TableCell className="text-center">
                      <Button variant="gold" size="sm">Reserve Table</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-gold/10">
                    <TableCell className="font-medium">🎪 Exclusive Galas</TableCell>
                    <TableCell>Red-carpet nights during Dubai World Cup, Art Dubai, GITEX, Diwali @ Bollywood Parks</TableCell>
                    <TableCell className="text-center">
                      <Button variant="gold" size="sm">Lock My Spot</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-gold/10">
                    <TableCell className="font-medium">🚪 Elite Clubs</TableCell>
                    <TableCell>Lifetime-style access to Armani/Privé, SKY 2.0, Cirque Le Soir, SĀN Beach, DRIFT</TableCell>
                    <TableCell className="text-center">
                      <Button variant="gold" size="sm">Activate Pass</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-gold/10">
                    <TableCell className="font-medium">📅 Live Event Calendar</TableCell>
                    <TableCell>Real-time VIP-only calendar, 1-tap RSVP & wait-list sync to Apple/Google</TableCell>
                    <TableCell className="text-center">
                      <Button variant="gold" size="sm">View Calendar</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-gold/10">
                    <TableCell className="font-medium">🎁 Curated Luxury</TableCell>
                    <TableCell>Personal hostess, limo transfers, complimentary champagne, backstage meet-and-greets</TableCell>
                    <TableCell className="text-center">
                      <Button variant="gold" size="sm">Upgrade My Night</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-gold/10">
                    <TableCell className="font-medium">⚡ Priority Perks</TableCell>
                    <TableCell>Skip queues, best-table guarantee, chef's tasting menu, discrete billing</TableCell>
                    <TableCell className="text-center">
                      <Button variant="gold" size="sm">Book Priority</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
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
                  <p className="text-sm font-medium">Atlantis Royal Gala</p>
                  <p className="text-xs text-muted-foreground">VIP Dinner Experience</p>
                </div>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-gold/15 to-gold/8 flex items-center justify-center border-r border-gold/10">
                <div className="text-center p-6">
                  <Sparkles className="w-16 h-16 text-gold mx-auto mb-4" />
                  <p className="text-sm font-medium">Cavalli Club Table</p>
                  <p className="text-xs text-muted-foreground">Premium Nightlife</p>
                </div>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-gold/10 to-gold/3 flex items-center justify-center">
                <div className="text-center p-6">
                  <Star className="w-16 h-16 text-gold mx-auto mb-4" />
                  <p className="text-sm font-medium">SkyViews Observatory</p>
                  <p className="text-xs text-muted-foreground">VIP Experience</p>
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
              <Button variant="premium" size="lg">
                <Crown className="w-5 h-5 mr-2" />
                Become VIP Member
              </Button>
              <Button variant="outline" size="lg" className="border-gold/30 text-gold hover:bg-gold/10">
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