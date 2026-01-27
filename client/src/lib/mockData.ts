
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

const MOCK_REVIEWS: Review[] = [
  { id: "1", destinationId: "1", userName: "Alice M.", rating: 5, comment: "Absolutely magical! The sunset was breathtaking.", date: "2023-10-15" },
  { id: "2", destinationId: "1", userName: "John D.", rating: 4, comment: "Beautiful but crowded.", date: "2023-09-20" },
  { id: "3", destinationId: "2", userName: "Sarah K.", rating: 5, comment: "Best spiritual experience of my life.", date: "2023-11-05" },
];

export const MOCK_DESTINATIONS: Destination[] = [
  {
    id: "1",
    name: "Santorini",
    location: "Greece",
    category: "Beach",
    description: "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater).",
    bestTime: "April to October",
    rating: 4.8,
    imageUrl: santoriniImg,
    pricePerPerson: 1200,
    reviews: MOCK_REVIEWS.filter(r => r.destinationId === "1")
  },
  {
    id: "2",
    name: "Bali",
    location: "Indonesia",
    category: "Nature",
    description: "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple. To the south, the beachside city of Kuta has lively bars, while Seminyak, Sanur and Nusa Dua are popular resort towns.",
    bestTime: "May to September",
    rating: 4.7,
    imageUrl: baliImg,
    pricePerPerson: 800,
    reviews: MOCK_REVIEWS.filter(r => r.destinationId === "2")
  },
  {
    id: "3",
    name: "Kyoto",
    location: "Japan",
    category: "Historical",
    description: "Kyoto, once the capital of Japan, is a city on the island of Honshu. It's famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses. It’s also known for formal traditions such as kaiseki dining, consisting of multiple courses of precise dishes, and geisha.",
    bestTime: "March to May, October to November",
    rating: 4.9,
    imageUrl: kyotoImg,
    pricePerPerson: 1500,
    reviews: []
  },
  {
    id: "4",
    name: "Paris",
    location: "France",
    category: "City",
    description: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.",
    bestTime: "June to August",
    rating: 4.6,
    imageUrl: parisImg,
    pricePerPerson: 1100,
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
