"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trophy } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CustomHunt() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/auth/signin");
    },
  });

  const [roomCode, setRoomCode] = useState("");
  const [customHunt, setCustomHunt] = useState({
    title: "",
    description: "",
    locations: [{ clue: "", answer: "" }],
  });

  const handleCreateHunt = () => {
    // Implementation for creating a new hunt
    console.log("Creating hunt:", customHunt);
  };

  const handleJoinHunt = () => {
    // Implementation for joining a hunt
    console.log("Joining hunt with code:", roomCode);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Custom Hunt</h1>

      <Tabs defaultValue="join" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="join">Join Hunt</TabsTrigger>
          <TabsTrigger value="create">Create Hunt</TabsTrigger>
        </TabsList>

        <TabsContent value="join">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="roomCode">Room Code</Label>
                <Input
                  id="roomCode"
                  placeholder="Enter 5-digit room code"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value)}
                  maxLength={5}
                />
              </div>
              <Button
                className="w-full"
                onClick={handleJoinHunt}
                disabled={roomCode.length !== 5}
              >
                Join Hunt
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="create">
          <Card className="p-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Hunt Title</Label>
                <Input
                  id="title"
                  value={customHunt.title}
                  onChange={(e) =>
                    setCustomHunt({ ...customHunt, title: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  value={customHunt.description}
                  onChange={(e) =>
                    setCustomHunt({ ...customHunt, description: e.target.value })
                  }
                />
              </div>

              <div className="space-y-4">
                <Label>Locations & Clues</Label>
                {customHunt.locations.map((loc, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Clue"
                      value={loc.clue}
                      onChange={(e) => {
                        const newLocations = [...customHunt.locations];
                        newLocations[index].clue = e.target.value;
                        setCustomHunt({ ...customHunt, locations: newLocations });
                      }}
                    />
                    <Input
                      placeholder="Answer"
                      value={loc.answer}
                      onChange={(e) => {
                        const newLocations = [...customHunt.locations];
                        newLocations[index].answer = e.target.value;
                        setCustomHunt({ ...customHunt, locations: newLocations });
                      }}
                    />
                  </div>
                ))}
                <Button
                  variant="outline"
                  onClick={() =>
                    setCustomHunt({
                      ...customHunt,
                      locations: [
                        ...customHunt.locations,
                        { clue: "", answer: "" },
                      ],
                    })
                  }
                >
                  Add Location
                </Button>
              </div>

              <Button className="w-full" onClick={handleCreateHunt}>
                Create Hunt
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}