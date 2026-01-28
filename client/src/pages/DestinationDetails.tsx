import { useLocation } from "wouter";
import { useState } from "react";
import { Star, MapPin, Calendar, Users, ArrowLeft, Hotel, Ticket, Info, History, X } from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export default function DestinationDetails({ params }: { params: { id: string } }) {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const id = params?.id;
  const destination = id ? db.getDestination(id) : null;

  // Booking Form State
  const [selectedHotel, setSelectedHotel] = useState<string>("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  // Review Form State
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState("");
  const [reviewName, setReviewName] = useState("");

  const [selectedSpot, setSelectedSpot] = useState<any>(null);

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
      hotelId: selectedHotel,
      userName,
      email,
      checkIn,
      checkOut,
      persons: guests,
    });
    toast({
      title: "Hotel Booked!",
      description: `Your stay at ${destination.hotels.find(h => h.id === selectedHotel)?.name} is confirmed.`,
    });
    setUserName("");
    setEmail("");
    setSelectedHotel("");
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
      <div className="relative h-[60vh] min-h-[500px]">
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
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Explorations
          </Button>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="flex gap-2">
                <Badge className="bg-accent text-white border-none">{destination.state}</Badge>
                <Badge className="bg-primary/80 text-white border-none">{destination.category}</Badge>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
                {destination.name}
              </h1>
              <div className="flex items-center gap-2 text-white/90 text-lg">
                <MapPin className="h-5 w-5 text-accent" />
                <span>{destination.location}</span>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end">
               <div className="flex items-center gap-1 mb-2 bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full border border-white/30">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <span className="text-2xl font-bold text-white">{destination.rating}</span>
                <span className="text-white/70 text-sm ml-1">({destination.reviews.length} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-muted/30 border-none shadow-none">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <Calendar className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-bold mb-1">Best Time</h4>
                  <p className="text-sm text-muted-foreground">{destination.bestTime}</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/30 border-none shadow-none">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <Info className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-bold mb-1">Climate</h4>
                  <p className="text-sm text-muted-foreground">{destination.climate}</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/30 border-none shadow-none">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <History className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-bold mb-1">Travel Tips</h4>
                  <p className="text-sm text-muted-foreground">{destination.travelTips}</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="about" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none h-auto bg-transparent p-0 gap-8 mb-8">
                <TabsTrigger value="about" className="border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0 py-4 text-base font-serif">About</TabsTrigger>
                <TabsTrigger value="spots" className="border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0 py-4 text-base font-serif">Major Spots</TabsTrigger>
                <TabsTrigger value="gallery" className="border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0 py-4 text-base font-serif">Gallery</TabsTrigger>
                <TabsTrigger value="reviews" className="border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0 py-4 text-base font-serif">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                <h2 className="text-3xl font-serif font-bold">Discover {destination.name}</h2>
                <p className="text-muted-foreground leading-relaxed text-xl font-light">
                  {destination.fullDesc}
                </p>
                <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                  <h4 className="font-bold text-primary mb-2 italic">Expert Tip</h4>
                  <p className="text-muted-foreground italic">"{destination.travelTips}"</p>
                </div>
              </TabsContent>

              <TabsContent value="spots" className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                <div className="grid gap-6">
                  {destination.spots.map((spot) => (
                    <Card key={spot.id} className="overflow-hidden border-border/50 hover:border-primary/50 transition-colors">
                      <div className="p-6 flex flex-col md:flex-row gap-6">
                        <div className="flex-1 space-y-2">
                          <h4 className="text-xl font-bold font-serif">{spot.name}</h4>
                          <p className="text-muted-foreground">{spot.description}</p>
                          <div className="flex items-center gap-2 pt-2">
                            <Ticket className="h-4 w-4 text-accent" />
                            <span className="text-sm font-medium">Entry: {spot.entryFee}</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          {(spot as any).details && (
                            <Button 
                              variant="default"
                              onClick={() => setSelectedSpot(spot)}
                            >
                              View Details
                            </Button>
                          )}
                          <Button 
                            variant="outline" 
                            className="h-fit"
                            onClick={() => {
                              const query = encodeURIComponent(`${spot.name}, ${destination.name}, ${destination.state}`);
                              window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank");
                            }}
                          >
                            Show on Map
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Spot Details Dialog/Popup */}
                {selectedSpot && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
                    <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-2xl">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute right-4 top-4 z-10 rounded-full bg-white/20 hover:bg-white/40"
                        onClick={() => setSelectedSpot(null)}
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                      </Button>
                      
                      <div className="p-0">
                        {selectedSpot.details?.images && (
                          <div className="grid grid-cols-2 h-48 md:h-64">
                            {selectedSpot.details.images.map((img: string, i: number) => (
                              <img key={i} src={img} className="w-full h-full object-cover" alt={selectedSpot.name} />
                            ))}
                          </div>
                        )}
                        <div className="p-8 space-y-6">
                          <div>
                            <h3 className="text-3xl font-serif font-bold mb-2">{selectedSpot.name}</h3>
                            <p className="text-muted-foreground leading-relaxed">{selectedSpot.details?.history || selectedSpot.description}</p>
                          </div>

                          {selectedSpot.details?.highlights && (
                            <div className="space-y-3">
                              <h4 className="font-bold text-primary flex items-center gap-2">
                                <Info className="h-4 w-4" /> Highlights
                              </h4>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {selectedSpot.details.highlights.map((h: string, i: number) => (
                                  <li key={i} className="text-sm flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                                    {h}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {selectedSpot.details?.reviews && (
                            <div className="space-y-4 pt-4 border-t">
                              <h4 className="font-bold flex items-center gap-2">
                                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" /> Recent Reviews
                              </h4>
                              <div className="space-y-3">
                                {selectedSpot.details.reviews.map((rev: any) => (
                                  <div key={rev.id} className="bg-muted/30 p-4 rounded-xl space-y-2">
                                    <div className="flex justify-between items-center">
                                      <span className="font-bold text-sm">{rev.user}</span>
                                      <div className="flex gap-0.5">
                                        {[...Array(rev.rating)].map((_, i) => (
                                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                        ))}
                                      </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground italic">"{rev.text}"</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          <Button className="w-full h-12 rounded-xl font-bold" onClick={() => setSelectedSpot(null)}>
                            Close Details
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="gallery" className="animate-in fade-in slide-in-from-bottom-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {destination.galleryImages.map((img, idx) => (
                    <div key={idx} className="aspect-square rounded-xl overflow-hidden group">
                      <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Gallery" />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                <div className="space-y-4">
                  {destination.reviews.length > 0 ? (
                    destination.reviews.map((review) => (
                      <ReviewCard key={review.id} review={review} />
                    ))
                  ) : (
                    <div className="text-center py-12 bg-muted/20 rounded-2xl border-2 border-dashed border-border">
                      <p className="text-muted-foreground italic">Be the first to share your experience!</p>
                    </div>
                  )}
                </div>

                <Card className="border-none shadow-none bg-muted/30">
                  <CardHeader>
                    <CardTitle className="font-serif">Write a Review</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleReview} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Your Name</Label>
                          <Input value={reviewName} onChange={(e) => setReviewName(e.target.value)} required />
                        </div>
                        <div className="space-y-2">
                          <Label>Rating</Label>
                          <select className="w-full h-9 rounded-md border border-input bg-background px-3" value={reviewRating} onChange={(e) => setReviewRating(Number(e.target.value))}>
                            {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} Stars</option>)}
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Comment</Label>
                        <Textarea value={reviewComment} onChange={(e) => setReviewComment(e.target.value)} required placeholder="Tell us about your trip..." />
                      </div>
                      <Button type="submit" className="w-full md:w-auto">Submit Review</Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <Card className="border-none shadow-2xl bg-card">
                <CardHeader className="bg-primary text-primary-foreground rounded-t-xl py-8 text-center">
                  <Hotel className="h-10 w-10 mx-auto mb-4 opacity-80" />
                  <CardTitle className="text-3xl font-serif">Stay in {destination.name}</CardTitle>
                  <CardDescription className="text-primary-foreground/70">Find and book your perfect hotel stay</CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleBooking} className="space-y-6">
                    <div className="space-y-2">
                      <Label>Select Hotel</Label>
                      <div className="grid gap-3">
                        {destination.hotels.map((hotel) => (
                          <div 
                            key={hotel.id}
                            onClick={() => setSelectedHotel(hotel.id)}
                            className={cn(
                              "p-4 rounded-xl border-2 cursor-pointer transition-all",
                              selectedHotel === hotel.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                            )}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h5 className="font-bold">{hotel.name}</h5>
                                <p className="text-xs text-muted-foreground">{hotel.location}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-bold text-primary">₹{hotel.pricePerNight}</p>
                                <div className="flex items-center justify-end gap-1 text-[10px] text-yellow-600 font-bold">
                                  <Star className="h-2 w-2 fill-yellow-600" />
                                  {hotel.rating}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Check-In</Label>
                        <Input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
                      </div>
                      <div className="space-y-2">
                        <Label>Check-Out</Label>
                        <Input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Guests</Label>
                      <Input type="number" min="1" value={guests} onChange={(e) => setGuests(Number(e.target.value))} required />
                    </div>

                    <div className="space-y-2">
                      <Label>Full Name</Label>
                      <Input placeholder="John Doe" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                    </div>

                    <Button type="submit" disabled={!selectedHotel} className="w-full h-14 text-lg bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20 rounded-xl font-bold">
                      Confirm Hotel Booking
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">Free cancellation up to 24h before stay</p>
                  </form>
                </CardContent>
              </Card>

              <div className="p-6 bg-accent/5 rounded-2xl border border-accent/10 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h5 className="font-bold text-sm">Need a Custom Tour?</h5>
                  <p className="text-xs text-muted-foreground underline cursor-pointer">Chat with our local experts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
