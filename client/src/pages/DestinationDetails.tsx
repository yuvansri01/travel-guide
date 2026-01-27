import { useRoute, useLocation } from "wouter";
import { useState } from "react";
import { Star, MapPin, Calendar, Users, ArrowLeft, Send } from "lucide-react";
import { db } from "@/lib/mockData";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ReviewCard from "@/components/ui/review-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function DestinationDetails() {
  const [match, params] = useRoute("/destination/:id");
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const id = params?.id;
  const destination = id ? db.getDestination(id) : null;

  // Booking Form State
  const [bookingDate, setBookingDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  // Review Form State
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState("");
  const [reviewName, setReviewName] = useState("");

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h1 className="text-2xl font-bold">Destination not found</h1>
        <Button onClick={() => setLocation("/")}>Go Home</Button>
      </div>
    );
  }

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    db.addBooking({
      id: Math.random().toString(),
      destinationId: destination.id,
      userName,
      email,
      travelDate: new Date(bookingDate),
      persons: guests,
    });
    toast({
      title: "Booking Confirmed!",
      description: `You have successfully booked a trip to ${destination.name}.`,
    });
    setUserName("");
    setEmail("");
    setBookingDate("");
  };

  const handleReview = (e: React.FormEvent) => {
    e.preventDefault();
    db.addReview({
      id: Math.random().toString(),
      destinationId: destination.id,
      userName: reviewName,
      rating: reviewRating,
      comment: reviewComment,
      date: new Date().toISOString().split("T")[0],
    });
    toast({
      title: "Review Submitted",
      description: "Thank you for sharing your experience!",
    });
    setReviewName("");
    setReviewComment("");
    setReviewRating(5);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Header */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 p-8 container mx-auto">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/20 mb-6 pl-0 hover:pl-2 transition-all"
            onClick={() => setLocation("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Destinations
          </Button>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <Badge className="mb-4 bg-accent text-white border-none text-sm px-3 py-1">
                {destination.category}
              </Badge>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2">
                {destination.name}
              </h1>
              <div className="flex items-center gap-2 text-white/90 text-lg">
                <MapPin className="h-5 w-5" />
                <span>{destination.location}</span>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end">
               <div className="flex items-center gap-1 mb-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span className="text-xl font-bold text-white">{destination.rating}</span>
                <span className="text-white/70 text-sm">({destination.reviews.length} reviews)</span>
              </div>
              <p className="text-white/90 text-sm font-medium">
                Best time to visit: <span className="text-white">{destination.bestTime}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4">About this Destination</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {destination.description}
              </p>
            </section>

            <section>
              <div className="flex items-center justify-between mb-6">
                 <h2 className="text-2xl font-serif font-bold">Reviews</h2>
                 <Button variant="outline" size="sm">Sort by Recent</Button>
              </div>
              
              <div className="space-y-4">
                {destination.reviews.length > 0 ? (
                  destination.reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))
                ) : (
                  <p className="text-muted-foreground italic">No reviews yet. Be the first to review!</p>
                )}
              </div>

              {/* Add Review Form */}
              <div className="mt-10 bg-muted/30 p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold mb-4">Leave a Review</h3>
                <form onSubmit={handleReview} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="reviewName">Your Name</Label>
                      <Input 
                        id="reviewName" 
                        value={reviewName} 
                        onChange={(e) => setReviewName(e.target.value)} 
                        required 
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="rating">Rating (1-5)</Label>
                      <Input 
                        id="rating" 
                        type="number" 
                        min="1" 
                        max="5" 
                        value={reviewRating} 
                        onChange={(e) => setReviewRating(Number(e.target.value))} 
                        required 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="comment">Comment</Label>
                    <Textarea 
                      id="comment" 
                      value={reviewComment} 
                      onChange={(e) => setReviewComment(e.target.value)} 
                      required 
                      placeholder="Share your experience..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button type="submit">Submit Review</Button>
                </form>
              </div>
            </section>
          </div>

          {/* Sidebar Booking Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-lg border-none bg-card/50 backdrop-blur-sm">
              <CardHeader className="bg-primary text-primary-foreground rounded-t-xl p-6">
                <CardTitle className="flex justify-between items-center text-xl">
                  <span>Book your Trip</span>
                  <span className="text-2xl font-bold">${destination.pricePerPerson} <span className="text-sm font-normal opacity-80">/ person</span></span>
                </CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Reserve your spot now. No payment required today.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleBooking} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Travel Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="date" 
                        type="date" 
                        className="pl-10"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="guests">Guests</Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="guests" 
                        type="number" 
                        min="1" 
                        className="pl-10"
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Jane Smith"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="pt-4 space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Price x {guests} guests</span>
                      <span className="font-medium">${destination.pricePerPerson * guests}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Service fee</span>
                      <span className="font-medium">$50</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-4 border-t border-border">
                      <span>Total</span>
                      <span>${destination.pricePerPerson * guests + 50}</span>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white mt-4 h-12 text-lg shadow-md">
                    Confirm Booking
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    You won't be charged yet.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
