"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useState } from "react";

interface Location {
  id: string;
  name: string;
  clue: string;
  hint: string;
  coordinates: { lat: number; lng: number };
  isFound: boolean;
}

const CAMPUS_LOCATIONS: Location[] = [
  {
    id: "loc1",
    name: "Main Building",
    clue: "Where knowledge towers high and dreams begin, Find me where administration's heart has always been.",
    hint: "Look for the iconic clock tower",
    coordinates: { lat: 25.4920, lng: 81.8639 },
    isFound: false,
  },
  {
    id: "loc2",
    name: "Central Library",
    clue: "Wisdom's fortress stands in silence deep, Where countless stories their secrets keep.",
    hint: "Books are your best friends here",
    coordinates: { lat: 25.4915, lng: 81.8636 },
    isFound: false,
  },
  {
    id: "loc3",
    name: "MP Hall",
    clue: "Talents shine and voices raise, On this stage of countless plays.",
    hint: "Where cultural events come alive",
    coordinates: { lat: 25.4918, lng: 81.8642 },
    isFound: false,
  },
];

export default function CampusHunt() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/auth/signin");
    },
  });

  const [locations, setLocations] = useState<Location[]>(CAMPUS_LOCATIONS);
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
  const [showHint, setShowHint] = useState(false);

  const handleStartHunt = () => {
    const firstLocation = locations.find((loc) => !loc.isFound);
    setCurrentLocation(firstLocation || null);
    setShowHint(false);
  };

  const handleLocationFound = () => {
    if (!currentLocation) return;

    setLocations((prev) =>
      prev.map((loc) =>
        loc.id === currentLocation.id ? { ...loc, isFound: true } : loc
      )
    );

    const nextLocation = locations.find(
      (loc) => !loc.isFound && loc.id !== currentLocation.id
    );
    setCurrentLocation(nextLocation || null);
    setShowHint(false);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Campus Adventure</h1>
        <div className="flex items-center space-x-4">
          <p className="text-muted-foreground">
            Found: {locations.filter((loc) => loc.isFound).length} /{" "}
            {locations.length}
          </p>
        </div>
      </div>

      {!currentLocation ? (
        <Card className="p-6 text-center">
          <div className="flex flex-col items-center space-y-4">
            <MapPin className="h-12 w-12 text-primary" />
            <h2 className="text-xl font-semibold">
              {locations.every((loc) => loc.isFound)
                ? "Congratulations! Hunt Complete"
                : "Ready to Explore?"}
            </h2>
            <p className="text-muted-foreground">
              {locations.every((loc) => loc.isFound)
                ? "You've discovered all locations!"
                : "Start your campus adventure"}
            </p>
            {!locations.every((loc) => loc.isFound) && (
              <Button onClick={handleStartHunt}>Start Hunt</Button>
            )}
          </div>
        </Card>
      ) : (
        <Card className="p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Current Clue</h2>
              <Button variant="outline" onClick={() => setShowHint(!showHint)}>
                {showHint ? "Hide Hint" : "Show Hint"}
              </Button>
            </div>
            <p className="text-lg">{currentLocation.clue}</p>
            {showHint && (
              <p className="text-muted-foreground italic">
                Hint: {currentLocation.hint}
              </p>
            )}
            <div className="flex justify-end space-x-4">
              <Button onClick={handleLocationFound}>Found It!</Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}