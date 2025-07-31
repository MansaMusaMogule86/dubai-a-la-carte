import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        {/* Header with logo and user controls */}
        <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/80 backdrop-blur-md border-b border-border flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="ml-2" />
            <div 
              className="text-xl font-bold cursor-pointer"
              onClick={() => navigate("/")}
            >
              <span className="text-foreground">Dubai</span>
              <span className="text-gold"> À La Carte</span>
            </div>
          </div>
          
          {user && (
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/profile")}
                className="flex items-center space-x-2"
              >
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Profile</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={signOut}
                className="flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </div>
          )}
        </header>

        <AppSidebar />
        
        <main className="flex-1 pt-16">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};