"use client";

import type React from "react";

import { useState } from "react";
import { ServiceNowHeader } from "@/components/servicenow-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ImagePlus, Star, Trophy } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export default function ReviewsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [points, setPoints] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the review to a database
    setSubmitted(true);
    setPoints(25); // Award points for submitting a review
  };

  // This would normally come from an API based on today's menu
  const todaysMeals = [
    { value: "chicken-tikka", label: "Chicken Tikka Masala (Connection Cafe)" },
    {
      value: "vegetable-stir-fry",
      label: "Vegetable Stir Fry (Connection Cafe)",
    },
    { value: "fruit-platter", label: "Fresh Fruit Platter (Connection Cafe)" },
    { value: "burrito-bowl", label: "Beef Burrito Bowl (Galley Kitchen)" },
    { value: "yogurt-parfait", label: "Greek Yogurt Parfait (Galley Kitchen)" },
    { value: "quinoa-salad", label: "Quinoa Salad (Galley Kitchen)" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceNowHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            My Reviews
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Share your thoughts on today's meals and earn points
          </p>
        </div>

        <Tabs defaultValue="leave-review" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="leave-review">Leave a Review</TabsTrigger>
            <TabsTrigger value="my-reviews">My Reviews & Points</TabsTrigger>
          </TabsList>

          <TabsContent value="leave-review">
            {submitted ? (
              <div className="max-w-2xl mx-auto">
                <Alert className="bg-[#81b5a1]/20 border-[#81b5a1]">
                  <Trophy className="h-5 w-5 text-[#81b5a1]" />
                  <AlertTitle>Review Submitted Successfully!</AlertTitle>
                  <AlertDescription>
                    Thank you for your feedback. You've earned {points} points
                    for your contribution.
                  </AlertDescription>
                </Alert>
                <div className="mt-6 text-center">
                  <Button onClick={() => setSubmitted(false)}>
                    Submit Another Review
                  </Button>
                </div>
              </div>
            ) : (
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle>Food Review Form</CardTitle>
                  <CardDescription>
                    Your feedback helps improve our cafeteria offerings. Earn 25
                    points for each review!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <Label htmlFor="meal-selection">
                        Select Today's Meal
                      </Label>
                      <Select required>
                        <SelectTrigger id="meal-selection">
                          <SelectValue placeholder="Choose a meal from today's menu" />
                        </SelectTrigger>
                        <SelectContent>
                          {todaysMeals.map((meal) => (
                            <SelectItem key={meal.value} value={meal.value}>
                              {meal.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Rating</Label>
                      <RadioGroup defaultValue="4" className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((value) => (
                          <div
                            key={value}
                            className="flex flex-col items-center"
                          >
                            <RadioGroupItem
                              value={value.toString()}
                              id={`rating-${value}`}
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor={`rating-${value}`}
                              className="flex h-10 w-10 items-center justify-center rounded-full border peer-data-[state=checked]:bg-[#81b5a1] peer-data-[state=checked]:text-white cursor-pointer"
                            >
                              {value}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="review">Review</Label>
                      <Textarea
                        id="review"
                        placeholder="Share your thoughts about this food item"
                        rows={4}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Upload Image</Label>
                      <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
                        <ImagePlus className="h-8 w-8 text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground mb-1">
                          Drag and drop an image, or click to browse
                        </p>
                        <p className="text-xs text-muted-foreground">
                          PNG, JPG or WEBP up to 5MB
                        </p>
                        <Input
                          type="file"
                          className="hidden"
                          id="food-image"
                          accept="image/*"
                        />
                        <Button
                          variant="outline"
                          className="mt-4"
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("food-image")?.click();
                          }}
                        >
                          Select Image
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="share-chef" />
                      <Label htmlFor="share-chef">
                        Share To Our Catering and Workplace Services Team
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#0b7cce] hover:bg-[#0b7cce]/90"
                    >
                      Submit Review
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="my-reviews">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow p-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="bg-[#0b7cce] rounded-full p-3">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Your Points: 175</h2>
                    <p className="text-muted-foreground">
                      Level: Food Enthusiast
                    </p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-2xl font-bold">7</p>
                    <p className="text-sm text-muted-foreground">
                      Reviews Submitted
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-2xl font-bold">4</p>
                    <p className="text-sm text-muted-foreground">
                      Photos Uploaded
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-2xl font-bold">12</p>
                    <p className="text-sm text-muted-foreground">
                      Helpful Votes
                    </p>
                  </div>
                </div>

                {/* Progress to next reward */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-3">
                    Reward Progress
                  </h3>
                  <Card className="border-0 bg-gray-50">
                    <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
                      <div className="flex-1 w-full">
                        <p className="text-sm mb-2">
                          7 / 20 reviews – earn a <strong>free coffee</strong>{" "}
                          at Main Street Mocha
                        </p>
                        <Progress value={35} className="h-3" />

                        <p className="text-xs text-muted-foreground mt-3 font-medium">
                          Upcoming Rewards:
                        </p>
                        <ul className="text-xs list-disc pl-4 text-muted-foreground space-y-1 mt-1">
                          <li>Free T-Shirt (30 reviews)</li>
                          <li>Free Meal Voucher (50 reviews)</li>
                        </ul>
                      </div>

                      <div className="relative w-32 h-32 rounded-lg overflow-hidden shadow">
                        <Image
                          src="https://cdn.loveandlemons.com/wp-content/uploads/2023/06/iced-matcha-latte.jpg"
                          alt="Iced Matcha Latte"
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">
                Your Recent Reviews
              </h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">
                            {i === 1
                              ? "Beef Burrito Bowl"
                              : i === 2
                              ? "Greek Yogurt Parfait"
                              : "Vegetable Stir Fry"}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {i === 1
                              ? "Galley Kitchen"
                              : i === 2
                              ? "Galley Kitchen"
                              : "Connection Cafe"}
                          </p>
                          <div className="flex items-center mt-1">
                            {Array(i === 1 ? 5 : i === 2 ? 4 : 4)
                              .fill(0)
                              .map((_, idx) => (
                                <Star
                                  key={idx}
                                  className="h-4 w-4 text-[#81b5a1] fill-[#81b5a1]"
                                />
                              ))}
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {i === 1
                            ? "Today"
                            : i === 2
                            ? "Yesterday"
                            : "3 days ago"}
                        </span>
                      </div>
                      <p className="mt-2 text-sm">
                        {i === 1
                          ? "Delicious and filling! The beef was perfectly seasoned and the portion size was great."
                          : i === 2
                          ? "Fresh and healthy. Would like more granola next time."
                          : "Good flavor but the vegetables were a bit overcooked."}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
