import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen">
      <Navigation user={user} onLogout={signOut} />
      <Hero />
      <Services />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
