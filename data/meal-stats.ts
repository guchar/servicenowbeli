export interface MealInfo {
  name: string;
  location: string;
  reviews: number;
  rating?: number;
  trend?: string; // e.g. "+18%", "+0.2"
  recommendation?: string; // e.g. "Keep", "Improve"
}

export interface PeriodStats {
  totalReviews: number;
  averageRating: number;
  mostPopular: MealInfo;
  trendingUp: MealInfo;
  topRated: MealInfo[];
  mostReviewed?: MealInfo[];
  mostImproved?: MealInfo[];
}

export const mealStats: {
  daily: PeriodStats;
  weekly: PeriodStats;
  monthly: PeriodStats;
} = {
  daily: {
    totalReviews: 87,
    averageRating: 4.3,
    mostPopular: {
      name: "Chicken Tikka Masala",
      location: "Connection Cafe",
      reviews: 24,
    },
    trendingUp: {
      name: "Beef Burrito Bowl",
      location: "Galley Kitchen",
      reviews: 22,
      trend: "+18% in ratings",
    },
    topRated: [
      {
        name: "Chicken Tikka Masala",
        location: "Connection Cafe",
        rating: 4.8,
        reviews: 24,
      },
      {
        name: "Vegetable Stir Fry",
        location: "Connection Cafe",
        rating: 4.6,
        reviews: 18,
      },
      {
        name: "Fresh Fruit Platter",
        location: "Connection Cafe",
        rating: 4.5,
        reviews: 15,
      },
      {
        name: "Beef Burrito Bowl",
        location: "Galley Kitchen",
        rating: 4.4,
        reviews: 22,
      },
      {
        name: "Greek Yogurt Parfait",
        location: "Galley Kitchen",
        rating: 4.3,
        reviews: 19,
      },
    ],
    mostReviewed: [
      {
        name: "Chicken Tikka Masala",
        location: "Connection Cafe",
        rating: 4.8,
        reviews: 24,
      },
      {
        name: "Beef Burrito Bowl",
        location: "Galley Kitchen",
        rating: 4.4,
        reviews: 22,
      },
      {
        name: "Greek Yogurt Parfait",
        location: "Galley Kitchen",
        rating: 4.3,
        reviews: 19,
      },
      {
        name: "Vegetable Stir Fry",
        location: "Connection Cafe",
        rating: 4.6,
        reviews: 18,
      },
      {
        name: "Fresh Fruit Platter",
        location: "Connection Cafe",
        rating: 4.5,
        reviews: 15,
      },
    ],
  },
  weekly: {
    totalReviews: 412,
    averageRating: 4.2,
    mostPopular: {
      name: "Beef Burrito Bowl",
      location: "Galley Kitchen",
      reviews: 98,
    },
    trendingUp: {
      name: "Quinoa Salad",
      location: "Galley Kitchen",
      reviews: 61,
      trend: "+22% in ratings",
    },
    topRated: [
      {
        name: "Chicken Tikka Masala",
        location: "Connection Cafe",
        rating: 4.7,
        reviews: 92,
      },
      {
        name: "Beef Burrito Bowl",
        location: "Galley Kitchen",
        rating: 4.6,
        reviews: 98,
      },
      {
        name: "Fresh Fruit Platter",
        location: "Connection Cafe",
        rating: 4.5,
        reviews: 76,
      },
      {
        name: "Vegetable Stir Fry",
        location: "Connection Cafe",
        rating: 4.4,
        reviews: 85,
      },
      {
        name: "Quinoa Salad",
        location: "Galley Kitchen",
        rating: 4.3,
        reviews: 61,
      },
    ],
    mostImproved: [
      {
        name: "Quinoa Salad",
        location: "Galley Kitchen",
        rating: 4.3,
        reviews: 61,
        trend: "+0.5",
      },
      {
        name: "Vegetable Stir Fry",
        location: "Connection Cafe",
        rating: 4.4,
        reviews: 85,
        trend: "+0.3",
      },
      {
        name: "Greek Yogurt Parfait",
        location: "Galley Kitchen",
        rating: 4.2,
        reviews: 72,
        trend: "+0.2",
      },
      {
        name: "Beef Burrito Bowl",
        location: "Galley Kitchen",
        rating: 4.6,
        reviews: 98,
        trend: "+0.2",
      },
      {
        name: "Fresh Fruit Platter",
        location: "Connection Cafe",
        rating: 4.5,
        reviews: 76,
        trend: "+0.1",
      },
    ],
  },
  monthly: {
    totalReviews: 1845,
    averageRating: 4.1,
    mostPopular: {
      name: "Chicken Tikka Masala",
      location: "Connection Cafe",
      reviews: 412,
    },
    trendingUp: {
      name: "Fresh Fruit Platter",
      location: "Connection Cafe",
      reviews: 325,
      trend: "+25% in ratings",
    },
    topRated: [
      {
        name: "Chicken Tikka Masala",
        location: "Connection Cafe",
        rating: 4.7,
        reviews: 412,
      },
      {
        name: "Fresh Fruit Platter",
        location: "Connection Cafe",
        rating: 4.6,
        reviews: 325,
      },
      {
        name: "Beef Burrito Bowl",
        location: "Galley Kitchen",
        rating: 4.5,
        reviews: 387,
      },
      {
        name: "Vegetable Stir Fry",
        location: "Connection Cafe",
        rating: 4.3,
        reviews: 298,
      },
      {
        name: "Greek Yogurt Parfait",
        location: "Galley Kitchen",
        rating: 4.2,
        reviews: 312,
      },
    ],
  },
};
