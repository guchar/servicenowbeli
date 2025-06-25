import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceNowHeader } from "@/components/servicenow-header";
import { LocationMealSection } from "@/components/location-meal-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SocialFeed } from "@/components/social-feed";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Remote image URLs for meals
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

export default function Home() {
  // This would normally come from an API or database
  const todaysDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const connectionCafeMeals = [
    {
      id: "1",
      name: "Chicken Tikka Masala",
      category: "Lunch",
      rating: 4.8,
      reviews: 24,
      image: CHICKEN_TIKKA_URL,
      nutritionalInfo: {
        calories: 450,
        protein: "32g",
        carbs: "48g",
        fat: "18g",
      },
      friends: [
        {
          id: "1",
          name: "Alex Johnson",
          avatar:
            "https://t4.ftcdn.net/jpg/04/80/05/77/360_F_480057743_J7wTBWRW3vABPnqEv2IwSVVXjj50xevN.jpg",
          rating: 5,
        },
        {
          id: "2",
          name: "Sam Taylor",
          avatar:
            "https://media.istockphoto.com/id/1450340623/photo/portrait-of-successful-mature-boss-senior-businessman-in-glasses-asian-looking-at-camera-and.jpg?s=612x612&w=0&k=20&c=f0EqWiUuID5VB_NxBUEDn92W2HLENR15CFFPzr-I4XE=",
          rating: 4,
        },
        {
          id: "3",
          name: "Jordan Lee",
          avatar:
            "https://t3.ftcdn.net/jpg/00/14/82/18/360_F_14821833_GovIKgFi4F7E9hO369DuSoS1S30k1Hf7.jpg",
          rating: 5,
        },
        {
          id: "4",
          name: "Casey Kim",
          avatar: "/placeholder-user.jpg",
          rating: 4,
        },
        {
          id: "5",
          name: "Taylor Morgan",
          avatar: "/placeholder-user.jpg",
          rating: 5,
        },
        {
          id: "6",
          name: "Jamie Smith",
          avatar: "/placeholder-user.jpg",
          rating: 4,
        },
      ],
    },
    {
      id: "2",
      name: "Vegetable Stir Fry",
      category: "Lunch",
      rating: 4.6,
      reviews: 18,
      image: VEGETABLE_STIR_FRY_URL,
      nutritionalInfo: {
        calories: 320,
        protein: "15g",
        carbs: "42g",
        fat: "12g",
      },
      friends: [
        {
          id: "3",
          name: "Jordan Lee",
          avatar: "/placeholder-user.jpg",
          rating: 5,
        },
        {
          id: "5",
          name: "Taylor Morgan",
          avatar: "/placeholder-user.jpg",
          rating: 4,
        },
      ],
    },
    {
      id: "3",
      name: "Fresh Fruit Platter",
      category: "Snack",
      rating: 4.5,
      reviews: 15,
      image: FRUIT_PLATTER_URL,
      nutritionalInfo: {
        calories: 180,
        protein: "2g",
        carbs: "45g",
        fat: "0g",
      },
      friends: [
        {
          id: "1",
          name: "Alex Johnson",
          avatar: "/placeholder-user.jpg",
          rating: 4,
        },
        {
          id: "2",
          name: "Sam Taylor",
          avatar: "/placeholder-user.jpg",
          rating: 5,
        },
        {
          id: "4",
          name: "Casey Kim",
          avatar: "/placeholder-user.jpg",
          rating: 4,
        },
      ],
    },
  ];

  const galleyKitchenMeals = [
    {
      id: "4",
      name: "Beef Burrito Bowl",
      category: "Lunch",
      rating: 4.4,
      reviews: 22,
      image: BURRITO_BOWL_URL,
      nutritionalInfo: {
        calories: 520,
        protein: "35g",
        carbs: "55g",
        fat: "22g",
      },
      friends: [
        {
          id: "2",
          name: "Sam Taylor",
          avatar: "/placeholder-user.jpg",
          rating: 4,
        },
        {
          id: "6",
          name: "Jamie Smith",
          avatar: "/placeholder-user.jpg",
          rating: 5,
        },
      ],
    },
    {
      id: "5",
      name: "Greek Yogurt Parfait",
      category: "Breakfast",
      rating: 4.3,
      reviews: 19,
      image: YOGURT_PARFAIT_URL,
      nutritionalInfo: {
        calories: 280,
        protein: "18g",
        carbs: "32g",
        fat: "8g",
      },
      friends: [
        {
          id: "1",
          name: "Alex Johnson",
          avatar: "/placeholder-user.jpg",
          rating: 4,
        },
        {
          id: "2",
          name: "Sam Taylor",
          avatar: "/placeholder-user.jpg",
          rating: 5,
        },
        {
          id: "5",
          name: "Taylor Morgan",
          avatar: "/placeholder-user.jpg",
          rating: 4,
        },
      ],
    },
    {
      id: "6",
      name: "Quinoa Salad",
      category: "Lunch",
      rating: 4.2,
      reviews: 7,
      image: QUINOA_SALAD_URL,
      nutritionalInfo: {
        calories: 350,
        protein: "12g",
        carbs: "48g",
        fat: "14g",
      },
      friends: [
        {
          id: "3",
          name: "Jordan Lee",
          avatar: "/placeholder-user.jpg",
          rating: 4,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceNowHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Today's Meals
          </h1>
          <p className="mt-2 text-lg text-gray-600">{todaysDate}</p>
        </div>

        <div className="flex justify-end mb-6 gap-4">
          <Button variant="outline" asChild>
            <Link href="/stats">View Stats</Link>
          </Button>
          <Button asChild>
            <Link href="/reviews">Leave a Review</Link>
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All Locations</TabsTrigger>
            <TabsTrigger value="connection">Connection Cafe</TabsTrigger>
            <TabsTrigger value="galley">Galley Kitchen</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6 space-y-12">
            <LocationMealSection
              location="Building G - Connection Cafe"
              meals={connectionCafeMeals}
              waitTime="8 min"
            />
            <LocationMealSection
              location="Galley Kitchen - Building C"
              meals={galleyKitchenMeals}
              waitTime="4 min"
            />
          </TabsContent>

          <TabsContent value="connection" className="mt-6">
            <LocationMealSection
              location="Building G - Connection Cafe"
              meals={connectionCafeMeals}
              waitTime="8 min"
            />
          </TabsContent>

          <TabsContent value="galley" className="mt-6">
            <LocationMealSection
              location="Galley Kitchen - Building C"
              meals={galleyKitchenMeals}
              waitTime="4 min"
            />
          </TabsContent>
        </Tabs>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Social Feed</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <SocialFeed
                posts={[
                  {
                    id: "1",
                    user: {
                      name: "Alex Johnson",
                      avatar:
                        "https://t4.ftcdn.net/jpg/04/80/05/77/360_F_480057743_J7wTBWRW3vABPnqEv2IwSVVXjj50xevN.jpg",
                      department: "Engineering",
                    },
                    time: "15 minutes ago",
                    content:
                      "Just had the Chicken Tikka Masala at Connection Cafe. Absolutely delicious! 😋",
                    foodItem: {
                      id: "1",
                      name: "Chicken Tikka Masala",
                      location: "Connection Cafe",
                      rating: 4.8,
                    },
                    image: CHICKEN_TIKKA_URL,
                    likes: 12,
                    comments: 3,
                  },
                  {
                    id: "2",
                    user: {
                      name: "Sam Taylor",
                      avatar:
                        "https://media.istockphoto.com/id/1450340623/photo/portrait-of-successful-mature-boss-senior-businessman-in-glasses-asian-looking-at-camera-and.jpg?s=612x612&w=0&k=20&c=f0EqWiUuID5VB_NxBUEDn92W2HLENR15CFFPzr-I4XE=",
                      department: "Product",
                    },
                    time: "1 hour ago",
                    content:
                      "The Greek Yogurt Parfait at Galley Kitchen is perfect for a light breakfast. Great balance of flavors!",
                    foodItem: {
                      id: "5",
                      name: "Greek Yogurt Parfait",
                      location: "Galley Kitchen",
                      rating: 4.3,
                    },
                    image: YOGURT_PARFAIT_URL,
                    likes: 8,
                    comments: 2,
                  },
                  {
                    id: "3",
                    user: {
                      name: "Jordan Lee",
                      avatar:
                        "https://t3.ftcdn.net/jpg/00/14/82/18/360_F_14821833_GovIKgFi4F7E9hO369DuSoS1S30k1Hf7.jpg",
                      department: "Marketing",
                    },
                    time: "2 hours ago",
                    content:
                      "Trying the new Quinoa Salad today. It's surprisingly filling and tasty!",
                    foodItem: {
                      id: "6",
                      name: "Quinoa Salad",
                      location: "Galley Kitchen",
                      rating: 4.2,
                    },
                    image: QUINOA_SALAD_URL,
                    likes: 15,
                    comments: 5,
                  },
                ]}
              />
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Trending Today</CardTitle>
                  <CardDescription>
                    What's popular in your network
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Chicken Tikka Masala", mentions: 24 },
                      { name: "Beef Burrito Bowl", mentions: 18 },
                      { name: "Fresh Fruit Platter", mentions: 12 },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between"
                      >
                        <span>{item.name}</span>
                        <Badge variant="outline">
                          {item.mentions} mentions
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
