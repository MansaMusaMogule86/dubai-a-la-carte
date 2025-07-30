import { Navigation } from "@/components/Navigation";
import { useAuth } from "@/hooks/useAuth";
import { User, FileText, CreditCard, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Navigation user={user} onLogout={signOut} />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gold">Profile</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Manage your account information, documents, and service preferences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <User className="w-6 h-6 text-gold mr-3" />
                <h2 className="text-xl font-semibold">Personal Information</h2>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>Update your contact details, preferences, and emergency contacts</p>
              </div>
              <Button variant="outline" className="mt-4">Edit Profile</Button>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-gold mr-3" />
                <h2 className="text-xl font-semibold">Document Management</h2>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>Upload and manage passports, visas, and identification documents</p>
              </div>
              <Button variant="outline" className="mt-4">Manage Documents</Button>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <CreditCard className="w-6 h-6 text-gold mr-3" />
                <h2 className="text-xl font-semibold">Billing & Invoices</h2>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>View payment history, invoices, and manage billing methods</p>
              </div>
              <Button variant="outline" className="mt-4">View Billing</Button>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Settings className="w-6 h-6 text-gold mr-3" />
                <h2 className="text-xl font-semibold">Account Settings</h2>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>Privacy settings, notifications, and security preferences</p>
              </div>
              <Button variant="outline" className="mt-4">Manage Settings</Button>
            </Card>
          </div>

          <Card className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Assistance?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our dedicated account managers are available to help you with any questions or special requests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium">Contact Account Manager</Button>
              <Button variant="outline">Live Chat Support</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;