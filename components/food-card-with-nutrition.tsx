import Link from "next/link";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";
import { FriendAvatars } from "@/components/friend-avatars";

interface NutritionalInfo {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
}

interface FoodCardWithNutritionProps {
  name: string;
  category: string;
  rating: number;
  reviews: number;
  image: string | StaticImageData;
  id: string;
  nutritionalInfo: NutritionalInfo;
  isNew?: boolean;
  friends?: Array<{
    id: string;
    name: string;
    avatar: string;
    rating: number;
  }>;
}

export function FoodCardWithNutrition({
  name,
  category,
  rating,
  reviews,
  image,
  id,
  nutritionalInfo,
  isNew = false,
  friends = [],
}: FoodCardWithNutritionProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md h-full flex flex-col">
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
      <CardContent className="p-4 flex-grow">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-muted-foreground">{category}</p>
          </div>
          <div className="flex items-center bg-[#81b5a1]/10 px-2 py-1 rounded-md">
            <Star className="h-4 w-4 text-[#81b5a1] mr-1 fill-[#81b5a1]" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>

        <div className="mt-2">
          <h4 className="text-sm font-medium mb-2">Nutritional Info</h4>
          <div className="grid grid-cols-4 gap-2 text-xs">
            <div className="bg-gray-100 p-2 rounded text-center">
              <div className="font-medium">{nutritionalInfo.calories}</div>
              <div className="text-muted-foreground">Cal</div>
            </div>
            <div className="bg-gray-100 p-2 rounded text-center">
              <div className="font-medium">{nutritionalInfo.protein}</div>
              <div className="text-muted-foreground">Protein</div>
            </div>
            <div className="bg-gray-100 p-2 rounded text-center">
              <div className="font-medium">{nutritionalInfo.carbs}</div>
              <div className="text-muted-foreground">Carbs</div>
            </div>
            <div className="bg-gray-100 p-2 rounded text-center">
              <div className="font-medium">{nutritionalInfo.fat}</div>
              <div className="text-muted-foreground">Fat</div>
            </div>
          </div>
        </div>

        {friends.length > 0 && (
          <div className="mt-4">
            <p className="text-xs text-muted-foreground mb-1">
              Friends who tried this:
            </p>
            <FriendAvatars friends={friends} />
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col gap-3 border-t mt-auto">
        <div className="text-sm text-muted-foreground w-full">
          {reviews} {reviews === 1 ? "review" : "reviews"}
        </div>
        <div className="w-full">
          <Link href="https://cafeapp.servicenow.com" target="_blank">
            <Button className="w-full bg-[#0b7cce] hover:bg-[#0b7cce]/90">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Order Now
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
