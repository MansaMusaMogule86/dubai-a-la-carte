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
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard, description: "Welcome client, request input, quick actions" },
    { name: "Bookings", href: "/bookings", icon: Plane, description: "View & manage flights/hotels/limo bookings" },
    { name: "Real Estate", href: "/real-estate", icon: Home, description: "View luxury listings + book agent" },
    { name: "Business Setup", href: "/business", icon: Building2, description: "Start new company, submit documents" },
    { name: "Schooling", href: "/schooling", icon: GraduationCap, description: "Enroll child, compare options" },
    { name: "VIP Lounge Access", href: "/vip", icon: Crown, description: "See exclusive events, reserve tables" },
    { name: "My Profile", href: "/profile", icon: User, description: "Manage info, upload passport, pay invoices" },
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
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1 text-muted-foreground hover:text-foreground">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 p-2 bg-popover border-border shadow-luxury">
                <div className="grid grid-cols-1 gap-1">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <DropdownMenuItem
                        key={service.name}
                        onClick={() => handleServiceClick(service.href)}
                        className="flex items-start space-x-3 p-3 cursor-pointer hover:bg-accent/50 rounded-md transition-colors"
                      >
                        <Icon className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-foreground">{service.name}</div>
                          <div className="text-sm text-muted-foreground line-clamp-2">{service.description}</div>
                        </div>
                      </DropdownMenuItem>
                    );
                  })}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
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