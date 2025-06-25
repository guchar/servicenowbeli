import { mealStats } from "@/data/meal-stats";
import { snackAvailability, SnackType } from "@/data/snack-availability";

/**
 * Very lightweight NL → data mapping. No external AI required.
 * The function attempts to recognise a limited set of intents
 * and produce a data-driven answer.
 */
export function getAssistantResponse(questionRaw: string): string {
  const question = questionRaw.trim().toLowerCase();

  // Popular meals --------------------------------------------------
  if (question.includes("popular")) {
    if (question.includes("today") || question.includes("daily")) {
      const { name, location, reviews } = mealStats.daily.mostPopular;
      return `The most popular meal today is ${name} at ${location} with ${reviews} reviews.`;
    }
    if (question.includes("week")) {
      const { name, location, reviews } = mealStats.weekly.mostPopular;
      return `This week's most popular meal is ${name} at ${location} with ${reviews} reviews so far.`;
    }
    if (question.includes("month")) {
      const { name, location, reviews } = mealStats.monthly.mostPopular;
      return `This month the most popular meal is ${name} at ${location} with ${reviews} reviews.`;
    }
    // default period = today
    const { name, location, reviews } = mealStats.daily.mostPopular;
    return `Today, ${name} at ${location} is the crowd favourite with ${reviews} reviews.`;
  }

  // Trending meals -------------------------------------------------
  if (question.includes("trending")) {
    if (question.includes("today") || question.includes("daily")) {
      const { name, location, trend } = mealStats.daily.trendingUp;
      return `${name} at ${location} is trending up today (${trend}). Give it a try!`;
    }
    if (question.includes("week")) {
      const { name, location, trend } = mealStats.weekly.trendingUp;
      return `${name} at ${location} is trending this week (${trend}).`;
    }
    if (question.includes("month")) {
      const { name, location, trend } = mealStats.monthly.trendingUp;
      return `${name} at ${location} has been trending this month (${trend}).`;
    }
  }

  // Coffee / snacks ------------------------------------------------
  const snackAnswer = handleSnackQueries(question);
  if (snackAnswer) return snackAnswer;

  // Healthy meal recommendation ------------------------------------
  if (question.includes("healthy") && question.includes("meal")) {
    const healthyOptions = mealStats.daily.topRated.filter((m) =>
      ["quinoa", "salad", "fruit", "vegetable", "yogurt"].some((kw) =>
        m.name.toLowerCase().includes(kw)
      )
    );
    if (healthyOptions.length) {
      const first = healthyOptions[0];
      return `Looking for something healthy? ${first.name} at ${
        first.location
      } is highly rated today (${first.rating?.toFixed(1)}⭐).`;
    }
  }

  // Fallback -------------------------------------------------------
  return "I'm still learning! Try asking me about popular meals, healthy options, or where to find coffee.";
}

function handleSnackQueries(question: string): string | null {
  // Map keywords to snack types
  const keywordToType: Record<string, SnackType> = {
    coffee: "coffeeTea",
    tea: "coffeeTea",
    "coffee & tea": "coffeeTea",
    sweet: "sweetSnacks",
    dessert: "sweetSnacks",
    candy: "sweetSnacks",
    healthy: "healthyOptions",
    fruit: "healthyOptions",
    savory: "savorySnacks",
    pizza: "savorySnacks",
    chips: "savorySnacks",
  };

  // Detect snack type in question
  const detectedType = (Object.keys(keywordToType) as string[]).find((kw) =>
    question.includes(kw)
  );

  if (!detectedType) return null;

  const snackType = keywordToType[detectedType];

  // Collect buildings where availability is not red
  const buildings = snackAvailability.filter((b) =>
    b.categories.some((c) => c.type === snackType && c.availability !== "red")
  );

  if (!buildings.length) {
    return `Hmm, I'm not seeing ${detectedType} available right now.`;
  }

  const spots = buildings.map((b) => b.label).join(", ");

  switch (snackType) {
    case "coffeeTea":
      return `You can get coffee & tea at: ${spots}.`;
    case "sweetSnacks":
      return `Feeling sweet? Check out these spots: ${spots}.`;
    case "healthyOptions":
      return `Healthy snacks can be found at: ${spots}.`;
    case "savorySnacks":
      return `Savory snacks are available at: ${spots}.`;
    default:
      return null;
  }
}
