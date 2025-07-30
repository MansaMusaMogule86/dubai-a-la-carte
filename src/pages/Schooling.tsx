import { Navigation } from "@/components/Navigation";
import { useAuth } from "@/hooks/useAuth";
import { ServiceChatbot } from "@/components/ServiceChatbot";
import { GraduationCap, BookOpen, Users, Award, Star, CheckCircle, Globe, Target, Calendar, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Schooling = () => {
  const { user, signOut } = useAuth();

  const curricula = [
    {
      name: "British Curriculum",
      description: "EYFS, Primary, GCSE, A-Levels pathway",
      schools: 45,
      avgFees: "AED 35,000 - 95,000",
      highlights: ["Cambridge/Edexcel", "University Prep", "Global Recognition"],
      rating: 4.8
    },
    {
      name: "American Curriculum",
      description: "K-12 system with AP courses",
      schools: 28,
      avgFees: "AED 40,000 - 85,000",
      highlights: ["College Board", "SAT Prep", "US University Access"],
      rating: 4.7
    },
    {
      name: "International Baccalaureate",
      description: "PYP, MYP, DP comprehensive program",
      schools: 18,
      avgFees: "AED 60,000 - 120,000",
      highlights: ["Global Mindedness", "Critical Thinking", "World Universities"],
      rating: 4.9
    },
    {
      name: "French Curriculum",
      description: "CNED and French Ministry approved",
      schools: 8,
      avgFees: "AED 25,000 - 70,000",
      highlights: ["Bilingual Education", "French Universities", "Cultural Immersion"],
      rating: 4.6
    }
  ];

  const topSchools = [
    {
      name: "Dubai International Academy",
      curriculum: "IB",
      rating: 4.9,
      fees: "AED 95,000",
      location: "Al Barsha",
      features: ["Outstanding KHDA", "100% IB Pass Rate", "University Counseling"],
      waitlist: "6 months"
    },
    {
      name: "Jumeirah English Speaking School",
      curriculum: "British",
      rating: 4.8,
      fees: "AED 85,000",
      location: "Jumeirah",
      features: ["Very Good KHDA", "Strong Arts Program", "Pastoral Care"],
      waitlist: "4 months"
    },
    {
      name: "American School of Dubai",
      curriculum: "American",
      rating: 4.7,
      fees: "AED 75,000",
      location: "Jumeirah",
      features: ["Very Good KHDA", "College Prep", "Sports Excellence"],
      waitlist: "3 months"
    }
  ];

  const services = [
    {
      icon: Target,
      title: "School Matching",
      description: "AI-powered matching based on your preferences and child's needs",
      features: ["Curriculum Fit", "Location Analysis", "Budget Optimization", "Special Needs Support"]
    },
    {
      icon: Calendar,
      title: "Application Management",
      description: "End-to-end application process management",
      features: ["Document Prep", "Timeline Tracking", "Interview Prep", "Follow-up Support"]
    },
    {
      icon: Users,
      title: "School Tours",
      description: "Private guided tours with educational consultants",
      features: ["Flexible Scheduling", "Expert Insights", "Q&A Sessions", "Campus Access"]
    },
    {
      icon: Globe,
      title: "Transition Support",
      description: "Complete support for smooth school transitions",
      features: ["Orientation Programs", "Buddy Systems", "Parent Networks", "Academic Support"]
    }
  ];

  const admissionProcess = [
    { step: 1, title: "Initial Assessment", description: "Evaluate child's academic level and interests", duration: "1-2 days" },
    { step: 2, title: "School Shortlisting", description: "Identify 3-5 best-fit schools", duration: "3-5 days" },
    { step: 3, title: "School Visits", description: "Arrange private tours and meetings", duration: "1-2 weeks" },
    { step: 4, title: "Application Submission", description: "Complete applications with required documents", duration: "1 week" },
    { step: 5, title: "Assessment Preparation", description: "Prepare for entrance tests and interviews", duration: "2-4 weeks" },
    { step: 6, title: "Acceptance & Enrollment", description: "Secure admission and complete enrollment", duration: "1-2 weeks" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation user={user} onLogout={signOut} />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gold/10 text-gold border-gold/20">
              🎓 Dubai's Premier Education Consultancy
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Secure Your Child's Future at Dubai's <span className="text-gold">Best Schools</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Access to Dubai's finest international schools and educational consultancy services. 
              From application to admission, we guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl">
                Find Perfect School
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="elegant" size="xl">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete Education Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support from school selection to successful enrollment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-luxury transition-all duration-300 group">
                  <Icon className="w-12 h-12 text-gold mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-center">
                        <CheckCircle className="w-3 h-3 text-gold mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>

          {/* Curriculum Options */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Curriculum Options</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose from world-class educational pathways that best suit your child's future goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {curricula.map((curriculum, index) => (
                <Card key={index} className="p-6 hover:shadow-card transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold">{curriculum.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-gold fill-current" />
                      <span className="text-sm text-muted-foreground ml-1">{curriculum.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">{curriculum.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Schools:</span>
                      <span className="font-semibold">{curriculum.schools}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Avg Fees:</span>
                      <span className="font-semibold text-xs">{curriculum.avgFees}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    {curriculum.highlights.map((highlight, idx) => (
                      <div key={idx} className="text-xs text-muted-foreground flex items-center">
                        <div className="w-1 h-1 bg-gold rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Top Schools */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Premium Schools</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Handpicked institutions known for academic excellence and outstanding KHDA ratings
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {topSchools.map((school, index) => (
                <Card key={index} className="p-6 hover:shadow-luxury transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">{school.curriculum}</Badge>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-gold fill-current" />
                      <span className="text-sm text-muted-foreground ml-1">{school.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{school.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{school.location}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Annual Fees:</span>
                      <span className="font-semibold">{school.fees}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Waitlist:</span>
                      <span className="font-semibold text-orange-600">{school.waitlist}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1 mb-4">
                    {school.features.map((feature, idx) => (
                      <div key={idx} className="text-xs text-muted-foreground flex items-center">
                        <CheckCircle className="w-3 h-3 text-gold mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Details
                    </Button>
                    <Button variant="premium" size="sm" className="flex-1">
                      Apply Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Admission Process */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Streamlined Admission Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our proven 6-step process ensures successful school admissions with minimal stress
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {admissionProcess.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-card transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gold text-primary rounded-full flex items-center justify-center font-bold mr-4">
                      {item.step}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {item.duration}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Award className="w-6 h-6 text-gold mr-3" />
                Why Choose Our Service?
              </h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gold mr-3" />
                  <span className="text-sm">98% successful admission rate</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gold mr-3" />
                  <span className="text-sm">Expert knowledge of all curricula</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gold mr-3" />
                  <span className="text-sm">Exclusive school partnerships</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gold mr-3" />
                  <span className="text-sm">Personalized guidance & support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gold mr-3" />
                  <span className="text-sm">Post-admission support services</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gold mr-3" />
                  <span className="text-sm">No hidden fees or charges</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-card">
              <h2 className="text-2xl font-bold mb-4">Ready to Secure Your Child's Future?</h2>
              <p className="text-muted-foreground mb-6">
                Our education specialists will help you navigate Dubai's premium school options and secure 
                admission to the perfect institution for your child's success.
              </p>
              <div className="space-y-4">
                <Button 
                  variant="premium" 
                  size="lg" 
                  className="w-full"
                  onClick={() => alert("Education consultation booking coming soon")}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                  onClick={() => alert("School guide download coming soon")}
                >
                  Download School Guide
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.location.href = "/chat"}
                >
                  Education Advisor
                </Button>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  ⭐ 4.9/5 rating from 800+ families • 24/7 support
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Education Assistant */}
      <ServiceChatbot
        serviceName="Education"
        botName="Victoria"
        botColor="#8B5CF6"
        systemPrompt="You are Victoria, an education consultant specializing in Dubai's premium educational institutions and international schools. You have comprehensive knowledge of curriculum options (British, American, IB, French, etc.), admission procedures, school fees, extracurricular programs, and educational support services. You provide expert guidance on school selection, application processes, educational assessments, and academic pathways. You speak with warmth and professionalism, offering personalized advice for families seeking the best educational opportunities for their children in Dubai."
        welcomeMessage="Hello! I'm Victoria, your education consultant for Dubai's premium schools and educational institutions. I'm here to help you find the perfect educational path for your children. How can I assist you with your schooling needs today?"
        position="left"
      />
    </div>
  );
};

export default Schooling;