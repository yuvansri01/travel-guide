
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate sending email/subscription
    console.log(`Subscribing ${email} to Wanderlust newsletter`);
    
    toast({
      title: "Subscription Successful!",
      description: "Welcome to Wanderlust! We've sent a welcome guide to your email.",
    });
    
    setEmail("");
  };

  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-foreground">Wanderlust</h3>
            <p className="text-sm text-muted-foreground">
              Discover the world's most breathtaking destinations. We help you find the perfect place for your next adventure.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Featured</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Deals</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Subscribe for travel tips and exclusive offers.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-10 rounded-xl border border-input bg-white/50 backdrop-blur-sm px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
              <button 
                type="submit"
                className="h-10 px-4 py-2 bg-primary text-primary-foreground shadow-lg shadow-primary/20 inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold transition-all hover:bg-primary/90 active:scale-95"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Wanderlust Travel Guide. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
