import Image from "next/image";
import Link from "next/link";
import { ServiceNowHeader } from "@/components/servicenow-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageSquare, Star, ThumbsUp } from "lucide-react";
// Remote image URLs for food items
const CHICKEN_TIKKA_URL =
  "https://www.recipetineats.com/tachyon/2018/04/Chicken-Tikka-Masala_0-SQ.jpg";
const VEGETABLE_STIR_FRY_URL =
  "https://natashaskitchen.com/wp-content/uploads/2020/08/Vegetable-Stir-Fry-SQ.jpg";
const FRUIT_PLATTER_URL =
  "https://hungryhealthyhappy.com/wp-content/uploads/2022/12/fruit-platter-featured.jpg";
const BURRITO_BOWL_URL =
  "https://www.simplysissom.com/wp-content/uploads/2019/07/Healthy-Burrito-Bowls-With-Cilantro-Lime-Dressing-FI-1.jpg";
const YOGURT_PARFAIT_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp7yvt3cpCxFBJ_hWtwj0AgpmdujUMZg7Y_g&s";
const QUINOA_SALAD_URL =
  "https://cdn.loveandlemons.com/wp-content/uploads/2020/08/quinoa-salad.jpg";

export default async function FoodDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const resolvedParams = await params;

  // Food data mapping based on ID
  const foodData: Record<string, any> = {
    "1": {
      name: "Chicken Tikka Masala",
      category: "Lunch",
      rating: 4.8,
      reviews: 24,
      description:
        "Tender chicken in a rich and creamy tomato sauce with aromatic spices. Served with basmati rice and naan bread.",
      image: CHICKEN_TIKKA_URL,
      nutritionalInfo: {
        calories: 450,
        protein: "32g",
        carbs: "48g",
        fat: "18g",
      },
    },
    "2": {
      name: "Vegetable Stir Fry",
      category: "Lunch",
      rating: 4.6,
      reviews: 18,
      description:
        "Fresh seasonal vegetables stir-fried with aromatic herbs and spices. A colorful and nutritious meal with baby corn, broccoli, bell peppers, and mushrooms.",
      image: VEGETABLE_STIR_FRY_URL,
      nutritionalInfo: {
        calories: 320,
        protein: "15g",
        carbs: "42g",
        fat: "12g",
      },
    },
    "3": {
      name: "Fresh Fruit Platter",
      category: "Snack",
      rating: 4.5,
      reviews: 15,
      description:
        "A beautiful arrangement of seasonal fresh fruits, artisanal cheeses, and mixed nuts. Perfect for a healthy snack or light meal.",
      image: FRUIT_PLATTER_URL,
      nutritionalInfo: {
        calories: 180,
        protein: "2g",
        carbs: "45g",
        fat: "0g",
      },
    },
    "4": {
      name: "Beef Burrito Bowl",
      category: "Lunch",
      rating: 4.4,
      reviews: 22,
      description:
        "Seasoned ground beef served over cilantro-lime rice with black beans, corn salsa, guacamole, cheese, and sour cream.",
      image: BURRITO_BOWL_URL,
      nutritionalInfo: {
        calories: 520,
        protein: "35g",
        carbs: "55g",
        fat: "22g",
      },
    },
    "5": {
      name: "Greek Yogurt Parfait",
      category: "Breakfast",
      rating: 4.3,
      reviews: 19,
      description:
        "Layers of creamy Greek yogurt, fresh berries, granola, and honey. A perfect protein-rich breakfast option.",
      image: YOGURT_PARFAIT_URL,
      nutritionalInfo: {
        calories: 280,
        protein: "18g",
        carbs: "32g",
        fat: "8g",
      },
    },
    "6": {
      name: "Quinoa Salad",
      category: "Lunch",
      rating: 4.2,
      reviews: 7,
      description:
        "Nutritious quinoa mixed with fresh cucumber, cherry tomatoes, roasted chickpeas, herbs, and a light lemon vinaigrette.",
      image: QUINOA_SALAD_URL,
      nutritionalInfo: {
        calories: 350,
        protein: "12g",
        carbs: "48g",
        fat: "14g",
      },
    },
  };

  // Get food item based on ID, fallback to chicken tikka
  const selectedFood = foodData[resolvedParams.id] || foodData["1"];

  const foodItem = {
    id: resolvedParams.id,
    ...selectedFood,
    userReviews: [
      {
        user: "Alex Johnson",
        avatar: "/placeholder-user.jpg",
        date: "June 18, 2025",
        rating: 5,
        comment:
          "Absolutely delicious! The chicken was tender and the sauce had the perfect balance of spices. Would definitely recommend!",
        likes: 12,
      },
      {
        user: "Sam Taylor",
        avatar: "/placeholder-user.jpg",
        date: "June 15, 2025",
        rating: 4,
        comment:
          "Really good flavor, but I wish the portion was a bit larger. The naan bread was fresh and perfect for dipping.",
        likes: 8,
      },
      {
        user: "Jordan Lee",
        avatar: "/placeholder-user.jpg",
        date: "June 10, 2025",
        rating: 5,
        comment:
          "One of the best dishes in the cafeteria! I get this at least once a week. The spice level is perfect.",
        likes: 15,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceNowHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="ghost" asChild className="pl-0">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all foods
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src={foodItem.image || "/placeholder.svg"}
              alt={foodItem.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-[#81b5a1]">{foodItem.category}</Badge>
              <div className="flex items-center text-sm">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                <span className="font-medium">
                  {foodItem.rating.toFixed(1)}
                </span>
                <span className="text-muted-foreground ml-1">
                  ({foodItem.reviews}{" "}
                  {foodItem.reviews === 1 ? "review" : "reviews"})
                </span>
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-4">{foodItem.name}</h1>

            <p className="text-gray-700 mb-6">{foodItem.description}</p>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">
                Nutritional Information
              </h2>
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                  <p className="text-sm text-muted-foreground">Calories</p>
                  <p className="font-semibold">
                    {foodItem.nutritionalInfo.calories}
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                  <p className="text-sm text-muted-foreground">Protein</p>
                  <p className="font-semibold">
                    {foodItem.nutritionalInfo.protein}
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                  <p className="text-sm text-muted-foreground">Carbs</p>
                  <p className="font-semibold">
                    {foodItem.nutritionalInfo.carbs}
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                  <p className="text-sm text-muted-foreground">Fat</p>
                  <p className="font-semibold">
                    {foodItem.nutritionalInfo.fat}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-[#0b7cce] hover:bg-[#0b7cce]/90">
                <MessageSquare className="mr-2 h-4 w-4" />
                Write a Review
              </Button>
              <Button
                variant="outline"
                className="bg-white text-[#0b7cce] border-[#0b7cce]"
              >
                Add to Favorites
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">My Reviews</h2>

          <div className="space-y-6">
            {foodItem.userReviews.map((review: any, index: number) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage
                          src={review.avatar || "/placeholder.svg"}
                          alt={review.user}
                        />
                        <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{review.user}</p>
                        <p className="text-sm text-muted-foreground">
                          {review.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center bg-[#81b5a1]/10 px-2 py-1 rounded-md">
                      <Star className="h-4 w-4 text-[#81b5a1] mr-1 fill-[#81b5a1]" />
                      <span className="text-sm font-medium">
                        {review.rating}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4">{review.comment}</p>

                  <div className="mt-4 flex items-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground"
                    >
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      Helpful ({review.likes})
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
