import { Navigation } from "@/components/Navigation";
import { useAuth } from "@/hooks/useAuth";
import { Building2, FileText, Users, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Business = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Navigation user={user} onLogout={signOut} />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Business <span className="text-gold">Setup</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete business incorporation and setup services in the UAE with expert guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-gold transition-all duration-300">
              <Building2 className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Company Formation</h3>
              <p className="text-muted-foreground text-sm">Mainland, Freezone & Offshore options</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-gold transition-all duration-300">
              <FileText className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Legal Documentation</h3>
              <p className="text-muted-foreground text-sm">All required permits and licenses</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-gold transition-all duration-300">
              <Users className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Visa Processing</h3>
              <p className="text-muted-foreground text-sm">Investor & employee visa services</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-gold transition-all duration-300">
              <Globe className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Banking Setup</h3>
              <p className="text-muted-foreground text-sm">Corporate account opening assistance</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Why Choose UAE?</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                  0% personal income tax
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                  100% foreign ownership
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                  Strategic global location
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                  World-class infrastructure
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Get Started Today</h2>
              <p className="text-muted-foreground mb-6">
                Our business setup specialists will guide you through every step of establishing your company in Dubai.
              </p>
              <Button variant="premium" size="lg" className="w-full">
                Start Business Setup
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;