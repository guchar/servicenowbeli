"use client";

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
import { ImagePlus } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export default function AddReviewPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceNowHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Add New Review
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Share your thoughts on a meal or snack from the ServiceNow cafeteria
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Food Review Form</CardTitle>
            <CardDescription>
              Your feedback helps improve our cafeteria offerings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="food-type">Food Type</Label>
                <Select>
                  <SelectTrigger id="food-type">
                    <SelectValue placeholder="Select food type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="breakfast">Breakfast</SelectItem>
                    <SelectItem value="lunch">Lunch</SelectItem>
                    <SelectItem value="dinner">Dinner</SelectItem>
                    <SelectItem value="snack">Snack</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="food-name">Food Name</Label>
                <Input
                  id="food-name"
                  placeholder="Enter the name of the food item"
                />
              </div>

              <div className="space-y-2">
                <Label>Rating</Label>
                <RadioGroup defaultValue="4" className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <div key={value} className="flex flex-col items-center">
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
                <Label htmlFor="share-chef">Share Directly with chef</Label>
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
      </main>
    </div>
  );
}
