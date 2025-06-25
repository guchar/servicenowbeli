import { FoodCardWithNutrition } from "@/components/food-card-with-nutrition";
import type { StaticImageData } from "next/image";

interface Friend {
  id: string;
  name: string;
  avatar: string;
  rating: number;
}

interface NutritionalInfo {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
}

interface Meal {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  image: string | StaticImageData;
  nutritionalInfo: NutritionalInfo;
  friends?: Friend[];
}

interface LocationMealSectionProps {
  location: string;
  meals: Meal[];
  waitTime?: string;
}

export function LocationMealSection({
  location,
  meals,
  waitTime,
}: LocationMealSectionProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2 text-[#0b7cce]">{location}</h2>
      {waitTime && (
        <p className="mb-4 text-sm text-muted-foreground">
          Estimated wait time:{" "}
          <span className="font-medium text-gray-800">{waitTime}</span>
        </p>
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {meals.map((meal) => (
          <FoodCardWithNutrition
            key={meal.id}
            id={meal.id}
            name={meal.name}
            category={meal.category}
            rating={meal.rating}
            reviews={meal.reviews}
            image={meal.image}
            nutritionalInfo={meal.nutritionalInfo}
            friends={meal.friends}
          />
        ))}
      </div>
    </div>
  );
}
