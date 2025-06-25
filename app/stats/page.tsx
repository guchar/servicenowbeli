import type React from "react";
import { ServiceNowHeader } from "@/components/servicenow-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, Star, TrendingUp, Utensils } from "lucide-react";
import Image from "next/image";

export default function StatsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceNowHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Meal Statistics
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Track the performance of meals across ServiceNow cafeterias
          </p>
        </div>

        <Tabs defaultValue="daily" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="daily">Daily Stats</TabsTrigger>
            <TabsTrigger value="weekly">Weekly Stats</TabsTrigger>
            <TabsTrigger value="monthly">Monthly Stats</TabsTrigger>
          </TabsList>

          <TabsContent value="daily">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
              <StatCard
                title="Total Reviews"
                value="87"
                description="Today"
                trend="+12% from yesterday"
                icon={<Star className="h-5 w-5" />}
              />
              <StatCard
                title="Average Rating"
                value="4.3"
                description="Today"
                trend="+0.2 from yesterday"
                icon={<Star className="h-5 w-5" />}
              />
              <StatCard
                title="Most Popular"
                value="Chicken Tikka"
                description="Connection Cafe"
                trend="24 reviews today"
                icon={<Utensils className="h-5 w-5" />}
              />
              <StatCard
                title="Trending Up"
                value="Beef Burrito Bowl"
                description="Galley Kitchen"
                trend="+18% in ratings"
                icon={<TrendingUp className="h-5 w-5" />}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Top Rated Today</CardTitle>
                  <CardDescription>
                    Highest rated meals across all cafeterias
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RankingTable
                    items={[
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
                    ]}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Most Reviewed Today</CardTitle>
                  <CardDescription>
                    Meals with the most feedback
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RankingTable
                    items={[
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
                    ]}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Top Reviewers Leaderboard */}
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Top Reviewers (Today)</CardTitle>
                  <CardDescription>
                    Most active reviewers across all cafeterias
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Podium
                    reviewers={[
                      {
                        name: "Emily R.",
                        reviews: 15,
                        avatar:
                          "https://randomuser.me/api/portraits/women/44.jpg",
                      },
                      {
                        name: "Daniel K.",
                        reviews: 12,
                        avatar:
                          "https://randomuser.me/api/portraits/men/32.jpg",
                      },
                      {
                        name: "Sophia L.",
                        reviews: 10,
                        avatar:
                          "https://randomuser.me/api/portraits/women/68.jpg",
                      },
                    ]}
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="weekly">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
              <StatCard
                title="Total Reviews"
                value="412"
                description="This Week"
                trend="+8% from last week"
                icon={<Star className="h-5 w-5" />}
              />
              <StatCard
                title="Average Rating"
                value="4.2"
                description="This Week"
                trend="+0.1 from last week"
                icon={<Star className="h-5 w-5" />}
              />
              <StatCard
                title="Most Popular"
                value="Beef Burrito Bowl"
                description="Galley Kitchen"
                trend="98 reviews this week"
                icon={<Utensils className="h-5 w-5" />}
              />
              <StatCard
                title="Trending Up"
                value="Quinoa Salad"
                description="Galley Kitchen"
                trend="+22% in ratings"
                icon={<TrendingUp className="h-5 w-5" />}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Top Rated This Week</CardTitle>
                  <CardDescription>
                    Highest rated meals across all cafeterias
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RankingTable
                    items={[
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
                    ]}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Most Improved This Week</CardTitle>
                  <CardDescription>
                    Meals with the biggest rating increases
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RankingTable
                    items={[
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
                    ]}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Top Reviewers Leaderboard */}
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Top Reviewers (This Week)</CardTitle>
                  <CardDescription>
                    Most active reviewers across all cafeterias
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Podium
                    reviewers={[
                      {
                        name: "Emily R.",
                        reviews: 30,
                        avatar:
                          "https://randomuser.me/api/portraits/women/44.jpg",
                      },
                      {
                        name: "Daniel K.",
                        reviews: 27,
                        avatar:
                          "https://randomuser.me/api/portraits/men/32.jpg",
                      },
                      {
                        name: "Sophia L.",
                        reviews: 21,
                        avatar:
                          "https://randomuser.me/api/portraits/women/68.jpg",
                      },
                    ]}
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="monthly">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
              <StatCard
                title="Total Reviews"
                value="1,845"
                description="This Month"
                trend="+15% from last month"
                icon={<Star className="h-5 w-5" />}
              />
              <StatCard
                title="Average Rating"
                value="4.1"
                description="This Month"
                trend="+0.2 from last month"
                icon={<Star className="h-5 w-5" />}
              />
              <StatCard
                title="Most Popular"
                value="Chicken Tikka"
                description="Connection Cafe"
                trend="412 reviews this month"
                icon={<Utensils className="h-5 w-5" />}
              />
              <StatCard
                title="Trending Up"
                value="Fresh Fruit Platter"
                description="Connection Cafe"
                trend="+25% in ratings"
                icon={<TrendingUp className="h-5 w-5" />}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Top Rated This Month</CardTitle>
                  <CardDescription>
                    Highest rated meals across all cafeterias
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RankingTable
                    items={[
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
                    ]}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommended for Continuation</CardTitle>
                  <CardDescription>
                    Meals that should remain on the menu
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RankingTable
                    items={[
                      {
                        name: "Chicken Tikka Masala",
                        location: "Connection Cafe",
                        rating: 4.7,
                        reviews: 412,
                        recommendation: "Keep",
                      },
                      {
                        name: "Fresh Fruit Platter",
                        location: "Connection Cafe",
                        rating: 4.6,
                        reviews: 325,
                        recommendation: "Keep",
                      },
                      {
                        name: "Beef Burrito Bowl",
                        location: "Galley Kitchen",
                        rating: 4.5,
                        reviews: 387,
                        recommendation: "Keep",
                      },
                      {
                        name: "Vegetable Stir Fry",
                        location: "Connection Cafe",
                        rating: 4.3,
                        reviews: 298,
                        recommendation: "Improve",
                      },
                      {
                        name: "Greek Yogurt Parfait",
                        location: "Galley Kitchen",
                        rating: 4.2,
                        reviews: 312,
                        recommendation: "Improve",
                      },
                    ]}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Top Reviewers Leaderboard */}
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Top Reviewers (This Month)</CardTitle>
                  <CardDescription>
                    Most active reviewers across all cafeterias
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Podium
                    reviewers={[
                      {
                        name: "Emily R.",
                        reviews: 42,
                        avatar:
                          "https://randomuser.me/api/portraits/women/44.jpg",
                      },
                      {
                        name: "Daniel K.",
                        reviews: 35,
                        avatar:
                          "https://randomuser.me/api/portraits/men/32.jpg",
                      },
                      {
                        name: "Sophia L.",
                        reviews: 30,
                        avatar:
                          "https://randomuser.me/api/portraits/women/68.jpg",
                      },
                    ]}
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  trend: string;
  icon: React.ReactNode;
}

