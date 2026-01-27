import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Compass, Shield, Heart, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-center">Our Story</h1>
            <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto opacity-90 font-light">
              Wanderlust was born out of a simple passion: to help travelers discover the hidden gems of the Indian subcontinent.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold">Bridging Cultures Through Travel</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that travel is more than just visiting a new place; it's about the stories we bring back and the connections we make. Our team of local experts works tirelessly to curate experiences that are authentic, sustainable, and unforgettable.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-bold text-primary">50+</h4>
                  <p className="text-muted-foreground">Destinations</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-primary">10k+</h4>
                  <p className="text-muted-foreground">Happy Travelers</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover" 
                  alt="About Wanderlust" 
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-accent text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-2xl font-serif italic">"Travel is the only thing you buy that makes you richer."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-bold mb-16 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Compass, title: "Authenticity", desc: "We provide genuine experiences that showcase the true essence of local culture." },
                { icon: Shield, title: "Safety First", desc: "Your security is our top priority, with vetted partners and 24/7 support." },
                { icon: Heart, title: "Sustainability", desc: "We promote eco-friendly travel to preserve our planet's beautiful destinations." },
                { icon: Globe, title: "Inclusivity", desc: "Travel is for everyone. We create accessible and welcoming journeys for all." }
              ].map((value, idx) => (
                <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-card">
                  <CardContent className="pt-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <value.icon className="text-primary w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
