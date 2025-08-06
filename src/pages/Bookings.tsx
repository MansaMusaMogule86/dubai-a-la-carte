import { Navigation } from "@/components/Navigation";
import { useAuth } from "@/hooks/useAuth";
import { Plane, Hotel, Car, Music, Plus, Calendar, Ship, MapPin, Clock, Star, Crown, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, lazy, Suspense } from "react";
import { useToast } from "@/hooks/use-toast";

// Import flight images
import flightEtihad from "@/assets/flight-etihad.jpg";
import flightEmirates from "@/assets/flight-emirates.jpg";
import flightAirFrance from "@/assets/flight-airfrance.jpg";
import flightAlgeria from "@/assets/flight-algeria.jpg";

// Import hotel images
import hotelBurjAlArab from "@/assets/hotel-burj-al-arab.jpg";
import hotelEmiratesPalace from "@/assets/hotel-emirates-palace.jpg";
import hotelAtlantisPalm from "@/assets/hotel-atlantis-palm.jpg";
import hotelFourSeasons from "@/assets/hotel-four-seasons.jpg";
import hotelAlMaha from "@/assets/hotel-al-maha.jpg";
import hotelArmani from "@/assets/hotel-armani.jpg";
import hotelRoyalMirage from "@/assets/hotel-royal-mirage.jpg";
import hotelRitzCarlton from "@/assets/hotel-ritz-carlton.jpg";
import hotelAddressMarina from "@/assets/hotel-address-marina.jpg";
import hotelMeridienJBR from "@/assets/hotel-meridien-jbr.jpg";
import hotelConradBusinessBay from "@/assets/hotel-conrad-business-bay.jpg";
import hotelMeydan from "@/assets/hotel-meydan.jpg";
import hotelWaldorfPalm from "@/assets/hotel-waldorf-palm.jpg";
import hotelMarriottMarquis from "@/assets/hotel-marriott-marquis.jpg";
import hotelRixosJBR from "@/assets/hotel-rixos-jbr.jpg";
import hotelShangriLaMarina from "@/assets/hotel-shangri-la-marina.jpg";

// Import yacht images
import yachtSuperyachtBurj from "@/assets/yacht-superyacht-burj.jpg";
import yachtMegaJBR from "@/assets/yacht-mega-jbr.jpg";
import yachtMotorMarina from "@/assets/yacht-motor-marina.jpg";
import yachtCatamaranPalm from "@/assets/yacht-catamaran-palm.jpg";
import yachtSailingCoast from "@/assets/yacht-sailing-coast.jpg";
import yachtSportAtlantis from "@/assets/yacht-sport-atlantis.jpg";
import yachtExplorerCreek from "@/assets/yacht-explorer-creek.jpg";
import yachtFlybridgeMarina from "@/assets/yacht-flybridge-marina.jpg";

// Import luxury car rental images
import limoRollsRoyce from "@/assets/limo-rolls-royce.jpg";
import limoMercedesMaybach from "@/assets/limo-mercedes-maybach.jpg";
import limoBentley from "@/assets/limo-bentley.jpg";
import limoLamborghini from "@/assets/limo-lamborghini.jpg";
import limoFerrari from "@/assets/limo-ferrari.jpg";
import limoRangeRover from "@/assets/limo-range-rover.jpg";
import limoBMW from "@/assets/limo-bmw.jpg";
import carMercedesG63 from "@/assets/car-mercedes-g63.jpg";
import carMercedesSClass from "@/assets/car-mercedes-s-class.jpg";
import carAudiA8L from "@/assets/car-audi-a8l.jpg";
import carAudiQ8 from "@/assets/car-audi-q8.jpg";
import carBMWX7 from "@/assets/car-bmw-x7.jpg";
import carBMW8Series from "@/assets/car-bmw-8-series.jpg";
import carPorschePanamera from "@/assets/car-porsche-panamera.jpg";
import carPorscheCayenne from "@/assets/car-porsche-cayenne.jpg";

// Import desert safari images
import desertPlatinumCamp from "@/assets/desert-platinum-camp.jpg";
import desertRoyalRetreat from "@/assets/desert-royal-retreat.jpg";
import desertVipOasis from "@/assets/desert-vip-oasis.jpg";
import desertUltimateSafari from "@/assets/desert-ultimate-safari.jpg";
import desertAristocratMansion from "@/assets/desert-aristocrat-mansion.jpg";

// Import helicopter images
import helicopterH155Vip from "@/assets/helicopter-h155-vip.jpg";
import helicopterBell429 from "@/assets/helicopter-bell-429.jpg";
import helicopterAw139Vip from "@/assets/helicopter-aw139-vip.jpg";
import helicopterS76dLuxury from "@/assets/helicopter-s76d-luxury.jpg";
import helicopterEc135Panoramic from "@/assets/helicopter-ec135-panoramic.jpg";

