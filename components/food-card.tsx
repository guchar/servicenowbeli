import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import type { StaticImageData } from "next/image";

interface FoodCardProps {
  name: string;
  category: string;
  rating: number;
  reviews: number;
  image: string | StaticImageData;
  id: string;
  isNew?: boolean;
}

export function FoodCard({
  name,
  category,
  rating,
  reviews,
  image,
  id,
  isNew = false,
}: FoodCardProps) {
  return (
    <Link href={`/food/${id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <div className="relative h-48">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover"
          />
          {isNew && (
            <Badge className="absolute top-2 right-2 bg-[#0b7cce]">New</Badge>
          )}
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-sm text-muted-foreground">{category}</p>
            </div>
            <div className="flex items-center bg-[#81b5a1]/10 px-2 py-1 rounded-md">
              <Star className="h-4 w-4 text-[#81b5a1] mr-1 fill-[#81b5a1]" />
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 text-sm text-muted-foreground">
          {reviews} {reviews === 1 ? "review" : "reviews"}
        </CardFooter>
      </Card>
    </Link>
  );
}
