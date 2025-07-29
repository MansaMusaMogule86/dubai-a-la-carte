import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Star, Crown, Zap } from "lucide-react";

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
  return (
    <section className="py-24 bg-background">
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

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
    </section>
  );
};