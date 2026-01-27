
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

export const MOCK_DESTINATIONS: Destination[] = [
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
