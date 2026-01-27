
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
import hampiImg from "../assets/bali.jpg"; // Using bali as placeholder
import munnarImg from "../assets/kerala.jpg";
import amritsarImg from "../assets/kyoto.jpg"; // Placeholder
import rishikeshImg from "../assets/bali.jpg"; // Placeholder
import bengaluruImg from "../assets/kyoto.jpg"; // Placeholder
import chennaiImg from "../assets/marina-beach.jpg";

export const MOCK_DESTINATIONS: Destination[] = [
  {
    id: "15",
    name: "Bengaluru",
    state: "Karnataka",
    location: "Bengaluru, India",
    category: "City",
    shortDesc: "The Garden City and Silicon Valley of India.",
    fullDesc: "Bengaluru is a vibrant metropolis known for its pleasant weather, lush parks, and booming tech industry. It offers a unique blend of historical charm and modern urban life.",
    bestTime: "October to February",
    climate: "Moderate climate; pleasant throughout the year.",
    travelTips: "Expect heavy traffic during peak hours. Explore the local craft beer scene.",
    rating: 4.5,
    imageUrl: bengaluruImg,
    galleryImages: [bengaluruImg, hampiImg, ootyImg],
    pricePerPerson: 400,
    reviews: [],
    spots: [
      { id: "s22", name: "Lalbagh Botanical Garden", description: "Historic garden with a glass house.", entryFee: "₹25" },
      { id: "s23", name: "Bangalore Palace", description: "Tudor-style royal palace ruins.", entryFee: "₹230" },
      { id: "s24", name: "Cubbon Park", description: "Lush green space in the heart of the city.", entryFee: "Free" }
    ],
    hotels: [
      { id: "h15", name: "The Leela Palace", location: "Old Airport Road", pricePerNight: 15000, rating: 5 },
      { id: "h16", name: "ITC Gardenia", location: "Residency Road", pricePerNight: 12000, rating: 4.8 }
    ]
  },
  {
    id: "16",
    name: "Chennai",
    state: "Tamil Nadu",
    location: "Chennai, India",
    category: "City",
    shortDesc: "The Gateway to South India with rich heritage.",
    fullDesc: "Chennai is a major cultural, economic, and educational center. It is famous for its classical music and dance, beautiful temples, and the sprawling Marina Beach.",
    bestTime: "November to February",
    climate: "Tropical maritime climate; hot and humid for most of the year.",
    travelTips: "Visit Marina Beach during sunrise or sunset. Try the authentic filter coffee.",
    rating: 4.4,
    imageUrl: chennaiImg,
    galleryImages: [chennaiImg, maduraiImg, mahabalipuramImg],
    pricePerPerson: 350,
    reviews: [],
    spots: [
      { id: "s25", name: "Marina Beach", description: "One of the longest urban beaches in the world.", entryFee: "Free" },
      { id: "s26", name: "Kapaleeshwarar Temple", description: "Ancient Dravidian-style temple.", entryFee: "Free" },
      { id: "s27", name: "Santhome Cathedral", description: "Historic church built over a saint's tomb.", entryFee: "Free" }
    ],
    hotels: [
      { id: "h17", name: "ITC Grand Chola", location: "Guindy", pricePerNight: 14000, rating: 5 },
      { id: "h18", name: "Taj Fisherman's Cove", location: "Covelong", pricePerNight: 16000, rating: 4.9 }
    ]
  },
  {
    id: "13",
    name: "Amritsar (Golden Temple)",
    state: "Punjab",
    location: "Amritsar, India",
    category: "Religious",
    shortDesc: "The spiritual and cultural center of the Sikh religion.",
    fullDesc: "Amritsar is home to the spectacular Golden Temple, the holiest shrine of Sikhism. The city is also known for its rich history, vibrant culture, and delicious Punjabi cuisine.",
    bestTime: "October to March",
    climate: "Extremely hot summers and very cold winters.",
    travelTips: "Cover your head before entering the Golden Temple complex. Don't miss the Beating Retreat ceremony at Wagah Border.",
    rating: 4.9,
    imageUrl: amritsarImg,
    galleryImages: [amritsarImg, tajMahalImg, jaipurImg],
    pricePerPerson: 250,
    reviews: [],
    spots: [
      { id: "s16", name: "Golden Temple", description: "Iconic gilded Sikh shrine.", entryFee: "Free" },
      { id: "s17", name: "Jallianwala Bagh", description: "Memorial of the 1919 massacre.", entryFee: "Free" },
      { id: "s18", name: "Wagah Border", description: "Border crossing with a daily ceremonial parade.", entryFee: "Free" }
    ],
    hotels: [
      { id: "h11", name: "Taj Swarna", location: "Basant Avenue", pricePerNight: 9000, rating: 5 },
      { id: "h12", name: "Hyatt Regency", location: "GT Road", pricePerNight: 7500, rating: 4.5 }
    ]
  },
  {
    id: "14",
    name: "Rishikesh",
    state: "Uttarakhand",
    location: "Rishikesh, India",
    category: "Adventure",
    shortDesc: "Yoga capital of the world and hub for river rafting.",
    fullDesc: "Situated on the banks of the Ganges, Rishikesh is a spiritual town known for its numerous ashrams and yoga centers. It's also a premier destination for white-water rafting and trekking.",
    bestTime: "March to May and September to November",
    climate: "Temperate climate; pleasant throughout the year except peak winter.",
    travelTips: "Attend the evening Ganga Aarti at Triveni Ghat. Respect local customs as it's a holy town.",
    rating: 4.7,
    imageUrl: rishikeshImg,
    galleryImages: [rishikeshImg, ootyImg, munnarImg],
    pricePerPerson: 350,
    reviews: [],
    spots: [
      { id: "s19", name: "Laxman Jhula", description: "Iconic suspension bridge across the Ganges.", entryFee: "Free" },
      { id: "s20", name: "Triveni Ghat", description: "Main bathing ghat and site of evening aarti.", entryFee: "Free" },
      { id: "s21", name: "The Beatles Ashram", description: "Ruins of the ashram where the Beatles stayed.", entryFee: "₹150" }
    ],
    hotels: [
      { id: "h13", name: "Aloha on the Ganges", location: "Tapovan", pricePerNight: 12000, rating: 4.8 },
      { id: "h14", name: "Ananda in the Himalayas", location: "Narendra Nagar", pricePerNight: 45000, rating: 5 }
    ]
  },
  {
    id: "5",
    name: "Agra (Taj Mahal)",
    state: "Uttar Pradesh",
    location: "Agra, India",
    category: "Historical",
    shortDesc: "Home to the world-famous symbol of love, the Taj Mahal.",
    fullDesc: "Agra is a major tourist destination because of its many Mughal-era buildings, most notably the Taj Mahal, Agra Fort and Fatehpur Sikri, all three of which are UNESCO World Heritage Sites.",
    bestTime: "October to March (Pleasant weather for sightseeing)",
    climate: "Hot summers, chilly winters, and moderate monsoon.",
    travelTips: "Visit Taj Mahal at sunrise for the best views and fewer crowds. Wear comfortable walking shoes.",
    rating: 4.9,
    imageUrl: tajMahalImg,
    galleryImages: [tajMahalImg, jaipurImg, maduraiImg],
    pricePerPerson: 500,
    reviews: [],
    spots: [
      { id: "s1", name: "Taj Mahal", description: "Iconic white marble mausoleum.", entryFee: "₹50 (Indians), ₹1100 (Foreigners)" },
      { id: "s2", name: "Agra Fort", description: "Historic fort that was the main residence of Mughals.", entryFee: "₹40" },
      { id: "s3", name: "Mehtab Bagh", description: "Garden complex with a stunning view of the Taj.", entryFee: "₹25" }
    ],
    hotels: [
      { id: "h1", name: "Oberoi Amarvilas", location: "Near Taj East Gate", pricePerNight: 25000, rating: 5 },
      { id: "h2", name: "ITC Mughal", location: "Fatehabad Road", pricePerNight: 8000, rating: 4.5 }
    ]
  },
  {
    id: "8",
    name: "Goa",
    state: "Goa",
    location: "Goa, India",
    category: "Beach",
    shortDesc: "The ultimate beach destination with vibrant nightlife.",
    fullDesc: "Goa is India's smallest state and unlike any other, known for its endless beaches, stellar nightlife, and Portuguese-influenced architecture.",
    bestTime: "November to February (Perfect beach weather)",
    climate: "Tropical climate with high humidity throughout the year.",
    travelTips: "Rent a scooter to explore North and South Goa at your own pace.",
    rating: 4.6,
    imageUrl: goaImg,
    galleryImages: [goaImg, marinaBeachImg, baliImg],
    pricePerPerson: 450,
    reviews: [],
    spots: [
      { id: "s4", name: "Baga Beach", description: "Famous for water sports and nightlife.", entryFee: "Free" },
      { id: "s5", name: "Fort Aguada", description: "17th-century Portuguese fort.", entryFee: "Free" },
      { id: "s6", name: "Dudhsagar Falls", description: "Four-tiered waterfall on Mandovi River.", entryFee: "₹400 (Jeep Safari)" }
    ],
    hotels: [
      { id: "h3", name: "Taj Exotica", location: "Benaulim", pricePerNight: 15000, rating: 5 },
      { id: "h4", name: "Novotel Goa", location: "Candolim", pricePerNight: 7000, rating: 4 }
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
    bestTime: "October to March (Avoid the intense summer heat)",
    climate: "Hot and semi-arid with a distinct monsoon season.",
    travelTips: "Visit the temple early in the morning or for the night ceremony.",
    rating: 4.9,
    imageUrl: maduraiImg,
    galleryImages: [maduraiImg, mahabalipuramImg, tajMahalImg],
    pricePerPerson: 350,
    reviews: [],
    spots: [
      { id: "s7", name: "Meenakshi Temple", description: "Dravidian architecture masterpiece.", entryFee: "Free" },
      { id: "s8", name: "Thirumalai Nayakkar Palace", description: "17th-century palace complex.", entryFee: "₹10" },
      { id: "s9", name: "Gandhi Memorial Museum", description: "Museum dedicated to Mahatma Gandhi.", entryFee: "Free" }
    ],
    hotels: [
      { id: "h5", name: "Heritage Madurai", location: "Melakkal Main Road", pricePerNight: 6000, rating: 4.5 },
      { id: "h6", name: "The Gateway Hotel", location: "Pasumalai", pricePerNight: 5500, rating: 4 }
    ]
  },
  {
    id: "11",
    name: "Munnar",
    state: "Kerala",
    location: "Idukki, India",
    category: "Hill Station",
    shortDesc: "Emerald green tea plantations and rolling hills.",
    fullDesc: "Munnar is a breathtaking hill station in the Western Ghats of Kerala. It was once the summer resort of the British government in South India.",
    bestTime: "September to March",
    climate: "Cool and pleasant year-round with heavy rains in monsoon.",
    travelTips: "Carry a light jacket even in summer. Visit the Eravikulam National Park early.",
    rating: 4.8,
    imageUrl: munnarImg,
    galleryImages: [munnarImg, ootyImg, kodaikanalImg],
    pricePerPerson: 400,
    reviews: [],
    spots: [
      { id: "s10", name: "Eravikulam National Park", description: "Home to the Nilgiri Tahr.", entryFee: "₹120" },
      { id: "s11", name: "Tea Museum", description: "History of tea production in the region.", entryFee: "₹75" },
      { id: "s12", name: "Mattupetty Dam", description: "Beautiful lake and masonry gravity dam.", entryFee: "₹10" }
    ],
    hotels: [
      { id: "h7", name: "The Panoramic Getaway", location: "Chithirapuram", pricePerNight: 9000, rating: 5 },
      { id: "h8", name: "Tea County", location: "Munnar Town", pricePerNight: 6500, rating: 4.2 }
    ]
  },
  {
    id: "12",
    name: "Hampi",
    state: "Karnataka",
    location: "Vijayanagara, India",
    category: "Historical",
    shortDesc: "The forgotten empire of Vijayanagara ruins.",
    fullDesc: "Hampi is a UNESCO World Heritage site featuring the ruins of the medieval Vijayanagara Empire. It is a surreal landscape of boulders and ancient temples.",
    bestTime: "October to February",
    climate: "Tropical; hot summers and pleasant winters.",
    travelTips: "Rent a bicycle to explore the vast ruins. Cross the river to 'Hippie Island' for a different vibe.",
    rating: 4.9,
    imageUrl: hampiImg,
    galleryImages: [hampiImg, mahabalipuramImg, tajMahalImg],
    pricePerPerson: 300,
    reviews: [],
    spots: [
      { id: "s13", name: "Virupaksha Temple", description: "Functional 7th-century Hindu temple.", entryFee: "₹50" },
      { id: "s14", name: "Vittala Temple", description: "Stone chariot and musical pillars.", entryFee: "₹40" },
      { id: "s15", name: "Lotus Mahal", description: "Secular Indo-Islamic architecture.", entryFee: "Included in Hampi ticket" }
    ],
    hotels: [
      { id: "h9", name: "Evolve Back Hampi", location: "Kamalapura", pricePerNight: 30000, rating: 5 },
      { id: "h10", name: "Heritage Resort Hampi", location: "Hospet", pricePerNight: 7500, rating: 4.5 }
    ]
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
