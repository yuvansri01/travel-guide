import { Star, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Review } from "@/lib/mockData";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
      <Avatar className="h-10 w-10 border border-border">
        <AvatarFallback className="bg-primary/10 text-primary font-bold">
          {review.userName.charAt(0)}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-sm">{review.userName}</h4>
          <span className="text-xs text-muted-foreground">{review.date}</span>
        </div>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < review.rating
                  ? "text-yellow-500 fill-yellow-500"
                  : "text-muted-foreground/30"
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          "{review.comment}"
        </p>
      </div>
    </div>
  );
}
