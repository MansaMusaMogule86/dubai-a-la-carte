import { Navigation } from "@/components/Navigation";
import { useAuth } from "@/hooks/useAuth";
import { GraduationCap, BookOpen, Users, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Schooling = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Navigation user={user} onLogout={signOut} />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Premium <span className="text-gold">Education</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access to Dubai's finest international schools and educational consultancy services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-gold transition-all duration-300">
              <GraduationCap className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">International Schools</h3>
              <p className="text-muted-foreground text-sm">British, American & IB curricula</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-gold transition-all duration-300">
              <BookOpen className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Curriculum Options</h3>
              <p className="text-muted-foreground text-sm">Multiple educational pathways</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-gold transition-all duration-300">
              <Users className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Enrollment Support</h3>
              <p className="text-muted-foreground text-sm">Application & admission assistance</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-gold transition-all duration-300">
              <Award className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Top Rankings</h3>
              <p className="text-muted-foreground text-sm">Outstanding & Very Good rated schools</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">School Selection</h3>
              <p className="text-muted-foreground mb-4">
                Find the perfect educational fit for your child from our curated list of premium international schools.
              </p>
              <Button variant="outline">Compare Schools</Button>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Admission Process</h3>
              <p className="text-muted-foreground mb-4">
                Complete support through the enrollment process, from application to acceptance.
              </p>
              <Button variant="outline">Start Application</Button>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Educational Consulting</h3>
              <p className="text-muted-foreground mb-4">
                Expert guidance on curriculum choices and long-term educational planning.
              </p>
              <Button variant="outline">Book Consultation</Button>
            </Card>
          </div>

          <Card className="p-8 text-center mt-12">
            <h2 className="text-2xl font-bold mb-4">Ready to Secure Your Child's Future?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our education specialists will help you navigate Dubai's premium school options.
            </p>
            <Button variant="premium" size="lg">
              Get Education Consultation
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Schooling;