// Import adrenaline & sky adventure images
import skydivingPalmJumeirah from "@/assets/skydiving-palm-jumeirah.jpg";
import skydivingDesertDrop from "@/assets/skydiving-desert-drop.jpg";
import ziplineDubaiMarina from "@/assets/zipline-dubai-marina.jpg";
import skyViewsObservatory from "@/assets/sky-views-observatory.jpg";

// Import BattleKart images
import battlekartArGaming from "@/assets/battlekart-ar-gaming.jpg";
import battlekartSplatoonMode from "@/assets/battlekart-splatoon-mode.jpg";
import battlekartMarioKart from "@/assets/battlekart-mario-kart.jpg";

// Import jet ski & flyboard images
import jetskiBurjAlArab from "@/assets/jetski-burj-al-arab.jpg";
import jetskiAtlantisRoyal from "@/assets/jetski-atlantis-royal.jpg";
import jetskiPalmJumeirahLoop from "@/assets/jetski-palm-jumeirah-loop.jpg";
import jetskiDubaiCoastline from "@/assets/jetski-dubai-coastline.jpg";
import jetskiFlyboardCombo from "@/assets/jetski-flyboard-combo.jpg";
import flyboardSoloSession from "@/assets/flyboard-solo-session.jpg";

// Lazy load heavy components for better performance
const BookingsList = lazy(() => import("../components/BookingsList").catch(() => ({ default: () => <div>Failed to load bookings</div> })));

interface BookingOption {
  id: string;
  title: string;
  description: string;
  image: string | any;
  price: string;
  duration: string;
  location: string;
  rating: number;
  isExclusive?: boolean;
  isHotDeal?: boolean;
  isFullyBooked?: boolean;
  category: string;
}

