import { Navigation } from "@/components/Navigation";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Chat = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Navigation user={user} onLogout={signOut} />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Concierge <span className="text-gold">Chat</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Live AI-powered assistance with human expert support available 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center">
              <MessageSquare className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Instant AI Support</h3>
              <p className="text-muted-foreground text-sm">Get immediate answers to common requests</p>
            </Card>

            <Card className="p-6 text-center">
              <Clock className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">24/7 Availability</h3>
              <p className="text-muted-foreground text-sm">Round-the-clock assistance when you need it</p>
            </Card>

            <Card className="p-6 text-center">
              <Users className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Human Experts</h3>
              <p className="text-muted-foreground text-sm">Seamless handoff to specialized consultants</p>
            </Card>
          </div>

          <Card className="p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Start a Conversation</h2>
              <p className="text-muted-foreground mb-6">
                Our AI concierge is ready to assist you with any request, from restaurant reservations to travel planning.
              </p>
              <Button variant="premium" size="lg">
                Begin Chat Session
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chat;