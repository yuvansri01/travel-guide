
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
  userName: string;
  email: string;
  travelDate: Date;
  persons: number;
}

export interface Destination {
  id: string;
  name: string;
  location: string;
  category: "Beach" | "Mountain" | "Historical" | "City" | "Nature";
  description: string;
  bestTime: string;
  rating: number;
  imageUrl: string;
  pricePerPerson: number;
  reviews: Review[];
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

const MOCK_REVIEWS: Review[] = [
  { id: "1", destinationId: "1", userName: "Alice M.", rating: 5, comment: "Absolutely magical! The sunset was breathtaking.", date: "2023-10-15" },
  { id: "2", destinationId: "1", userName: "John D.", rating: 4, comment: "Beautiful but crowded.", date: "2023-09-20" },
  { id: "3", destinationId: "2", userName: "Sarah K.", rating: 5, comment: "Best spiritual experience of my life.", date: "2023-11-05" },
  { id: "4", destinationId: "5", userName: "Rajesh P.", rating: 5, comment: "The Taj Mahal is a true wonder. Surreal experience.", date: "2024-01-10" },
];

export const MOCK_DESTINATIONS: Destination[] = [
  {
    id: "13",
    name: "Kodaikanal",
    location: "Tamil Nadu, India",
    category: "Mountain",
    description: "The 'Princess of Hill Stations', Kodaikanal is a peaceful retreat in the Palani Hills. Known for its man-made lake, misty weather, and beautiful pine forests, it's a paradise for nature lovers.",
    bestTime: "April to June, September to October",
    rating: 4.8,
    imageUrl: kodaikanalImg,
    pricePerPerson: 500,
    reviews: []
  },
  {
    id: "14",
    name: "Marina Beach",
    location: "Chennai, India",
    category: "Beach",
    description: "The world's second-longest urban beach, Marina Beach is the soul of Chennai. It offers a wide sandy shoreline, vibrant local street food, and a spectacular view of the sunrise over the Bay of Bengal.",
    bestTime: "November to February",
    rating: 4.5,
    imageUrl: marinaBeachImg,
    pricePerPerson: 100,
    reviews: []
  },
  {
    id: "9",
    name: "Mahabalipuram",
    location: "Tamil Nadu, India",
    category: "Historical",
    description: "Famous for its Shore Temple and monolithic rock-cut monuments, Mahabalipuram is a UNESCO World Heritage site reflecting the architectural brilliance of the Pallava dynasty.",
    bestTime: "October to March",
    rating: 4.8,
    imageUrl: mahabalipuramImg,
    pricePerPerson: 400,
    reviews: []
  },
  {
    id: "10",
    name: "Madurai",
    location: "Tamil Nadu, India",
    category: "Historical",
    description: "One of the oldest continuously inhabited cities in the world, Madurai is centered around the spectacular Meenakshi Amman Temple, a masterpiece of Dravidian architecture.",
    bestTime: "October to March",
    rating: 4.9,
    imageUrl: maduraiImg,
    pricePerPerson: 350,
    reviews: []
  },
  {
    id: "11",
    name: "Ooty",
    location: "Tamil Nadu, India",
    category: "Mountain",
    description: "The 'Queen of Hill Stations', Ooty is nestled in the Nilgiri Hills. It's famous for its tea plantations, toy train, and cool, misty climate.",
    bestTime: "March to June, October to December",
    rating: 4.7,
    imageUrl: ootyImg,
    pricePerPerson: 550,
    reviews: []
  },
  {
    id: "12",
    name: "Kanyakumari",
    location: "Tamil Nadu, India",
    category: "Beach",
    description: "The southernmost tip of mainland India, where the Arabian Sea, the Bay of Bengal, and the Indian Ocean meet. Famous for its sunrise, sunset, and the Vivekananda Rock Memorial.",
    bestTime: "October to March",
    rating: 4.6,
    imageUrl: kanyakumariImg,
    pricePerPerson: 450,
    reviews: []
  },
  {
    id: "5",
    name: "Agra",
    location: "India",
    category: "Historical",
    description: "Home to the iconic Taj Mahal, Agra is a city rich in Mughal heritage. The white marble mausoleum built by Shah Jahan for his wife Mumtaz Mahal is a UNESCO World Heritage site and a symbol of eternal love.",
    bestTime: "October to March",
    rating: 4.9,
    imageUrl: tajMahalImg,
    pricePerPerson: 500,
    reviews: MOCK_REVIEWS.filter(r => r.destinationId === "5")
  },
  {
    id: "6",
    name: "Kerala",
    location: "India",
    category: "Nature",
    description: "Known as 'God's Own Country', Kerala is famous for its serene backwaters, lush green hills, and vibrant culture. A houseboat cruise through the Alleppey backwaters is a quintessential Indian travel experience.",
    bestTime: "September to March",
    rating: 4.8,
    imageUrl: keralaImg,
    pricePerPerson: 700,
    reviews: []
  }
];

// Simple in-memory store simulation
class Store {
  destinations: Destination[] = [...MOCK_DESTINATIONS];
  bookings: Booking[] = [];

  getDestinations() {
    return this.destinations;
  }

  getDestination(id: string) {
    return this.destinations.find(d => d.id === id);
  }

  addBooking(booking: Booking) {
    this.bookings.push(booking);
    console.log("New booking added:", booking);
    return true;
  }

  addReview(review: Review) {
    const dest = this.destinations.find(d => d.id === review.destinationId);
    if (dest) {
      dest.reviews.unshift(review);
      // Recalculate rating
      const total = dest.reviews.reduce((acc, r) => acc + r.rating, 0);
      dest.rating = parseFloat((total / dest.reviews.length).toFixed(1));
      return true;
    }
    return false;
  }
}

export const db = new Store();
