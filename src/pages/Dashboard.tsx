import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ClipboardList, 
  Calendar, 
  Home, 
  FileText, 
  GraduationCap, 
  Crown,
  User,
  MessageSquare,
  TrendingUp,
  Bell,
  Settings
} from "lucide-react";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setUser(session.user);
      } else {
        navigate("/auth");
      }
      setLoading(false);
    };

    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          setUser(session.user);
        } else {
          setUser(null);
          navigate("/auth");
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading your dashboard...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const services = [
    {
      title: "Requests",
      description: "Manage your active requests",
      icon: ClipboardList,
      count: 3,
      status: "active",
      href: "/dashboard/requests"
    },
    {
      title: "Bookings",
      description: "Your upcoming bookings",
      icon: Calendar,
      count: 2,
      status: "confirmed",
      href: "/dashboard/bookings"
    },
    {
      title: "Real Estate",
      description: "Property search & viewings",
      icon: Home,
      count: 5,
      status: "viewing",
      href: "/dashboard/real-estate"
    },
    {
      title: "Visa & Business",
      description: "Legal & business setup",
      icon: FileText,
      count: 1,
      status: "processing",
      href: "/dashboard/business"
    },
    {
      title: "School Admissions",
      description: "Education services",
      icon: GraduationCap,
      count: 0,
      status: "none",
      href: "/dashboard/education"
    },
    {
      title: "VIP Lounge Access",
      description: "Exclusive experiences",
      icon: Crown,
      count: 4,
      status: "available",
      href: "/dashboard/vip"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, {user.email}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => alert("Notifications feature coming soon")}
              >
                <Bell className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate("/profile")}
              >
                <Settings className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate("/")}
              >
                Back to Home
              </Button>
              <Button 
                variant="premium" 
                size="sm"
                onClick={() => navigate("/chat")}
              >
                Quick Chat
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Active Requests</CardTitle>
              <div className="text-3xl font-bold text-gold">6</div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <TrendingUp className="w-4 h-4 mr-1" />
                2 completed this week
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Upcoming Events</CardTitle>
              <div className="text-3xl font-bold text-gold">8</div>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Next: Property viewing tomorrow
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Concierge Score</CardTitle>
              <div className="text-3xl font-bold text-gold">98%</div>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Excellent service rating
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-6">Your Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={service.title} 
                  className="cursor-pointer hover:shadow-card transition-all duration-300 hover:scale-105"
                  onClick={() => navigate(service.href)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Icon className="w-8 h-8 text-gold" />
                      {service.count > 0 && (
                        <Badge variant="secondary">{service.count}</Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground capitalize">
                        {service.status}
                      </span>
                      <Button variant="ghost" size="sm">
                        View Details →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-gold" />
                <span>AI Concierge</span>
              </CardTitle>
              <CardDescription>
                Chat with your personal AI assistant
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full" 
                variant="premium"
                onClick={() => navigate("/chat")}
              >
                Start Conversation
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5 text-gold" />
                <span>Profile & Preferences</span>
              </CardTitle>
              <CardDescription>
                Manage your account and preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full" 
                variant="elegant"
                onClick={() => navigate("/profile")}
              >
                Edit Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}