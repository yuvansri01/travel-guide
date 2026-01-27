import { Link } from "wouter";
import { MapPin, Star, Clock } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Destination } from "@/lib/mockData";
import { cn } from "@/lib/utils";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Card className="group overflow-hidden border-none glass-effect hover:-translate-y-2 transition-all duration-500 h-full flex flex-col rounded-3xl">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/30">
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
          <span className="text-xs font-bold text-white">{destination.rating}</span>
        </div>
        
        <Badge className="absolute top-4 left-4 bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-wider font-bold">
          {destination.category}
        </Badge>

        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="font-serif text-2xl font-bold leading-tight drop-shadow-md">
            {destination.name}
          </h3>
          <div className="flex items-center gap-1 mt-1 opacity-90">
            <MapPin className="w-3 h-3 text-accent" />
            <span className="text-xs font-medium">{destination.location}</span>
          </div>
        </div>
      </div>

      <CardContent className="p-6 flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed font-light">
          {destination.shortDesc}
        </p>
        
        <div className="flex items-center gap-2 mt-4 text-[10px] text-primary font-bold bg-primary/5 px-3 py-1.5 rounded-full w-fit border border-primary/10">
          <Clock className="w-3 h-3" />
          <span>BEST TIME: {destination.bestTime.toUpperCase()}</span>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">From</span>
          <span className="text-xl font-bold text-primary">₹{destination.pricePerPerson}</span>
        </div>
        <Link 
          href={`/destination/${destination.id}`} 
          className={cn(
            buttonVariants({ variant: "default" }), 
            "rounded-full px-6 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all active:scale-95"
          )}
        >
          Explore
        </Link>
      </CardFooter>
    </Card>
  );
}
