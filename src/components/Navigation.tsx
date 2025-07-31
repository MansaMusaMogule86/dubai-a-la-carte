import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut, ChevronDown, LayoutDashboard, Plane, MessageSquare, Home, Building2, GraduationCap, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface NavigationProps {
  user?: any;
  onLogout?: () => void;
}

export const Navigation = ({ user, onLogout }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const services = [
    { 
      name: "Dashboard", 
      href: "/dashboard", 
      icon: LayoutDashboard, 
      description: "Welcome client, request input, quick actions",
      subCategories: [
        { name: "Overview", href: "/dashboard" },
        { name: "Analytics", href: "/dashboard/analytics" },
        { name: "Quick Actions", href: "/dashboard/actions" },
        { name: "Recent Activity", href: "/dashboard/activity" }
      ]
    },
    { 
      name: "Bookings", 
      href: "/bookings", 
      icon: Plane, 
      description: "View & manage flights/hotels/limo bookings",
      subCategories: [
        { name: "All", href: "/bookings" },
        { name: "Flights", href: "/bookings/flights" },
        { name: "Hotels", href: "/bookings/hotels" },
        { name: "Yachts", href: "/bookings/yachts" },
        { name: "Luxury Car Rental", href: "/bookings/luxury-car-rental" },
        { name: "Desert Safari", href: "/bookings/desert-safari" },
        { name: "Helicopter Rides", href: "/bookings/helicopter-rides" },
        { name: "Adrenaline & Sky Adventures", href: "/bookings/adrenaline-sky" },
        { name: "Fun & Gaming", href: "/bookings/fun-gaming" },
        { name: "Jet Ski & Flyboard", href: "/bookings/jet-ski-flyboard" }
      ]
    },
    { 
      name: "Real Estate", 
      href: "/real-estate", 
      icon: Home, 
      description: "View luxury listings + book agent",
      subCategories: [
        { name: "All Properties", href: "/real-estate" },
        { name: "Villas", href: "/real-estate/villas" },
        { name: "Apartments", href: "/real-estate/apartments" },
        { name: "Penthouses", href: "/real-estate/penthouses" },
        { name: "Book Agent", href: "/real-estate/agent" }
      ]
    },
    { 
      name: "Business Setup", 
      href: "/business", 
      icon: Building2, 
      description: "Start new company, submit documents",
      subCategories: [
        { name: "Company Formation", href: "/business" },
        { name: "License Types", href: "/business/licenses" },
        { name: "Banking Setup", href: "/business/banking" },
        { name: "Visa Processing", href: "/business/visas" },
        { name: "Legal Documentation", href: "/business/legal" }
      ]
    },
    { 
      name: "Schooling", 
      href: "/schooling", 
      icon: GraduationCap, 
      description: "Enroll child, compare options",
      subCategories: [
        { name: "All Schools", href: "/schooling" },
        { name: "International Schools", href: "/schooling/international" },
        { name: "British Curriculum", href: "/schooling/british" },
        { name: "American Curriculum", href: "/schooling/american" },
        { name: "Application Support", href: "/schooling/support" }
      ]
    },
    { 
      name: "VIP Lounge Access", 
      href: "/vip", 
      icon: Crown, 
      description: "See exclusive events, reserve tables",
      subCategories: [
        { name: "All Events", href: "/vip" },
        { name: "Private Clubs", href: "/vip/clubs" },
        { name: "Restaurants", href: "/vip/restaurants" },
        { name: "Nightlife", href: "/vip/nightlife" },
        { name: "Exclusive Events", href: "/vip/events" }
      ]
    },
    { 
      name: "My Profile", 
      href: "/profile", 
      icon: User, 
      description: "Manage info, upload passport, pay invoices",
      subCategories: [
        { name: "Profile Overview", href: "/profile" },
        { name: "Personal Info", href: "/profile/info" },
        { name: "Documents", href: "/profile/documents" },
        { name: "Payment Methods", href: "/profile/payments" },
        { name: "Invoices", href: "/profile/invoices" }
      ]
    },
  ];

  const handleServiceClick = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="text-2xl font-bold">
              <span className="text-foreground">Dubai</span>
              <span className="text-gold"> À La Carte</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {services.map((service) => (
              service.subCategories ? (
                <DropdownMenu key={service.name}>
                  <DropdownMenuTrigger asChild>
                    <button className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium flex items-center gap-1">
                      {service.name}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {service.subCategories.map((subCategory) => (
                      <DropdownMenuItem 
                        key={subCategory.name}
                        onClick={() => handleServiceClick(subCategory.href)}
                        className="cursor-pointer"
                      >
                        {subCategory.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <button
                  key={service.name}
                  onClick={() => handleServiceClick(service.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                >
                  {service.name}
                </button>
              )
            ))}
            {user ? (
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  onClick={() => navigate("/dashboard")}
                  className="flex items-center space-x-2"
                >
                  <User className="w-4 h-4" />
                  <span>Dashboard</span>
                </Button>
                <Button
                  variant="ghost"
                  onClick={onLogout}
                  className="flex items-center space-x-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Button variant="ghost" onClick={() => navigate("/auth")}>
                  Sign In
                </Button>
                <Button variant="premium" onClick={() => navigate("/auth")}>
                  Get Started
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground px-3 py-1">Services</div>
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <button
                      key={service.name}
                      onClick={() => handleServiceClick(service.href)}
                      className="flex items-center space-x-3 w-full px-3 py-2 text-left hover:bg-accent/50 rounded-md transition-colors"
                    >
                      <Icon className="w-4 h-4 text-gold flex-shrink-0" />
                      <span className="text-muted-foreground hover:text-foreground transition-colors">
                        {service.name}
                      </span>
                    </button>
                  );
                })}
              </div>
              {user ? (
                <>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      navigate("/dashboard");
                      setIsOpen(false);
                    }}
                    className="justify-start"
                  >
                    Dashboard
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      onLogout?.();
                      setIsOpen(false);
                    }}
                    className="justify-start"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      navigate("/auth");
                      setIsOpen(false);
                    }}
                    className="justify-start"
                  >
                    Sign In
                  </Button>
                  <Button
                    variant="premium"
                    onClick={() => {
                      navigate("/auth");
                      setIsOpen(false);
                    }}
                    className="justify-start"
                  >
                    Get Started
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};