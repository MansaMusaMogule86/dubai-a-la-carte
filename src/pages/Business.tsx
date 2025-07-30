import { Navigation } from "@/components/Navigation";
import { useAuth } from "@/hooks/useAuth";
import { Building2, FileText, Users, Globe, Clock, Shield, DollarSign, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Business = () => {
  const { user, signOut } = useAuth();

  const businessTypes = [
    {
      title: "Dubai Mainland",
      description: "Full UAE market access, no restrictions on business activities",
      features: ["100% foreign ownership", "Local UAE address", "Full banking access", "No currency restrictions"],
      price: "From AED 15,000",
      popular: false
    },
    {
      title: "Dubai Free Zone",
      description: "Tax-free environment with 100% foreign ownership",
      features: ["0% corporate tax", "0% import/export duties", "100% profit repatriation", "Streamlined setup"],
      price: "From AED 8,000",
      popular: true
    },
    {
      title: "Dubai Offshore",
      description: "International business operations with maximum privacy",
      features: ["Asset protection", "Tax optimization", "Privacy & confidentiality", "International operations"],
      price: "From AED 12,000",
      popular: false
    }
  ];

  const setupProcess = [
    { step: 1, title: "Initial Consultation", description: "Discuss your business goals and requirements", duration: "1 day" },
    { step: 2, title: "Choose Structure", description: "Select optimal business setup type", duration: "1-2 days" },
    { step: 3, title: "Documentation", description: "Prepare and submit all required documents", duration: "3-5 days" },
    { step: 4, title: "Approvals", description: "Government approvals and license issuance", duration: "5-10 days" },
    { step: 5, title: "Banking Setup", description: "Corporate bank account opening", duration: "2-3 days" },
    { step: 6, title: "Visa Processing", description: "Investor and employee visa applications", duration: "7-14 days" }
  ];

  const licenses = [
    { name: "Trading License", description: "Import, export, and distribution activities", sectors: ["General Trading", "Food & Beverage", "Electronics"] },
    { name: "Professional License", description: "Consultancy and professional services", sectors: ["Legal Services", "Accounting", "Engineering"] },
    { name: "Industrial License", description: "Manufacturing and production activities", sectors: ["Food Processing", "Textiles", "Technology"] },
    { name: "Tourism License", description: "Tourism and hospitality services", sectors: ["Travel Agency", "Hotel Management", "Tour Operations"] }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation user={user} onLogout={signOut} />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gold/10 text-gold border-gold/20">
              🏆 #1 Business Setup Service in UAE
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Launch Your Business in <span className="text-gold">Dubai</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Complete business incorporation and setup services in the UAE with expert guidance. 
              From company formation to visa processing, we handle everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl">
                Start Your Business Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="elegant" size="xl">
                Download Business Guide
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 text-center hover:shadow-luxury transition-all duration-300 group">
              <Building2 className="w-12 h-12 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">Company Formation</h3>
              <p className="text-muted-foreground text-sm">Mainland, Freezone & Offshore options</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-luxury transition-all duration-300 group">
              <FileText className="w-12 h-12 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">Legal Documentation</h3>
              <p className="text-muted-foreground text-sm">All required permits and licenses</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-luxury transition-all duration-300 group">
              <Users className="w-12 h-12 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">Visa Processing</h3>
              <p className="text-muted-foreground text-sm">Investor & employee visa services</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-luxury transition-all duration-300 group">
              <Globe className="w-12 h-12 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">Banking Setup</h3>
              <p className="text-muted-foreground text-sm">Corporate account opening assistance</p>
            </Card>
          </div>

          {/* Business Types */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Choose Your Business Structure</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Each business structure offers unique advantages. Our experts will help you choose the best option for your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {businessTypes.map((type, index) => (
                <Card key={index} className={`p-8 relative overflow-hidden ${type.popular ? 'border-gold shadow-gold' : ''} hover:shadow-luxury transition-all duration-300`}>
                  {type.popular && (
                    <Badge className="absolute top-4 right-4 bg-gold text-primary">
                      Most Popular
                    </Badge>
                  )}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{type.title}</h3>
                    <p className="text-muted-foreground mb-4">{type.description}</p>
                    <div className="text-3xl font-bold text-gold mb-4">{type.price}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={type.popular ? "premium" : "outline"} 
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Setup Process */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Simple 6-Step Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our streamlined approach ensures your business is up and running as quickly as possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {setupProcess.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-card transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gold text-primary rounded-full flex items-center justify-center font-bold mr-4">
                      {item.step}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.duration}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* License Types */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Business License Types</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose from various license categories based on your business activities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {licenses.map((license, index) => (
                <Card key={index} className="p-6 hover:shadow-card transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3">{license.name}</h3>
                  <p className="text-muted-foreground mb-4">{license.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {license.sectors.map((sector, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {sector}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits & CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Shield className="w-6 h-6 text-gold mr-3" />
                Why Choose UAE?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 text-gold mr-3" />
                  <span className="text-sm">0% personal income tax</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-gold mr-3" />
                  <span className="text-sm">100% foreign ownership</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-gold mr-3" />
                  <span className="text-sm">Strategic global location</span>
                </div>
                <div className="flex items-center">
                  <Building2 className="w-5 h-5 text-gold mr-3" />
                  <span className="text-sm">World-class infrastructure</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-gold mr-3" />
                  <span className="text-sm">Political & economic stability</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-gold mr-3" />
                  <span className="text-sm">Skilled workforce</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-card">
              <h2 className="text-2xl font-bold mb-4">Ready to Start?</h2>
              <p className="text-muted-foreground mb-6">
                Our business setup specialists will guide you through every step of establishing your company in Dubai. 
                Get started with a free consultation today.
              </p>
              <div className="space-y-4">
                <Button variant="premium" size="lg" className="w-full">
                  Schedule Free Consultation
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  Download Setup Guide
                </Button>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  ⭐ 4.9/5 rating from 500+ satisfied clients
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;