"use client";

import { ServiceNowHeader } from "@/components/servicenow-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Coffee, Cookie, Apple, Pizza, Search, MapPin } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type SnackFilter =
  | "all"
  | "coffeeTea"
  | "sweetSnacks"
  | "healthyOptions"
  | "savorySnacks";

export default function MapPage() {
  const [filter, setFilter] = React.useState<SnackFilter>("all");

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceNowHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Office Snack Map
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Find snacks and refreshments throughout the ServiceNow campus
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <div className="sticky top-24">
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search for snacks..."
                    className="w-full pl-10 pr-4 py-2 border rounded-md"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <Button
                  variant={filter === "all" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setFilter("all")}
                >
                  All Snacks
                </Button>
                <Button
                  variant={filter === "coffeeTea" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setFilter("coffeeTea")}
                >
                  <Coffee className="mr-2 h-4 w-4" />
                  Coffee & Tea
                </Button>
                <Button
                  variant={filter === "sweetSnacks" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setFilter("sweetSnacks")}
                >
                  <Cookie className="mr-2 h-4 w-4" />
                  Sweet Snacks
                </Button>
                <Button
                  variant={filter === "healthyOptions" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setFilter("healthyOptions")}
                >
                  <Apple className="mr-2 h-4 w-4" />
                  Healthy Options
                </Button>
                <Button
                  variant={filter === "savorySnacks" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setFilter("savorySnacks")}
                >
                  <Pizza className="mr-2 h-4 w-4" />
                  Savory Snacks
                </Button>
              </div>
            </div>
          </div>

          <div className="md:w-3/4">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-[600px] w-full">
                  <div className="absolute inset-0">
                    <Image
                      src="/office-snack-map.png"
                      alt="ServiceNow Campus Map"
                      fill
                      className="object-cover"
                    />

                    {/* Building I - positioned at the building marker */}
                    <div className="absolute top-[28%] left-[30%] transform -translate-x-1/2 -translate-y-1/2">
                      <BuildingMarker
                        id="bldg-i"
                        label="Building I"
                        categories={[
                          { type: "coffeeTea", availability: "green" },
                          { type: "sweetSnacks", availability: "yellow" },
                          { type: "healthyOptions", availability: "green" },
                          { type: "savorySnacks", availability: "red" },
                        ]}
                        filter={filter}
                      />
                    </div>

                    {/* Building F&G - positioned at the building marker */}
                    <div className="absolute top-[65%] left-[30%] transform -translate-x-1/2 -translate-y-1/2">
                      <BuildingMarker
                        id="bldg-fg"
                        label="Building F&G - Connection Cafe"
                        categories={[
                          { type: "coffeeTea", availability: "green" },
                          { type: "sweetSnacks", availability: "yellow" },
                          { type: "healthyOptions", availability: "green" },
                          { type: "savorySnacks", availability: "green" },
                        ]}
                        filter={filter}
                      />
                    </div>

                    {/* Building A - positioned at the building marker */}
                    <div className="absolute top-[56%] left-[49%] transform -translate-x-1/2 -translate-y-1/2">
                      <BuildingMarker
                        id="bldg-a"
                        label="Building A - Micro Kitchen"
                        categories={[
                          { type: "coffeeTea", availability: "green" },
                          { type: "sweetSnacks", availability: "green" },
                          { type: "healthyOptions", availability: "yellow" },
                          { type: "savorySnacks", availability: "green" },
                        ]}
                        filter={filter}
                      />
                    </div>

                    {/* Building C - positioned at the building marker */}
                    <div className="absolute top-[58%] left-[65%] transform -translate-x-1/2 -translate-y-1/2">
                      <BuildingMarker
                        id="bldg-c"
                        label="Building C - Galley Kitchen"
                        categories={[
                          { type: "coffeeTea", availability: "yellow" },
                          { type: "sweetSnacks", availability: "green" },
                          { type: "healthyOptions", availability: "green" },
                          { type: "savorySnacks", availability: "green" },
                        ]}
                        filter={filter}
                      />
                    </div>

                    {/* Building B - positioned at the building marker */}
                    <div className="absolute top-[95%] left-[55%] transform -translate-x-1/2 -translate-y-1/2">
                      <BuildingMarker
                        id="bldg-b"
                        label="Building B - Refreshment Corner"
                        categories={[
                          { type: "coffeeTea", availability: "green" },
                          { type: "sweetSnacks", availability: "green" },
                          { type: "healthyOptions", availability: "green" },
                          { type: "savorySnacks", availability: "yellow" },
                        ]}
                        filter={filter}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

interface SnackCategory {
  type: "coffeeTea" | "sweetSnacks" | "healthyOptions" | "savorySnacks";
  availability: "red" | "yellow" | "green";
}

interface BuildingMarkerProps {
  id: string;
  label: string;
  categories: SnackCategory[];
  filter: SnackFilter;
}

function BuildingMarker({
  id,
  label,
  categories,
  filter,
}: BuildingMarkerProps) {
  const router = useRouter();
  const iconMap = {
    coffeeTea: Coffee,
    sweetSnacks: Cookie,
    healthyOptions: Apple,
    savorySnacks: Pizza,
  };

  const availabilityColor = {
    red: "#ef4444",
    yellow: "#f59e0b",
    green: "#22c55e",
  };

  const displayCategories =
    filter === "all" ? categories : categories.filter((c) => c.type === filter);

  if (displayCategories.length === 0) return null;

  function handleIconClick(
    category: SnackCategory["type"],
    availability: SnackCategory["availability"]
  ) {
    if (availability === "red") {
      router.push(`/service-request?building=${id}&category=${category}`);
    }
  }

  return (
    <div className="relative group flex flex-col items-center">
      <div className="flex space-x-1 mb-1">
        {displayCategories.map((cat) => {
          const Icon = iconMap[cat.type];
          return (
            <div
              key={cat.type}
              className="h-6 w-6 rounded-full flex items-center justify-center cursor-pointer"
              style={{ backgroundColor: availabilityColor[cat.availability] }}
              onClick={() => handleIconClick(cat.type, cat.availability)}
            >
              <Icon className="h-3.5 w-3.5 text-white" />
            </div>
          );
        })}
      </div>
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white text-xs shadow px-2 py-1 rounded">
        {label}
      </div>
    </div>
  );
}

interface SnackSpotCardProps {
  name: string;
  image: string;
  items: string[];
  popular: string;
}

function SnackSpotCard({ name, image, items, popular }: SnackSpotCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-32">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium mb-2">{name}</h3>
        <div className="mb-2">
          <Badge className="bg-[#0b7cce]">Most Popular: {popular}</Badge>
        </div>
        <div className="text-sm text-muted-foreground">
          <span className="font-medium text-xs block mb-1">Available:</span>
          <div className="flex flex-wrap gap-1">
            {items.map((item, i) => (
              <Badge key={i} variant="outline" className="text-xs">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