const PremiumBookingCard = ({ booking }: { booking: BookingOption }) => {
  const { toast } = useToast();

  const handleAddToItinerary = () => {
    toast({
      title: "Added to Itinerary",
      description: `${booking.title} has been added to your itinerary.`,
    });
  };

  const handleBookNow = () => {
    toast({
      title: "Booking Initiated",
      description: `Redirecting to booking confirmation for ${booking.title}...`,
    });
  };

  return (
    <Card className="overflow-hidden hover:shadow-luxury hover:scale-105 transition-all duration-300 group cursor-pointer">
    <div className="relative h-48 bg-gradient-to-br from-gold/20 to-primary/20">
      {typeof booking.image === 'string' && booking.image.startsWith('/') ? (
        <img 
          src={booking.image} 
          alt={booking.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : booking.image && typeof booking.image !== 'string' ? (
        <img 
          src={booking.image} 
          alt={booking.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : null}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute top-4 left-4 flex gap-2">
        {booking.isExclusive && (
          <Badge className="bg-gold text-primary border-0">
            <Crown className="w-3 h-3 mr-1" />
            Exclusive
          </Badge>
        )}
        {booking.isHotDeal && (
          <Badge className="bg-red-500 text-white border-0">
            <Zap className="w-3 h-3 mr-1" />
            Hot Deal
          </Badge>
        )}
        {booking.isFullyBooked && (
          <Badge variant="secondary" className="bg-gray-500 text-white border-0">
            Fully Booked
          </Badge>
        )}
      </div>
      <div className="absolute top-4 right-4">
        <div className="flex items-center gap-1 bg-black/30 px-2 py-1 rounded-full">
          <Star className="w-3 h-3 text-gold fill-gold" />
          <span className="text-white text-xs font-medium">{booking.rating}</span>
        </div>
      </div>
    </div>
    
    <CardContent className="p-6">
      <div className="mb-3">
        <h3 className="text-lg font-semibold mb-1 group-hover:text-gold transition-colors">
          {booking.title}
        </h3>
        <p className="text-sm text-muted-foreground">{booking.description}</p>
      </div>
      
      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
        <div className="flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          {booking.location}
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {booking.duration}
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <span className="text-2xl font-bold text-gold">{booking.price}</span>
          <span className="text-sm text-muted-foreground ml-1">per person</span>
        </div>
        <div className="flex gap-2">
          {booking.category === "Flights" && (
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs"
              disabled={booking.isFullyBooked}
              onClick={handleAddToItinerary}
            >
              Add to Itinerary
            </Button>
          )}
          <Button 
            size="sm" 
            className="text-xs"
            disabled={booking.isFullyBooked}
            onClick={handleBookNow}
          >
            Book Now
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
  );
};

const CategoryFilter = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: { 
  categories: string[]; 
  activeCategory: string; 
  onCategoryChange: (category: string) => void; 
}) => (
  <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
    {categories.map((category) => (
      <Button
        key={category}
        variant={activeCategory === category ? "default" : "outline"}
        size="sm"
        onClick={() => onCategoryChange(category)}
        className="whitespace-nowrap"
      >
        {category}
      </Button>
    ))}
  </div>
);

const Bookings = () => {
  const { user, signOut } = useAuth();
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTab, setActiveTab] = useState("book");

  const categories = ["All", "Flights", "Hotels", "Yachts", "Luxury Car Rental", "Desert Safari", "Helicopter Rides", "Adrenaline & Sky Adventures", "Fun & Gaming", "Jet Ski & Flyboard"];

  const premiumBookings: BookingOption[] = [
    // Emirates Flights
    {
      id: "emirates-1",
      title: "Emirates First Class A380",
      description: "Dubai to London with private suite & onboard shower",
      image: flightEmirates,
      price: "AED 31,500",
      duration: "7h 45m",
      location: "Dubai → London",
      rating: 4.9,
      isExclusive: true,
      category: "Flights"
    },
    {
      id: "emirates-2",
      title: "Emirates Business Class",
      description: "Dubai to New York with lie-flat seats & gourmet dining",
      image: flightEmirates,
      price: "AED 15,400",
      duration: "12h 30m",
      location: "Dubai → New York",
      rating: 4.8,
      isHotDeal: true,
      category: "Flights"
    },
    // Etihad Airways
    {
      id: "etihad-1",
      title: "Etihad Residence A380",
      description: "3-room suite with bedroom, bathroom & living room",
      image: flightEtihad,
      price: "AED 55,000",
      duration: "7h 15m",
      location: "Dubai → London",
      rating: 5.0,
      isExclusive: true,
      category: "Flights"
    },
    {
      id: "etihad-2",
      title: "Etihad First Apartment",
      description: "Private apartment with chef & butler service",
      image: flightEtihad,
      price: "AED 45,900",
      duration: "14h 20m",
      location: "Dubai → Sydney",
      rating: 4.9,
      isExclusive: true,
      category: "Flights"
    },
    // Air France
    {
      id: "airfrance-1",
      title: "Air France La Première",
      description: "Ultra-luxury cabin with Michelin-starred cuisine",
      image: flightAirFrance,
      price: "AED 36,000",
      duration: "7h 30m",
      location: "Dubai → Paris",
      rating: 4.8,
      isExclusive: true,
      category: "Flights"
    },
    {
      id: "airfrance-2",
      title: "Air France Business",
      description: "Premium business class with fine French dining",
      image: flightAirFrance,
      price: "AED 14,000",
      duration: "7h 30m",
      location: "Dubai → Paris",
      rating: 4.7,
      category: "Flights"
    },
    // Air Algérie
    {
      id: "algeria-1",
      title: "Air Algérie Business Plus",
      description: "Premium service to Algiers with traditional hospitality",
      image: flightAlgeria,
      price: "AED 8,100",
      duration: "8h 45m",
      location: "Dubai → Algiers",
      rating: 4.5,
      category: "Flights"
    },
    // Private Jets
    {
      id: "private-1",
      title: "Gulfstream G650ER",
      description: "Ultra-long range private jet with personal crew",
      image: flightEmirates,
      price: "AED 165,300",
      duration: "Custom",
      location: "Dubai → Worldwide",
      rating: 5.0,
      isExclusive: true,
      category: "Flights"
    },
    // Hotels - Dubai
    {
      id: "burj-al-arab",
      title: "Burj Al Arab Royal Suite",
      description: "Two-level presidential suite with personal butler & Rolls-Royce",
      image: hotelBurjAlArab,
      price: "AED 91,800",
      duration: "Per night",
      location: "Jumeirah Beach, Dubai",
      rating: 5.0,
      isExclusive: true,
      category: "Hotels"
    },
    {
      id: "atlantis-royal",
      title: "Atlantis The Royal Cloud 22",
      description: "Sky-high penthouse with private pool & underwater views",
      image: hotelAtlantisPalm,
      price: "AED 128,500",
      duration: "Per night",
      location: "Palm Jumeirah, Dubai",
      rating: 4.9,
      isExclusive: true,
      category: "Hotels"
    },
    {
      id: "armani-hotel",
      title: "Armani Hotel Dubai",
      description: "Luxury suite in Burj Khalifa with city panoramic views",
      image: hotelArmani,
      price: "AED 12,900",
      duration: "Per night",
      location: "Downtown Dubai",
      rating: 4.8,
      isHotDeal: true,
      category: "Hotels"
    },
    {
      id: "four-seasons-dubai",
      title: "Four Seasons Resort Dubai",
      description: "Beachfront presidential suite with private beach access",
      image: hotelFourSeasons,
      price: "AED 15,400",
      duration: "Per night",
      location: "Jumeirah Beach, Dubai",
      rating: 4.7,
      category: "Hotels"
    },
    {
      id: "royal-mirage",
      title: "One&Only Royal Mirage",
      description: "Arabian-style resort with private beach & palace gardens",
      image: hotelRoyalMirage,
      price: "AED 10,300",
      duration: "Per night",
      location: "Dubai Marina",
      rating: 4.6,
      category: "Hotels"
    },
    // Hotels - Abu Dhabi
    {
      id: "emirates-palace",
      title: "Emirates Palace Hotel",
      description: "Presidential suite with gold-plated amenities & private beach",
      image: hotelEmiratesPalace,
      price: "AED 55,000",
      duration: "Per night",
      location: "Corniche, Abu Dhabi",
      rating: 4.9,
      isExclusive: true,
      category: "Hotels"
    },
    // Hotels - Desert Properties
    {
      id: "al-maha-desert",
      title: "Al Maha Desert Resort",
      description: "Luxury desert villa with private pool & wildlife sanctuary",
      image: hotelAlMaha,
      price: "AED 14,000",
      duration: "Per night",
      location: "Dubai Desert Conservation Reserve",
      rating: 4.8,
      isExclusive: true,
      category: "Hotels"
    },
    {
      id: "ritz-carlton-rak",
      title: "Ritz-Carlton Ras Al Khaimah",
      description: "Desert villa with mountain views & luxury spa treatments",
      image: hotelRitzCarlton,
      price: "AED 8,100",
      duration: "Per night",
      location: "Al Wadi Desert, RAK",
      rating: 4.7,
      category: "Hotels"
    },
    // Hotels - Marina
    {
      id: "address-marina",
      title: "Address Dubai Marina",
      description: "Luxury waterfront hotel with yacht harbor views",
      image: hotelAddressMarina,
      price: "AED 6,600",
      duration: "Per night",
      location: "Dubai Marina",
      rating: 4.6,
      category: "Hotels"
    },
    {
      id: "shangri-la-marina",
      title: "Shangri-La Hotel Dubai",
      description: "Marina hotel with yacht club access & fine dining",
      image: hotelShangriLaMarina,
      price: "AED 8,100",
      duration: "Per night",
      location: "Dubai Marina",
      rating: 4.7,
      category: "Hotels"
    },
    // Hotels - JBR (Jumeirah Beach Residence)
    {
      id: "meridien-jbr",
      title: "Le Méridien Mina Seyahi",
      description: "Beachfront resort with private beach & water sports",
      image: hotelMeridienJBR,
      price: "AED 5,500",
      duration: "Per night",
      location: "JBR Beach, Dubai",
      rating: 4.5,
      isHotDeal: true,
      category: "Hotels"
    },
    {
      id: "rixos-jbr",
      title: "Rixos Premium Dubai JBR",
      description: "All-inclusive beachfront luxury with ultra-premium service",
      image: hotelRixosJBR,
      price: "AED 10,300",
      duration: "Per night",
      location: "JBR Beach, Dubai",
      rating: 4.6,
      category: "Hotels"
    },
    // Hotels - Business Bay
    {
      id: "conrad-business-bay",
      title: "Conrad Dubai",
      description: "Business district luxury with city skyline views",
      image: hotelConradBusinessBay,
      price: "AED 4,400",
      duration: "Per night",
      location: "Business Bay, Dubai",
      rating: 4.4,
      category: "Hotels"
    },
    {
      id: "marriott-marquis",
      title: "JW Marriott Marquis Dubai",
      description: "Twin tower luxury hotel with world-class dining",
      image: hotelMarriottMarquis,
      price: "AED 5,100",
      duration: "Per night",
      location: "Business Bay, Dubai",
      rating: 4.5,
      category: "Hotels"
    },
    // Hotels - Meydan
    {
      id: "meydan-hotel",
      title: "The Meydan Hotel",
      description: "Racecourse luxury hotel with grandstand views",
      image: hotelMeydan,
      price: "AED 6,600",
      duration: "Per night",
      location: "Meydan, Dubai",
      rating: 4.6,
      isExclusive: true,
      category: "Hotels"
    },
    // Hotels - Palm Jumeirah (Additional)
    {
      id: "waldorf-palm",
      title: "Waldorf Astoria Dubai Palm",
      description: "Beach resort with private villa accommodations",
      image: hotelWaldorfPalm,
      price: "AED 11,800",
      duration: "Per night",
      location: "Palm Jumeirah, Dubai",
      rating: 4.8,
      category: "Hotels"
    },
    // Desert Safari - Aristocratic Experiences
    {
      id: "desert-aristocrat-mansion",
      title: "Royal Desert Mansion",
      description: "Private desert estate with 5 bedrooms, infinity pool, dedicated chef & BBQ pavilion",
      image: desertAristocratMansion,
      price: "AED 55,000",
      duration: "24 hours",
      location: "Private Desert Reserve",
      rating: 5.0,
      isExclusive: true,
      category: "Desert Safari"
    },
    {
      id: "desert-royal-retreat",
      title: "Emirates Royal Retreat",
      description: "Exclusive royal villa with private pool, falcon show & gourmet BBQ experience",
      image: desertRoyalRetreat,
      price: "AED 31,200",
      duration: "12 hours",
      location: "Al Marmoom Royal Reserve",
      rating: 4.9,
      isExclusive: true,
      category: "Desert Safari"
    },
    {
      id: "desert-vip-oasis",
      title: "VIP Desert Oasis",
      description: "Private camp with luxury tents, swimming pool, BBQ station & butler service",
      image: desertVipOasis,
      price: "AED 15,400",
      duration: "8 hours",
      location: "Dubai Desert Conservation",
      rating: 4.8,
      category: "Desert Safari"
    },
    {
      id: "desert-platinum-camp",
      title: "Platinum Private Camp",
      description: "Exclusive Bedouin camp with pool, private rooms & chef-prepared BBQ",
      image: desertPlatinumCamp,
      price: "AED 10,300",
      duration: "6 hours",
      location: "Lehbab Desert",
      rating: 4.7,
      isHotDeal: true,
      category: "Desert Safari"
    },
    {
      id: "desert-ultimate-safari",
      title: "Ultimate Safari Experience",
      description: "Multi-room pavilion with private pool, outdoor kitchen & entertainment area",
      image: desertUltimateSafari,
      price: "AED 12,900",
      duration: "10 hours",
      location: "Fossil Rock Desert",
      rating: 4.8,
      category: "Desert Safari"
    },
    // Yachts - Superyachts (150ft+)
    {
      id: "superyacht-burj",
      title: "Azimut 150ft Superyacht",
      description: "Ultra-luxury superyacht with helipad & crew near Burj Al Arab",
      image: yachtSuperyachtBurj,
      price: "AED 66,100",
      duration: "Full day",
      location: "Burj Al Arab Waters",
      rating: 4.9,
      isExclusive: true,
      category: "Yachts"
    },
    {
      id: "megayacht-jbr",
      title: "Ferretti 200ft Megayacht",
      description: "Mega yacht with 8 suites, spa & water toys at JBR",
      image: yachtMegaJBR,
      price: "AED 128,500",
      duration: "Full day",
      location: "JBR Marina",
      rating: 5.0,
      isExclusive: true,
      category: "Yachts"
    },
    // Yachts - Motor Yachts (70-100ft)
    {
      id: "motoryacht-marina",
      title: "Sunseeker 80ft Motor Yacht",
      description: "High-performance motor yacht with luxury interiors",
      image: yachtMotorMarina,
      price: "AED 31,200",
      duration: "Half day",
      location: "Dubai Marina",
      rating: 4.7,
      category: "Yachts"
    },
    {
      id: "flybridge-marina",
      title: "Princess 95ft Flybridge",
      description: "Spacious flybridge yacht with panoramic deck views",
      image: yachtFlybridgeMarina,
      price: "AED 44,100",
      duration: "Full day",
      location: "Dubai Marina Harbor",
      rating: 4.8,
      category: "Yachts"
    },
    // Yachts - Sailing & Catamarans
    {
      id: "catamaran-palm",
      title: "Lagoon 60ft Catamaran",
      description: "Stable catamaran perfect for families & groups",
      image: yachtCatamaranPalm,
      price: "AED 15,400",
      duration: "Half day",
      location: "Palm Jumeirah",
      rating: 4.6,
      isHotDeal: true,
      category: "Yachts"
    },
    {
      id: "sailing-coast",
      title: "Swan 70ft Sailing Yacht",
      description: "Traditional sailing experience with modern luxury",
      image: yachtSailingCoast,
      price: "AED 25,000",
      duration: "Full day",
      location: "Dubai Coast",
      rating: 4.5,
      category: "Yachts"
    },
    // Yachts - Sport & Adventure
    {
      id: "sport-atlantis",
      title: "Pershing 45ft Sport Yacht",
      description: "High-speed sport yacht for thrill seekers",
      image: yachtSportAtlantis,
      price: "AED 12,900",
      duration: "4 hours",
      location: "Atlantis Waters",
      rating: 4.4,
      category: "Yachts"
    },
    {
      id: "explorer-creek",
      title: "Explorer 120ft Expedition",
      description: "Adventure yacht with helicopter & diving equipment",
      image: yachtExplorerCreek,
      price: "AED 80,800",
      duration: "Multi-day",
      location: "Dubai Creek & Beyond",
      rating: 4.9,
      isExclusive: true,
      category: "Yachts"
    },
    // Luxury Car Rental - Ultra Luxury
    {
      id: "rolls-royce-phantom",
      title: "Rolls-Royce Phantom",
      description: "Presidential limousine with personal chauffeur & luxury amenities",
      image: limoRollsRoyce,
      price: "AED 5,500",
      duration: "8 hours",
      location: "Dubai Citywide",
      rating: 5.0,
      isExclusive: true,
      category: "Luxury Car Rental"
    },
    {
      id: "bentley-mulsanne",
      title: "Bentley Mulsanne Speed",
      description: "Handcrafted luxury sedan with twin-turbo W12 engine",
      image: limoBentley,
      price: "AED 4,400",
      duration: "6 hours",
      location: "Dubai Premium Areas",
      rating: 4.9,
      isExclusive: true,
      category: "Luxury Car Rental"
    },
    // Mercedes Collection
    {
      id: "mercedes-maybach-s680",
      title: "Mercedes-Maybach S680",
      description: "Executive luxury sedan with massage seats & champagne service",
      image: limoMercedesMaybach,
      price: "AED 2,900",
      duration: "4 hours",
      location: "Business Bay & DIFC",
      rating: 4.8,
      category: "Luxury Car Rental"
    },
    {
      id: "mercedes-g63-amg",
      title: "Mercedes-AMG G63",
      description: "High-performance luxury SUV with V8 biturbo engine",
      image: carMercedesG63,
      price: "AED 3,500",
      duration: "Full day",
      location: "City & Desert Routes",
      rating: 4.7,
      isHotDeal: true,
      category: "Luxury Car Rental"
    },
    {
      id: "mercedes-s-class",
      title: "Mercedes-Benz S-Class",
      description: "Latest S-Class with autonomous driving & luxury cabin",
      image: carMercedesSClass,
      price: "AED 2,400",
      duration: "6 hours",
      location: "Airport & Business Transfer",
      rating: 4.6,
      category: "Luxury Car Rental"
    },
    // BMW Collection
    {
      id: "bmw-7-series",
      title: "BMW 7 Series xDrive",
      description: "Executive sedan with laser lights & premium audio",
      image: limoBMW,
      price: "AED 2,200",
      duration: "4 hours",
      location: "Airport & City Transfer",
      rating: 4.6,
      category: "Luxury Car Rental"
    },
    {
      id: "bmw-x7-m50i",
      title: "BMW X7 M50i",
      description: "Full-size luxury SUV with captain's chairs & panoramic roof",
      image: carBMWX7,
      price: "AED 3,100",
      duration: "Full day",
      location: "Family & Group Tours",
      rating: 4.5,
      category: "Luxury Car Rental"
    },
    {
      id: "bmw-8-series",
      title: "BMW 8 Series Gran Coupé",
      description: "Luxury grand tourer with M performance package",
      image: carBMW8Series,
      price: "AED 4,000",
      duration: "6 hours",
      location: "Coastal & Mountain Routes",
      rating: 4.7,
      isExclusive: true,
      category: "Luxury Car Rental"
    },
    // Audi Collection
    {
      id: "audi-a8l",
      title: "Audi A8L W12",
      description: "Long-wheelbase luxury sedan with massage seats & chauffeur",
      image: carAudiA8L,
      price: "AED 2,800",
      duration: "8 hours",
      location: "VIP Business Transfer",
      rating: 4.6,
      category: "Luxury Car Rental"
    },
    {
      id: "audi-q8-rsq8",
      title: "Audi RSQ8",
      description: "High-performance luxury SUV with sport exhaust & air suspension",
      image: carAudiQ8,
      price: "AED 3,700",
      duration: "Full day",
      location: "Performance Driving Routes",
      rating: 4.8,
      isHotDeal: true,
      category: "Luxury Car Rental"
    },
    // Porsche Collection
    {
      id: "porsche-panamera-turbo",
      title: "Porsche Panamera Turbo S",
      description: "Executive sport sedan with 630hp twin-turbo V8",
      image: carPorschePanamera,
      price: "AED 4,800",
      duration: "6 hours",
      location: "Highway & Track Experience",
      rating: 4.9,
      isExclusive: true,
      category: "Luxury Car Rental"
    },
    {
      id: "porsche-cayenne-turbo",
      title: "Porsche Cayenne Turbo",
      description: "Luxury performance SUV with sport chrono package",
      image: carPorscheCayenne,
      price: "AED 4,200",
      duration: "Full day",
      location: "Adventure & City Combined",
      rating: 4.7,
      category: "Luxury Car Rental"
    },
    // Supercar Collection
    {
      id: "lamborghini-huracan",
      title: "Lamborghini Huracán Performante",
      description: "Track-focused supercar with active aerodynamics",
      image: limoLamborghini,
      price: "AED 9,200",
      duration: "4 hours",
      location: "Dubai Autodrome & Streets",
      rating: 4.7,
      isHotDeal: true,
      category: "Luxury Car Rental"
    },
    {
      id: "ferrari-488-gtb",
      title: "Ferrari 488 GTB",
      description: "Italian mid-engine supercar with 661hp twin-turbo V8",
      image: limoFerrari,
      price: "AED 11,800",
      duration: "6 hours",
      location: "Scenic Coastal Routes",
      rating: 4.8,
      isExclusive: true,
      category: "Luxury Car Rental"
    },
    // Luxury SUV Collection
    {
      id: "range-rover-autobiography",
      title: "Range Rover Autobiography",
      description: "Ultimate luxury SUV with terrain response & premium cabin",
      image: limoRangeRover,
      price: "AED 3,300",
      duration: "Full day",
      location: "Desert Safari & City Tours",
      rating: 4.7,
      category: "Luxury Car Rental"
    },
    // Helicopter Rides - VIP Fleet
    {
      id: "helicopter-h155-vip",
      title: "Airbus H155 VIP Experience",
      description: "Ultra-luxury helicopter with panoramic windows, leather interiors & champagne service",
      image: helicopterH155Vip,
      price: "AED 31,200",
      duration: "3 hours",
      location: "Dubai Skyline & Coastline",
      rating: 5.0,
      isExclusive: true,
      category: "Helicopter Rides"
    },
    {
      id: "helicopter-aw139-vip",
      title: "Leonardo AW139 Presidential",
      description: "Executive helicopter with VIP cabin configuration & private landing zones",
      image: helicopterAw139Vip,
      price: "AED 44,100",
      duration: "4 hours",
      location: "Palm Jumeirah & Emirates",
      rating: 4.9,
      isExclusive: true,
      category: "Helicopter Rides"
    },
    {
      id: "helicopter-s76d-luxury",
      title: "Sikorsky S-76D Luxury Charter",
      description: "Premium helicopter with executive seating & helicopter butler service",
      image: helicopterS76dLuxury,
      price: "AED 55,000",
      duration: "5 hours",
      location: "Dubai Marina & Desert",
      rating: 5.0,
      isExclusive: true,
      category: "Helicopter Rides"
    },
    {
      id: "helicopter-bell-429",
      title: "Bell 429 VIP Transport",
      description: "Modern helicopter with panoramic cabin & luxury amenities for city tours",
      image: helicopterBell429,
      price: "AED 22,800",
      duration: "2 hours",
      location: "Burj Khalifa & Downtown",
      rating: 4.8,
      isHotDeal: true,
      category: "Helicopter Rides"
    },
    {
      id: "helicopter-ec135-panoramic",
      title: "Eurocopter EC135 Scenic",
      description: "Glass-cabin helicopter with 360° views & professional aerial photography",
      image: helicopterEc135Panoramic,
      price: "AED 17,600",
      duration: "90 minutes",
      location: "Burj Al Arab & Coast",
      rating: 4.7,
      category: "Helicopter Rides"
    },
    // Adrenaline & Sky Adventures
    {
      id: "skydiving-palm-jumeirah",
      title: "Palm Jumeirah Tandem Jump",
      description: "Professional instructor, full gear, HD video & photos included",
      image: skydivingPalmJumeirah,
      price: "AED 2,499",
      duration: "4 hours",
      location: "Palm Jumeirah Drop Zone",
      rating: 4.9,
      isExclusive: true,
      category: "Adrenaline & Sky Adventures"
    },
    {
      id: "skydiving-desert",
      title: "Desert Drop Zone Skydiving",
      description: "Desert tandem skydiving with professional instructor & full equipment",
      image: skydivingDesertDrop,
      price: "AED 2,099",
      duration: "3 hours",
      location: "Desert Drop Zone",
      rating: 4.8,
      isHotDeal: true,
      category: "Adrenaline & Sky Adventures"
    },
    {
      id: "xline-zipline",
      title: "Dubai Marina XLine Zipline",
      description: "High-speed zipline up to 80 km/h with GoPro footage included",
      image: ziplineDubaiMarina,
      price: "AED 699",
      duration: "2 hours",
      location: "Dubai Marina",
      rating: 4.7,
      category: "Adrenaline & Sky Adventures"
    },
    {
      id: "sky-views-observatory",
      title: "Sky Views Edge Walk & Glass Slide",
      description: "Walk on sky bridge at 219 meters above ground with glass slide experience",
      image: skyViewsObservatory,
      price: "AED 70",
      duration: "1.5 hours",
      location: "Downtown Dubai",
      rating: 4.5,
      category: "Adrenaline & Sky Adventures"
    },
    // Fun & Gaming
    {
      id: "battlekart-first-game",
      title: "BattleKart AR Go-Karting - 1st Game",
      description: "Snake • Mario Kart • Splatoon modes - Real track + video game combo",
      image: battlekartArGaming,
      price: "AED 200",
      duration: "30 minutes",
      location: "BattleKart Dubai",
      rating: 4.8,
      isHotDeal: true,
      category: "Fun & Gaming"
    },
    {
      id: "battlekart-second-game",
      title: "BattleKart AR Go-Karting - 2nd Game",
      description: "Augmented reality karting with real-time scoring & AR effects",
      image: battlekartMarioKart,
      price: "AED 170",
      duration: "30 minutes",
      location: "BattleKart Dubai",
      rating: 4.8,
      category: "Fun & Gaming"
    },
    {
      id: "battlekart-additional",
      title: "BattleKart AR Go-Karting - Additional Race",
      description: "One-of-a-kind virtual karting experience with multiple game modes",
      image: battlekartSplatoonMode,
      price: "AED 130",
      duration: "30 minutes",
      location: "BattleKart Dubai",
      rating: 4.8,
      category: "Fun & Gaming"
    },
    // Jet Ski & Flyboard Experiences
    {
      id: "jetski-burj-al-arab",
      title: "Jet Ski Tour - Burj Al Arab",
      description: "30-minute guided jet ski tour around iconic Burj Al Arab",
      image: jetskiBurjAlArab,
      price: "AED 350",
      duration: "30 minutes",
      location: "Burj Al Arab Waters",
      rating: 4.6,
      category: "Jet Ski & Flyboard"
    },
    {
      id: "jetski-atlantis-royal",
      title: "Jet Ski Tour - Atlantis, The Royal",
      description: "1-hour premium jet ski experience around Atlantis resort",
      image: jetskiAtlantisRoyal,
      price: "AED 600",
      duration: "60 minutes",
      location: "Atlantis, The Royal",
      rating: 4.7,
      category: "Jet Ski & Flyboard"
    },
    {
      id: "jetski-palm-loop",
      title: "Palm Jumeirah Loop Jet Ski",
      description: "90-minute comprehensive tour around entire Palm Jumeirah",
      image: jetskiPalmJumeirahLoop,
      price: "AED 770",
      duration: "90 minutes",
      location: "Palm Jumeirah",
      rating: 4.8,
      isHotDeal: true,
      category: "Jet Ski & Flyboard"
    },
    {
      id: "jetski-coastline",
      title: "Explore Dubai Coastline",
      description: "2-hour extensive jet ski tour exploring Dubai's full coastline",
      image: jetskiDubaiCoastline,
      price: "AED 930",
      duration: "2 hours",
      location: "Dubai Coastline",
      rating: 4.9,
      isExclusive: true,
      category: "Jet Ski & Flyboard"
    },
    {
      id: "combo-jetski-flyboard-30",
      title: "Combo: 30min Jet Ski + 30min Flyboard",
      description: "Perfect combination of jet skiing and flyboarding experiences",
      image: jetskiFlyboardCombo,
      price: "AED 650",
      duration: "1 hour",
      location: "Dubai Marina",
      rating: 4.8,
      category: "Jet Ski & Flyboard"
    },
    {
      id: "combo-jetski-flyboard-60",
      title: "Combo: 1hr Jet Ski + 30min Flyboard",
      description: "Extended jet ski session combined with flyboard adventure",
      image: jetskiFlyboardCombo,
      price: "AED 850",
      duration: "1.5 hours",
      location: "Dubai Marina",
      rating: 4.9,
      isExclusive: true,
      category: "Jet Ski & Flyboard"
    },
    {
      id: "flyboard-solo",
      title: "Flyboard Solo Session",
      description: "30-minute flyboarding experience with professional instruction",
      image: flyboardSoloSession,
      price: "AED 380",
      duration: "30 minutes",
      location: "Dubai Marina",
      rating: 4.6,
      category: "Jet Ski & Flyboard"
    }
  ];

  const filteredBookings = activeCategory === "All" 
    ? premiumBookings 
    : premiumBookings.filter(booking => booking.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation user={user} onLogout={signOut} />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dubai <span className="text-gold">À La Carte</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Curated luxury experiences at your fingertips
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="book">Book Experience</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>

            <TabsContent value="book" className="space-y-6">
              <div className="text-center mb-6">
                <div className="flex gap-4 justify-center mb-6">
                  <Button variant="premium" size="lg">
                    <Calendar className="w-5 h-5 mr-2" />
                    Calendar View
                  </Button>
                  <Button variant="elegant" size="lg">
                    Quick Book
                  </Button>
                </div>
              </div>

              <CategoryFilter 
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBookings.map((booking) => (
                  <PremiumBookingCard key={booking.id} booking={booking} />
                ))}
              </div>

              {filteredBookings.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No experiences available in this category</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="upcoming">
              <Suspense fallback={
                <div className="animate-pulse space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-32 bg-secondary rounded-lg" />
                  ))}
                </div>
              }>
                <BookingsList />
              </Suspense>
            </TabsContent>

            <TabsContent value="history">
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">Booking History</h3>
                <p className="text-muted-foreground mb-6">
                  View your past experiences and rebook favorites
                </p>
                <Button variant="outline">
                  Load History
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Bookings;