function StatCard({ title, value, description, trend, icon }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-muted-foreground text-sm">{title}</span>
          <div className="bg-[#81b5a1]/10 p-2 rounded-full text-[#81b5a1]">
            {icon}
          </div>
        </div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-sm text-muted-foreground">{description}</div>
        <div className="flex items-center mt-2 text-xs text-[#81b5a1]">
          <ArrowUp className="h-3 w-3 mr-1" />
          {trend}
        </div>
      </CardContent>
    </Card>
  );
}

interface RankingItem {
  name: string;
  location: string;
  rating: number;
  reviews: number;
  trend?: string;
  recommendation?: string;
}

interface RankingTableProps {
  items: RankingItem[];
}

function RankingTable({ items }: RankingTableProps) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-muted-foreground uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-3">
              Rank
            </th>
            <th scope="col" className="px-4 py-3">
              Meal
            </th>
            <th scope="col" className="px-4 py-3">
              Location
            </th>
            <th scope="col" className="px-4 py-3">
              Rating
            </th>
            <th scope="col" className="px-4 py-3">
              Reviews
            </th>
            {items[0]?.trend && (
              <th scope="col" className="px-4 py-3">
                Change
              </th>
            )}
            {items[0]?.recommendation && (
              <th scope="col" className="px-4 py-3">
                Status
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="px-4 py-3 font-medium">{index + 1}</td>
              <td className="px-4 py-3 font-medium">{item.name}</td>
              <td className="px-4 py-3">{item.location}</td>
              <td className="px-4 py-3">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-[#81b5a1] fill-[#81b5a1] mr-1" />
                  {item.rating.toFixed(1)}
                </div>
              </td>
              <td className="px-4 py-3">{item.reviews}</td>
              {item.trend && (
                <td className="px-4 py-3 text-[#81b5a1]">
                  <div className="flex items-center">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    {item.trend}
                  </div>
                </td>
              )}
              {item.recommendation && (
                <td className="px-4 py-3">
                  <Badge
                    className={
                      item.recommendation === "Keep"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                    }
                  >
                    {item.recommendation}
                  </Badge>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface Reviewer {
  name: string;
  reviews: number;
  avatar: string;
}

function Podium({ reviewers }: { reviewers: Reviewer[] }) {
  if (reviewers.length < 3) return null;

  const podiumHeights = ["h-48", "h-40", "h-32"]; // first, second, third
  const colours = ["bg-yellow-400", "bg-gray-300", "bg-amber-700"];

  return (
    <div className="flex justify-center items-end gap-20 md:gap-24 py-8">
      {/* Second place */}
      <PodiumColumn
        reviewer={reviewers[1]}
        rank={2}
        heightClass={podiumHeights[1]}
        colourClass={colours[1]}
      />
      {/* First place */}
      <PodiumColumn
        reviewer={reviewers[0]}
        rank={1}
        heightClass={podiumHeights[0]}
        colourClass={colours[0]}
      />
      {/* Third place */}
      <PodiumColumn
        reviewer={reviewers[2]}
        rank={3}
        heightClass={podiumHeights[2]}
        colourClass={colours[2]}
      />
    </div>
  );
}

function PodiumColumn({
  reviewer,
  rank,
  heightClass,
  colourClass,
}: {
  reviewer: Reviewer;
  rank: number;
  heightClass: string;
  colourClass: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`relative w-20 ${heightClass} ${colourClass} rounded-t-md flex items-end justify-center`}
      >
        <span className="mb-2 text-white text-lg font-semibold">{rank}</span>
      </div>
      <Image
        src={reviewer.avatar}
        alt={reviewer.name}
        width={48}
        height={48}
        className="rounded-full mt-2 border-2 border-white shadow"
      />
      <span className="mt-2 text-sm font-medium text-center">
        {reviewer.name}
      </span>
      <span className="text-xs text-muted-foreground">
        {reviewer.reviews} reviews
      </span>
    </div>
  );
}
