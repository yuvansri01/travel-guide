
export interface Review {
  id: string;
  destinationId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Booking {
  id: string;
  destinationId: string;
  hotelId?: string;
  userName: string;
  email: string;
  phone?: string;
  checkIn?: string;
  checkOut?: string;
  travelDate?: Date;
  persons: number;
}

export interface TouristSpot {
  id: string;
  name: string;
  description: string;
  entryFee: string;
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  pricePerNight: number;
  rating: number;
}

export interface Destination {
  id: string;
  name: string;
  state: string;
  location: string;
  category: "Beach" | "Hill Station" | "Historical" | "Religious" | "Adventure" | "Nature" | "City";
  shortDesc: string;
  fullDesc: string;
  bestTime: string;
  climate: string;
  travelTips: string;
  rating: number;
  imageUrl: string;
  galleryImages: string[];
  pricePerPerson: number;
  reviews: Review[];
  spots: TouristSpot[];
  hotels: Hotel[];
}

import parisImg from "../assets/paris.jpg";
import baliImg from "../assets/bali.jpg";
import kyotoImg from "../assets/kyoto.jpg";
import santoriniImg from "../assets/santorini.jpg";
import tajMahalImg from "../assets/taj-mahal.jpg";
import keralaImg from "../assets/kerala.jpg";
import jaipurImg from "../assets/jaipur.jpg";
import goaImg from "../assets/goa.jpg";
import mahabalipuramImg from "../assets/mahabalipuram.jpg";
import maduraiImg from "../assets/madurai.jpg";
import ootyImg from "../assets/ooty.jpg";
import kanyakumariImg from "../assets/kanyakumari.jpg";
import kodaikanalImg from "../assets/kodaikanal.jpg";
import marinaBeachImg from "../assets/marina-beach.jpg";
import hampiImg from "../assets/bali.jpg";
import munnarImg from "../assets/kerala.jpg";
import amritsarImg from "../assets/kyoto.jpg";
import rishikeshImg from "../assets/bali.jpg";
import bengaluruImg from "../assets/kyoto.jpg";
import chennaiImg from "../assets/marina-beach.jpg";
import pondicherryImg from "../assets/santorini.jpg";
import kochiImg from "../assets/kerala.jpg";
import kanyakumariBeachImg from "../assets/kanyakumari.jpg";

export const MOCK_DESTINATIONS: Destination[] = [
  {
    id: "16",
    name: "Chennai",
    state: "Tamil Nadu",
    location: "Chennai, India",
    category: "Beach",
    shortDesc: "The Gateway to South India with the famous Marina Beach.",
    fullDesc: "Chennai is a major cultural, economic, and educational center. It is famous for its classical music and dance, beautiful temples, and the sprawling Marina Beach.",
    bestTime: "November to February",
    climate: "Tropical maritime climate; hot and humid for most of the year.",
    travelTips: "Visit Marina Beach during sunrise or sunset. Try the authentic filter coffee.",
    rating: 4.4,
    imageUrl: chennaiImg,
    galleryImages: [chennaiImg, maduraiImg, mahabalipuramImg],
    pricePerPerson: 350,
    reviews: [
      { id: "r1", destinationId: "16", userName: "Arun Kumar", rating: 5, comment: "Absolutely beautiful and clean - skip Goa and go to Chennai. Security and safety is their top priority. You will find many clean toilets.", date: "2024-01-15" },
      { id: "r2", destinationId: "16", userName: "Priya S", rating: 4, comment: "Best place to hang out with friends and family. It's awesome place to visit in Chennai because its India's biggest beach", date: "2024-01-10" }
    ],
    spots: [
      { id: "s25", name: "Marina Beach", description: "One of the longest urban beaches in the world.", entryFee: "Free" },
      { id: "s_chen_1", name: "Elliot’s Beach (Besant Nagar)", description: "A popular hangout spot for locals.", entryFee: "Free" },
      { id: "s26", name: "Kapaleeshwarar Temple", description: "Ancient Dravidian-style temple.", entryFee: "Free" },
      { id: "s_chen_2", name: "Fort St. George", description: "First English fortress in India.", entryFee: "₹5" },
      { id: "s_chen_3", name: "Government Museum", description: "One of the oldest museums in India.", entryFee: "₹15" },
      { id: "s27", name: "Santhome Basilica", description: "Historic church built over a saint's tomb.", entryFee: "Free" },
      { id: "s_chen_4", name: "Guindy National Park", description: "One of the few national parks situated within a city.", entryFee: "₹20" }
    ],
    hotels: [
      { id: "h17", name: "ITC Grand Chola", location: "Guindy", pricePerNight: 14000, rating: 5 },
      { id: "h18", name: "Taj Fisherman's Cove", location: "Covelong", pricePerNight: 16000, rating: 4.9 }
    ]
  },
  {
    id: "10",
    name: "Madurai",
    state: "Tamil Nadu",
    location: "Madurai, India",
    category: "Religious",
    shortDesc: "The Athens of the East, famous for Meenakshi Amman Temple.",
    fullDesc: "Madurai is one of the oldest continuously inhabited cities in the world. It is built around the Meenakshi Amman Temple, which is a major pilgrimage site.",
    bestTime: "October to March",
    climate: "Hot and semi-arid with a distinct monsoon season.",
    travelTips: "Visit the temple early in the morning or for the night ceremony.",
    rating: 4.9,
    imageUrl: maduraiImg,
    galleryImages: [maduraiImg, mahabalipuramImg, tajMahalImg],
    pricePerPerson: 350,
    reviews: [
      { id: "r3", destinationId: "10", userName: "Vicky K", rating: 5, comment: "One of the most magnificent temples in India. The intricate sculptures, colorful gopurams, and rich cultural heritage make the visit unforgettable.", date: "2024-01-20" },
      { id: "r4", destinationId: "10", userName: "Alex T", rating: 5, comment: "Meenakshi Amman Temple is truly breathtaking with its colourful gopurams, detailed sculptures and vibrant atmosphere.", date: "2024-01-18" }
    ],
    spots: [
      { id: "s7", name: "Meenakshi Amman Temple", description: "Dravidian architecture masterpiece.", entryFee: "Free" },
      { id: "s8", name: "Thirumalai Nayakkar Palace", description: "17th-century palace complex.", entryFee: "₹10" },
      { id: "s9", name: "Gandhi Memorial Museum", description: "Museum dedicated to Mahatma Gandhi.", entryFee: "Free" },
      { id: "s_mad_1", name: "Alagar Kovil", description: "Ancient temple dedicated to Lord Vishnu.", entryFee: "Free" },
      { id: "s_mad_2", name: "Vaigai River", description: "Life-giving river of the ancient city.", entryFee: "Free" }
    ],
    hotels: [
      { id: "h5", name: "Heritage Madurai", location: "Melakkal Main Road", pricePerNight: 6000, rating: 4.5 },
      { id: "h6", name: "The Gateway Hotel", location: "Pasumalai", pricePerNight: 5500, rating: 4 }
    ]
  },
  {
    id: "15",
    name: "Bengaluru",
    state: "Karnataka",
    location: "Bengaluru, India",
    category: "City",
    shortDesc: "Garden City & Silicon Valley.",
    fullDesc: "Vibrant metropolis known for its tech and parks.",
    bestTime: "October to February",
    climate: "Moderate.",
    travelTips: "Expect traffic.",
    rating: 4.5,
    imageUrl: bengaluruImg,
    galleryImages: [bengaluruImg],
    pricePerPerson: 400,
    reviews: [
      { id: "r5", destinationId: "15", userName: "Suresh M", rating: 4, comment: "Nice place to visit one time. Architecture of the palace is awesome and the Palace has beautifully designed. There are beautiful paintings on the ceiling.", date: "2024-01-22" }
    ],
    spots: [
      { id: "s22", name: "Lalbagh Botanical Garden", description: "Glass house.", entryFee: "₹25" },
      { id: "s_ben_1", name: "Cubbon Park", description: "Lush space.", entryFee: "Free" },
      { id: "s_ben_2", name: "Bangalore Palace", description: "Tudor-style.", entryFee: "₹230" },
      { id: "s_ben_3", name: "Vidhana Soudha", description: "Legislature seat.", entryFee: "Free" },
      { id: "s_ben_4", name: "Tipu Sultan’s Summer Palace", description: "Teak palace.", entryFee: "₹15" },
      { id: "s_ben_5", name: "ISKCON Temple", description: "Spiritual center.", entryFee: "Free" },
      { id: "s_ben_6", name: "Bull Temple", description: "Nandi temple.", entryFee: "Free" },
      { id: "s_ben_7", name: "Visvesvaraya Museum", description: "Science museum.", entryFee: "₹75" },
      { id: "s_ben_8", name: "National Gallery of Modern Art", description: "Art hub.", entryFee: "₹20" },
      { id: "s_ben_9", name: "Karnataka Chitrakala Parishath", description: "Art college.", entryFee: "Free" },
      { id: "s_ben_10", name: "Bannerghatta National Park", description: "Wildlife.", entryFee: "₹300" },
      { id: "s_ben_11", name: "Nandi Hills", description: "Sunrise point.", entryFee: "Free" },
      { id: "s_ben_12", name: "Turahalli Forest", description: "Nature park.", entryFee: "Free" },
      { id: "s_ben_13", name: "Commercial Street", description: "Shopping.", entryFee: "Free" },
      { id: "s_ben_14", name: "Brigade Road", description: "Entertainment.", entryFee: "Free" },
      { id: "s_ben_15", name: "MG Road", description: "Heart of city.", entryFee: "Free" },
      { id: "s_ben_16", name: "UB City", description: "Luxury mall.", entryFee: "Free" }
    ],
    hotels: []
  },
  {
    id: "7",
    name: "Ooty",
    state: "Tamil Nadu",
    location: "Nilgiris, India",
    category: "Hill Station",
    shortDesc: "The Queen of Hill Stations.",
    fullDesc: "Ooty is a popular hill station in the Blue Mountains of the Western Ghats.",
    bestTime: "March to June",
    climate: "Cool and pleasant.",
    travelTips: "Book the toy train.",
    rating: 4.7,
    imageUrl: ootyImg,
    galleryImages: [ootyImg, munnarImg],
    pricePerPerson: 350,
    reviews: [
      { id: "r6", destinationId: "7", userName: "Lakshmi", rating: 5, comment: "The Ooty Government Botanical Garden is a must-visit for nature lovers! It's spread over a vast area, the garden is beautifully maintained with a huge variety of flowers.", date: "2024-01-25" }
    ],
    spots: [
      { id: "s_ooty_1", name: "Ooty Botanical Garden", description: "Sprawling garden.", entryFee: "₹30" },
      { id: "s_ooty_2", name: "Ooty Lake", description: "Artificial lake.", entryFee: "₹15" },
      { id: "s_ooty_3", name: "Doddabetta Peak", description: "Highest point.", entryFee: "₹10" },
      { id: "s_ooty_4", name: "Rose Garden", description: "Largest rose garden.", entryFee: "₹30" },
      { id: "s_ooty_5", name: "Nilgiri Mountain Railway", description: "Toy train.", entryFee: "Varies" }
    ],
    hotels: []
  },
  {
    id: "20",
    name: "Rameshwaram",
    state: "Tamil Nadu",
    location: "Rameshwaram, India",
    category: "Religious",
    shortDesc: "The holy island city known for its epic temples.",
    fullDesc: "Rameshwaram is one of the Char Dham pilgrimage sites, located on Pamban Island.",
    bestTime: "October to April",
    climate: "Tropical; moderate throughout the year.",
    travelTips: "Take a dip in the holy sea. Walk along the Pamban Bridge.",
    rating: 4.8,
    imageUrl: maduraiImg,
    galleryImages: [maduraiImg, kanyakumariImg],
    pricePerPerson: 300,
    reviews: [],
    spots: [
      { id: "s_ram_1", name: "Ramanathaswamy Temple", description: "Famous for its corridor.", entryFee: "Free" },
      { id: "s_ram_2", name: "Agni Theertham", description: "Holy sea.", entryFee: "Free" },
      { id: "s_ram_3", name: "Dhanushkodi Beach", description: "Ghost town.", entryFee: "Free" },
      { id: "s_ram_4", name: "Pamban Bridge", description: "Iconic bridge.", entryFee: "Free" },
      { id: "s_ram_5", name: "Floating Stone Temple", description: "Floating stones.", entryFee: "Free" }
    ],
    hotels: []
  },
  {
    id: "21",
    name: "Kodaikanal",
    state: "Tamil Nadu",
    location: "Kodaikanal, India",
    category: "Hill Station",
    shortDesc: "The Princess of Hill Stations.",
    fullDesc: "Kodaikanal is a serene hill station in the Palani Hills.",
    bestTime: "April to June",
    climate: "Cool temperate.",
    travelTips: "Try local chocolates.",
    rating: 4.7,
    imageUrl: kodaikanalImg,
    galleryImages: [kodaikanalImg, ootyImg],
    pricePerPerson: 350,
    reviews: [],
    spots: [
      { id: "s_kod_1", name: "Kodaikanal Lake", description: "Star-shaped lake.", entryFee: "Free" },
      { id: "s_kod_2", name: "Coaker’s Walk", description: "Scenic path.", entryFee: "₹20" },
      { id: "s_kod_3", name: "Pillar Rocks", description: "Giant rock pillars.", entryFee: "₹5" },
      { id: "s_kod_4", name: "Bryant Park", description: "Botanical garden.", entryFee: "₹30" },
      { id: "s_kod_5", name: "Silver Cascade Falls", description: "Waterfall.", entryFee: "Free" }
    ],
    hotels: []
  },
  {
    id: "22",
    name: "Tanjore",
    state: "Tamil Nadu",
    location: "Thanjavur, India",
    category: "Historical",
    shortDesc: "Cradle of Chola culture.",
    fullDesc: "Thanjavur is famous for its Great Living Chola Temples.",
    bestTime: "October to March",
    climate: "Tropical.",
    travelTips: "Buy dancing dolls.",
    rating: 4.9,
    imageUrl: mahabalipuramImg,
    galleryImages: [mahabalipuramImg],
    pricePerPerson: 250,
    reviews: [],
    spots: [
      { id: "s_tan_1", name: "Brihadeeswarar Temple", description: "Masterpiece.", entryFee: "Free" },
      { id: "s_tan_2", name: "Saraswathi Mahal Library", description: "Ancient library.", entryFee: "Free" },
      { id: "s_tan_3", name: "Thanjavur Palace", description: "Royal residence.", entryFee: "₹50" },
      { id: "s_tan_4", name: "Schwartz Church", description: "Historic church.", entryFee: "Free" }
    ],
    hotels: []
  },
  {
    id: "9",
    name: "Mahabalipuram",
    state: "Tamil Nadu",
    location: "Mahabalipuram, India",
    category: "Historical",
    shortDesc: "Ancient monolithic temples.",
    fullDesc: "Mahabalipuram is famous for its rock-cut temples.",
    bestTime: "October to March",
    climate: "Maritime tropical.",
    travelTips: "Try seafood.",
    rating: 4.8,
    imageUrl: mahabalipuramImg,
    galleryImages: [mahabalipuramImg],
    pricePerPerson: 300,
    reviews: [],
    spots: [
      { id: "s_mah_1", name: "Shore Temple", description: "Iconic temple.", entryFee: "₹40" },
      { id: "s_mah_2", name: "Pancha Rathas", description: "Monolithic temples.", entryFee: "Included" },
      { id: "s_mah_3", name: "Arjuna’s Penance", description: "Rock relief.", entryFee: "Included" },
      { id: "s_mah_4", name: "Mahabalipuram Beach", description: "Beautiful beach.", entryFee: "Free" },
      { id: "s_mah_5", name: "Krishna’s Butter Ball", description: "Natural rock.", entryFee: "Free" }
    ],
    hotels: []
  },
  {
    id: "23",
    name: "Hogenakkal",
    state: "Tamil Nadu",
    location: "Dharmapuri, India",
    category: "Nature",
    shortDesc: "The Niagara of India.",
    fullDesc: "Waterfalls on the Kaveri River.",
    bestTime: "July to October",
    climate: "Tropical.",
    travelTips: "Negotiate coracle price.",
    rating: 4.4,
    imageUrl: keralaImg,
    galleryImages: [keralaImg],
    pricePerPerson: 200,
    reviews: [],
    spots: [
      { id: "s_hog_1", name: "Hogenakkal Waterfalls", description: "Powerful falls.", entryFee: "Free" },
      { id: "s_hog_2", name: "Coracle Boat Ride", description: "Basket boat.", entryFee: "₹750" },
      { id: "s_hog_3", name: "Carbonite Rocks", description: "Old rocks.", entryFee: "Free" }
    ],
    hotels: []
  },
  {
    id: "24",
    name: "Coimbatore",
    state: "Tamil Nadu",
    location: "Coimbatore, India",
    category: "City",
    shortDesc: "Manchester of South India.",
    fullDesc: "Major industrial hub at the foothills of Western Ghats.",
    bestTime: "September to March",
    climate: "Pleasant.",
    travelTips: "Visit Isha Yoga.",
    rating: 4.6,
    imageUrl: munnarImg,
    galleryImages: [munnarImg],
    pricePerPerson: 300,
    reviews: [],
    spots: [
      { id: "s_coi_1", name: "Marudamalai Temple", description: "Hilltop temple.", entryFee: "Free" },
      { id: "s_coi_2", name: "Isha Yoga Center (Adiyogi Statue)", description: "Largest bust statue.", entryFee: "Free" },
      { id: "s_coi_3", name: "Siruvani Waterfalls", description: "Beautiful falls.", entryFee: "₹50" },
      { id: "s_coi_4", name: "Black Thunder Theme Park", description: "Water park.", entryFee: "₹800" }
    ],
    hotels: []
  },
  {
    id: "25",
    name: "Yercaud",
    state: "Tamil Nadu",
    location: "Salem, India",
    category: "Hill Station",
    shortDesc: "The Jewel of the South.",
    fullDesc: "Hill station in the Shevaroy Hills.",
    bestTime: "October to June",
    climate: "Salubrious.",
    travelTips: "Visit coffee estates.",
    rating: 4.3,
    imageUrl: ootyImg,
    galleryImages: [ootyImg],
    pricePerPerson: 250,
    reviews: [],
    spots: [
      { id: "s_yer_1", name: "Yercaud Lake", description: "Emerald lake.", entryFee: "Free" },
      { id: "s_yer_2", name: "Lady’s Seat", description: "Viewpoint.", entryFee: "Free" },
      { id: "s_yer_3", name: "Pagoda Point", description: "Stone structures.", entryFee: "Free" },
      { id: "s_yer_4", name: "Killiyur Falls", description: "Waterfall.", entryFee: "Free" }
    ],
    hotels: []
  },
  {
    id: "26",
    name: "Tiruvannamalai",
    state: "Tamil Nadu",
    location: "Tiruvannamalai, India",
    category: "Religious",
    shortDesc: "The city of eternal fire.",
    fullDesc: "Sacred place centered around Arunachala hill.",
    bestTime: "November to February",
    climate: "Tropical.",
    travelTips: "Do the Girivalam.",
    rating: 4.9,
    imageUrl: maduraiImg,
    galleryImages: [maduraiImg],
    pricePerPerson: 200,
    reviews: [],
    spots: [
      { id: "s_tir_1", name: "Arunachaleswarar Temple", description: "Huge temple.", entryFee: "Free" },
      { id: "s_tir_2", name: "Girivalam Path", description: "14km path.", entryFee: "Free" },
      { id: "s_tir_3", name: "Skandashram", description: "Cave.", entryFee: "Free" },
      { id: "s_tir_4", name: "Virupaksha Cave", description: "Meditation cave.", entryFee: "Free" }
    ],
    hotels: []
  },
  {
    id: "19",
    name: "Kanyakumari",
    state: "Tamil Nadu",
    location: "Kanyakumari, India",
    category: "Beach",
    shortDesc: "Tip of India where oceans meet.",
    fullDesc: "Southernmost tip of mainland India.",
    bestTime: "October to March",
    climate: "Maritime tropical.",
    travelTips: "Watch sunset and moonrise.",
    rating: 4.6,
    imageUrl: kanyakumariBeachImg,
    galleryImages: [kanyakumariBeachImg],
    pricePerPerson: 300,
    reviews: [],
    spots: [
      { id: "s34", name: "Vivekananda Rock Memorial", description: "Monument offshore.", entryFee: "₹50" },
      { id: "s35", name: "Thirumalluvar Statue", description: "Stone statue.", entryFee: "Ferry" },
      { id: "s_kan_1", name: "Triveni Sangam", description: "Confluence of three seas.", entryFee: "Free" },
      { id: "s_kan_2", name: "Sunset Point", description: "Breathtaking views.", entryFee: "Free" }
    ],
    hotels: []
  },
  {
    id: "27",
    name: "Theni",
    state: "Tamil Nadu",
    location: "Theni, India",
    category: "Nature",
    shortDesc: "The Cardamom City.",
    fullDesc: "Valley city surrounded by Western Ghats.",
    bestTime: "September to March",
    climate: "Moderate.",
    travelTips: "Explore tea estates.",
    rating: 4.5,
    imageUrl: keralaImg,
    galleryImages: [keralaImg],
    pricePerPerson: 300,
    reviews: [],
    spots: [
      { id: "s_the_1", name: "Suruli Falls", description: "Cascading waterfall.", entryFee: "₹5" },
      { id: "s_the_2", name: "Meghamalai", description: "Misty mountains.", entryFee: "Free" },
      { id: "s_the_3", name: "Vaigai Dam", description: "Major dam.", entryFee: "Free" }
    ],
    hotels: []
  },
  {
    id: "28",
    name: "Valparai",
    state: "Tamil Nadu",
    location: "Valparai, India",
    category: "Nature",
    shortDesc: "The 7th Heaven.",
    fullDesc: "Pristine hill station in Anaimalai Hills.",
    bestTime: "September to March",
    climate: "Cool temperate.",
    travelTips: "Watch for elephants.",
    rating: 4.8,
    imageUrl: munnarImg,
    galleryImages: [munnarImg],
    pricePerPerson: 350,
    reviews: [],
    spots: [
      { id: "s_val_1", name: "Tea Estates", description: "Green carpets.", entryFee: "Free" },
      { id: "s_val_2", name: "Sholayar Dam", description: "High dam.", entryFee: "Free" },
      { id: "s_val_3", name: "Aliyar Dam", description: "Reservoir.", entryFee: "Free" },
      { id: "s_val_4", name: "Monkey Falls", description: "Waterfall.", entryFee: "₹30" }
    ],
    hotels: []
  },
  {
    id: "5",
    name: "Agra",
    state: "Uttar Pradesh",
    location: "Agra, India",
    category: "Historical",
    shortDesc: "Home to the Taj Mahal.",
    fullDesc: "Agra is famous for its Mughal-era architecture.",
    bestTime: "October to March",
    climate: "Hot summers, chilly winters.",
    travelTips: "Visit at sunrise.",
    rating: 4.9,
    imageUrl: tajMahalImg,
    galleryImages: [tajMahalImg],
    pricePerPerson: 500,
    reviews: [],
    spots: [
      { id: "s1", name: "Taj Mahal", description: "Mausoleum.", entryFee: "₹50" },
      { id: "s2", name: "Agra Fort", description: "Fortress.", entryFee: "₹40" },
      { id: "s3", name: "Mehtab Bagh", description: "Garden.", entryFee: "₹25" }
    ],
    hotels: []
  },
  {
    id: "8",
    name: "Goa",
    state: "Goa",
    location: "Goa, India",
    category: "Beach",
    shortDesc: "Vibrant nightlife and beaches.",
    fullDesc: "India's smallest state known for its coast.",
    bestTime: "November to February",
    climate: "Tropical.",
    travelTips: "Rent a scooter.",
    rating: 4.6,
    imageUrl: goaImg,
    galleryImages: [goaImg],
    pricePerPerson: 450,
    reviews: [],
    spots: [
      { id: "s4", name: "Baga Beach", description: "Nightlife.", entryFee: "Free" },
      { id: "s5", name: "Fort Aguada", description: "Portuguese fort.", entryFee: "Free" },
      { id: "s6", name: "Dudhsagar Falls", description: "Waterfalls.", entryFee: "₹400" }
    ],
    hotels: []
  }
];

class Store {
  destinations: Destination[] = [...MOCK_DESTINATIONS];
  bookings: Booking[] = [];
  searchHistory: string[] = [];

  getDestinations() {
    return this.destinations;
  }

  getDestination(id: string) {
    return this.destinations.find(d => d.id === id);
  }

  addBooking(booking: Booking) {
    this.bookings.push(booking);
    return true;
  }

  addReview(review: Review) {
    const dest = this.destinations.find(d => d.id === review.destinationId);
    if (dest) {
      dest.reviews.unshift(review);
      const total = dest.reviews.reduce((acc, r) => acc + r.rating, 0);
      dest.rating = parseFloat((total / dest.reviews.length).toFixed(1));
      return true;
    }
    return false;
  }

  addToSearchHistory(term: string) {
    if (!this.searchHistory.includes(term)) {
      this.searchHistory.unshift(term);
      this.searchHistory = this.searchHistory.slice(0, 5);
    }
  }

  getSearchHistory() {
    return this.searchHistory;
  }
}

export const db = new Store();
