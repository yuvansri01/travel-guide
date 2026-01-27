import { useState, useMemo } from "react";
import { Search, MapPin, Filter } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DestinationCard from "@/components/destination/DestinationCard";
import { db } from "@/lib/mockData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImg from "@/assets/hero.jpg";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const destinations = db.getDestinations();

  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      const matchesSearch = 
        dest.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        dest.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === "all" || dest.category === categoryFilter;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, categoryFilter, destinations]);

  const recommendedDestinations = useMemo(() => {
    return [...destinations].sort((a, b) => b.rating - a.rating).slice(0, 3);
  }, [destinations]);

  return (
    <div className="min-h-screen flex flex-col bg-colorful-gradient">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImg} 
              alt="Beautiful landscape" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              Discover Your Next <br/>
              <span className="text-accent italic">Adventure</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Explore the world's most breathtaking destinations. From hidden gems to iconic landmarks, we help you find the perfect getaway.
            </p>

            {/* Search Box */}
            <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl max-w-3xl mx-auto border border-white/20 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 h-5 w-5" />
                  <input 
                    type="text" 
                    placeholder="Where do you want to go?" 
                    className="w-full h-12 pl-10 pr-4 rounded-xl bg-white/10 border-none text-white placeholder:text-white/60 focus:ring-2 focus:ring-accent focus:outline-none transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="w-full md:w-48">
                   <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="h-12 bg-white/10 border-none text-white focus:ring-accent focus:ring-2 rounded-xl">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="Beach">Beach</SelectItem>
                      <SelectItem value="Mountain">Mountain</SelectItem>
                      <SelectItem value="Historical">Historical</SelectItem>
                      <SelectItem value="City">City</SelectItem>
                      <SelectItem value="Nature">Nature</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button size="lg" className="h-12 px-8 rounded-xl bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured / Recommended Section */}
        {searchTerm === "" && categoryFilter === "all" && (
          <section className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">Top Recommendations</h2>
                  <p className="text-muted-foreground max-w-lg">
                    Curated selection of our highest-rated destinations loved by travelers worldwide.
                  </p>
                </div>
                <Button variant="link" className="text-primary font-semibold">
                  View All Recommendations &rarr;
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recommendedDestinations.map((dest) => (
                  <DestinationCard key={dest.id} destination={dest} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Destinations Section */}
        <section className="py-20 container mx-auto px-4" id="destinations">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-border flex-1" />
            <h2 className="text-3xl font-serif font-bold text-center">
              {searchTerm || categoryFilter !== "all" ? "Search Results" : "Explore Destinations"}
            </h2>
            <div className="h-px bg-border flex-1" />
          </div>

          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredDestinations.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No destinations found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
