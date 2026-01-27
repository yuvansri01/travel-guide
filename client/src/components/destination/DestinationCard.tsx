import { Link } from "wouter";
import { MapPin, Star, Clock } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button"; // Import variants
import { Destination } from "@/lib/mockData";
import { cn } from "@/lib/utils"; // Import cn utility

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Card className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col bg-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
          <span className="text-xs font-bold text-foreground">{destination.rating}</span>
        </div>
        <Badge className="absolute top-4 left-4 bg-primary/90 hover:bg-primary text-white border-none backdrop-blur-sm">
          {destination.category}
        </Badge>
      </div>

      <CardHeader className="p-5 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {destination.name}
            </h3>
            <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
              <MapPin className="w-3 h-3" />
              <span>{destination.location}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-5 pt-2 flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
          {destination.description}
        </p>
        
        <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground font-medium bg-muted/50 p-2 rounded-lg w-fit">
          <Clock className="w-3 h-3" />
          <span>Best time: {destination.bestTime}</span>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0 flex items-center justify-between border-t border-border/50 mt-auto pt-4">
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Starting from</span>
          <span className="text-lg font-bold text-primary">${destination.pricePerPerson}</span>
        </div>
        <Link 
          href={`/destination/${destination.id}`} 
          className={cn(buttonVariants({ variant: "default" }), "bg-foreground text-white hover:bg-primary transition-colors")}
        >
          Explore
        </Link>
      </CardFooter>
    </Card>
  );
}
