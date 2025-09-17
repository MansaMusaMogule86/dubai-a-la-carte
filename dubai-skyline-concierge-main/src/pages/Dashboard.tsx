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
  Settings,
  MapPin,
  Car,
  Anchor,
  Camera,
  Upload,
  Sun,
  Sparkles,
  Heart,
  ChefHat
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

  const userName = user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split('@')[0] || 'Valued Guest';
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening';

  const aiRecommendations = [
    {
      title: "Desert Safari Experience",
      description: "Perfect weather for dune bashing and sunset viewing",
      icon: Sun,
      action: "Book Now"
    },
    {
      title: "Luxury Yacht Charter",
      description: "Trending among our VIP clients this week",
      icon: Anchor,
      action: "Reserve"
    },
    {
      title: "Burj Khalifa Dining",
      description: "Exclusive dining with skyline views available tonight",
      icon: ChefHat,
      action: "View Menu"
    }
  ];

  const quickActions = [
    {
      title: "Book Desert Safari",
      description: "Adventure awaits in the golden dunes",
      icon: Sun,
      color: "from-orange-500/20 to-yellow-500/20",
      action: () => navigate("/bookings")
    },
    {
      title: "Reserve Yacht or Limo",
      description: "Luxury transportation at your service",
      icon: Car,
      color: "from-blue-500/20 to-cyan-500/20",
      action: () => navigate("/bookings")
    },
    {
      title: "View Real Estate",
      description: "Discover premium properties",
      icon: Home,
      color: "from-green-500/20 to-emerald-500/20",
      action: () => navigate("/real-estate")
    },
    {
      title: "Upload Documents",
      description: "Passport, visa, and business docs",
      icon: Upload,
      color: "from-purple-500/20 to-pink-500/20",
      action: () => navigate("/profile")
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gold to-gold/70 bg-clip-text text-transparent">
                Dubai À La Carte
              </h1>
              <div className="space-y-1">
                <p className="text-2xl font-semibold">
                  Welcome back, <span className="text-gold">{userName}</span>
                </p>
                <p className="text-base text-muted-foreground">
                  {greeting}! Ready for another extraordinary day?
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => alert("Notifications feature coming soon")}
                className="hover:bg-gold/10"
              >
                <Bell className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate("/profile")}
                className="hover:bg-gold/10"
              >
                <Settings className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate("/")}
                className="border-gold/30 text-gold hover:bg-gold/10"
              >
                Home
              </Button>
              <Button 
                variant="premium" 
                size="sm"
                onClick={() => navigate("/chat")}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Lifestyle Manager
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="bg-gradient-to-br from-gold/5 via-transparent to-gold/10 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">What would you like to do today?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Looking for <span className="text-gold">adventure</span>, 
              <span className="text-gold"> culture</span>, or 
              <span className="text-gold"> exquisite dining</span>?
            </p>
            
            {/* AI Recommendations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {aiRecommendations.map((rec, index) => {
                const Icon = rec.icon;
                return (
                  <Card key={index} className="border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/10 rounded-full mb-4">
                        <Icon className="w-6 h-6 text-gold" />
                      </div>
                      <h3 className="font-semibold mb-2">{rec.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{rec.description}</p>
                      <Button variant="outline" size="sm" className="border-gold/30 text-gold hover:bg-gold/10">
                        {rec.action}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 mr-2 text-gold" />
              AI-powered recommendations based on current trends and weather
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Action Cards */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Card 
                  key={index} 
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 border-gold/20 hover:border-gold/40 overflow-hidden"
                  onClick={action.action}
                >
                  <div className={`h-2 bg-gradient-to-r ${action.color}`} />
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4">
                      <Icon className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="font-semibold mb-2">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-gold/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-gold" />
                Active Requests
              </CardTitle>
              <div className="text-3xl font-bold text-gold">6</div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <Heart className="w-4 h-4 mr-1 text-gold" />
                2 completed this week
              </div>
            </CardContent>
          </Card>

          <Card className="border-gold/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-gold" />
                Upcoming Events
              </CardTitle>
              <div className="text-3xl font-bold text-gold">8</div>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Next: Property viewing tomorrow
              </div>
            </CardContent>
          </Card>

          <Card className="border-gold/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Crown className="w-5 h-5 mr-2 text-gold" />
                Concierge Score
              </CardTitle>
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
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Your Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={service.title} 
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 border-gold/20 hover:border-gold/40 group"
                  onClick={() => navigate(service.href)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-gold/10 rounded-full group-hover:bg-gold/20 transition-colors">
                        <Icon className="w-6 h-6 text-gold" />
                      </div>
                      {service.count > 0 && (
                        <Badge variant="secondary" className="bg-gold/20 text-gold border-gold/30">
                          {service.count}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg group-hover:text-gold transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground capitalize">
                        {service.status}
                      </span>
                      <Button variant="ghost" size="sm" className="text-gold hover:bg-gold/10">
                        View Details →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Lifestyle Manager Section */}
        <Card className="bg-gradient-to-br from-gold/5 to-gold/10 border-gold/30">
          <CardContent className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full mb-6">
              <MessageSquare className="w-8 h-8 text-gold" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Ask Your Lifestyle Manager</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our AI-powered concierge is available 24/7 to assist with reservations, recommendations, 
              and any questions about Dubai's finest experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="premium" 
                size="lg"
                onClick={() => navigate("/chat")}
                className="min-w-48"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Start Conversation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate("/profile")}
                className="border-gold/30 text-gold hover:bg-gold/10 min-w-48"
              >
                <User className="w-5 h-5 mr-2" />
                Manage Preferences
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}