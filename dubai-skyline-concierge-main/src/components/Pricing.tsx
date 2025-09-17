import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Check, Star, Crown, Zap, Lock } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Essential",
    price: "$2,500",
    period: "/month",
    description: "Perfect for individuals starting their Dubai journey",
    icon: Zap,
    features: [
      "Basic visa assistance",
      "Standard accommodation search",
      "Essential banking setup",
      "Basic transportation",
      "Email support",
      "Monthly check-ins"
    ],
    popular: false,
    cta: "Get Started"
  },
  {
    name: "Premium",
    price: "$7,500",
    period: "/month",
    description: "Comprehensive support for discerning professionals",
    icon: Star,
    features: [
      "Full business setup & visa",
      "Premium property portfolio",
      "Priority banking & legal",
      "Luxury vehicle fleet",
      "24/7 concierge support",
      "Weekly planning sessions",
      "School admission assistance",
      "VIP airport services"
    ],
    popular: true,
    cta: "Most Popular"
  },
  {
    name: "Platinum",
    price: "$15,000",
    period: "/month",
    description: "Ultra-exclusive service for high-net-worth individuals",
    icon: Crown,
    features: [
      "White-glove relocation",
      "Exclusive property access",
      "Dedicated legal team",
      "Private jet & yacht access",
      "Personal lifestyle manager",
      "Daily availability",
      "Elite school placements",
      "Exclusive event access",
      "Custom service design",
      "Family relocation support"
    ],
    popular: false,
    cta: "Contact Us"
  }
];

export const Pricing = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };

  const handleRevealPlans = () => {
    if (isValidEmail) {
      setIsUnlocked(true);
      setShowModal(false);
    }
  };

  const handleSectionClick = () => {
    if (!isUnlocked) {
      setShowModal(true);
    }
  };

  return (
    <section 
      id="pricing"
      className="py-24 bg-background relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Choose Your Dubai Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored service levels to match your lifestyle and requirements, 
            from essential support to ultra-premium white-glove service.
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="relative">
          {/* Glassmorphism Overlay */}
          {!isUnlocked && (
            <div 
              className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer"
              onClick={handleSectionClick}
            >
              <div className="bg-background/20 backdrop-blur-md border border-gold/20 rounded-2xl p-8 text-center shadow-luxury hover:bg-background/30 transition-all duration-300">
                <Lock className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">Exclusive Access</h3>
                <p className="text-muted-foreground mb-4">
                  Click to unlock our private concierge tiers
                </p>
                <div className="text-sm text-gold font-medium">
                  Tap to reveal pricing
                </div>
              </div>
            </div>
          )}

          {/* Pricing Cards */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ${
            !isUnlocked ? 'blur-md pointer-events-none' : ''
          }`}>
            {plans.map((plan, index) => (
              <Card 
                key={plan.name}
                className={`relative overflow-hidden hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 animate-scale-in ${
                  plan.popular 
                    ? 'ring-2 ring-gold shadow-gold scale-105 lg:scale-110' 
                    : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-gold text-primary text-sm font-medium px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                <CardHeader className="text-center pb-2">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                    plan.popular ? 'bg-gradient-gold' : 'bg-secondary'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${
                      plan.popular ? 'text-primary' : 'text-primary'
                    }`} />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-lg">
                      {plan.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="w-5 h-5 text-gold mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    variant={plan.popular ? "premium" : "elegant"}
                    size="lg"
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            All plans include our signature white-glove service and are fully customizable 
            to your specific needs.
          </p>
          <Button variant="outline" size="lg">
            Schedule Consultation
          </Button>
        </div>
      </div>

      {/* Email Capture Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md bg-background border border-gold/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-primary mb-2">
              Unlock Our Private Concierge Tiers
            </DialogTitle>
            <p className="text-center text-muted-foreground">
              Enter your email to view pricing & apply for membership
            </p>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={handleEmailChange}
                className="w-full"
              />
            </div>
            
            <Button 
              onClick={handleRevealPlans}
              disabled={!isValidEmail}
              variant="premium"
              size="lg"
              className="w-full"
            >
              Reveal Plans
            </Button>
            
            <p className="text-xs text-center text-muted-foreground">
              By submitting, you agree to receive exclusive offers and updates about our luxury concierge services.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};