import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Edit, Trash2 } from "lucide-react";

const BookingsList = () => {
  const upcomingBookings = [
    {
      id: 1,
      type: "flight",
      title: "Private Jet to Paris",
      date: "Dec 15, 2024",
      time: "14:30",
      status: "confirmed",
      details: "Dubai → Paris CDG"
    },
    {
      id: 2,
      type: "hotel",
      title: "Four Seasons Hotel",
      date: "Dec 16-20, 2024",
      time: "Check-in 15:00",
      status: "confirmed",
      details: "Presidential Suite, 4 nights"
    },
    {
      id: 3,
      type: "transportation",
      title: "Luxury Transfer",
      date: "Dec 15, 2024",
      time: "12:00",
      status: "pending",
      details: "Airport to Four Seasons"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "pending": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "cancelled": return "bg-red-500/10 text-red-500 border-red-500/20";
      default: return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Upcoming Bookings</h2>
        <Badge variant="outline" className="text-gold border-gold">
          {upcomingBookings.length} Active
        </Badge>
      </div>

      <div className="space-y-4">
        {upcomingBookings.map((booking) => (
          <Card key={booking.id} className="p-6 hover:shadow-luxury transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold">{booking.title}</h3>
                  <Badge className={getStatusColor(booking.status)}>
                    {booking.status}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{booking.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{booking.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{booking.details}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="hover:border-red-500 hover:text-red-500">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BookingsList;