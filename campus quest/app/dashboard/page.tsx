"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Trophy, Users, MapPin } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/auth/signin");
    },
  });

  const [profile, setProfile] = useState({
    name: "",
    branch: "",
    regNumber: "",
    year: "",
    gamingName: "",
    discord: "",
    instagram: "",
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <Tabs defaultValue="profile" className="space-y-8">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="stats">Game Stats</TabsTrigger>
          <TabsTrigger value="history">Hunt History</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="branch">Branch</Label>
                <Input
                  id="branch"
                  value={profile.branch}
                  onChange={(e) =>
                    setProfile({ ...profile, branch: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="regNumber">Registration Number</Label>
                <Input
                  id="regNumber"
                  value={profile.regNumber}
                  onChange={(e) =>
                    setProfile({ ...profile, regNumber: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Input
                  id="year"
                  value={profile.year}
                  onChange={(e) =>
                    setProfile({ ...profile, year: e.target.value })
                  }
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Gaming Profile</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="gamingName">Gaming Name</Label>
                <Input
                  id="gamingName"
                  value={profile.gamingName}
                  onChange={(e) =>
                    setProfile({ ...profile, gamingName: e.target.value })
                  }
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Social Accounts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="discord">Discord</Label>
                <Input
                  id="discord"
                  value={profile.discord}
                  onChange={(e) =>
                    setProfile({ ...profile, discord: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram</Label>
                <Input
                  id="instagram"
                  value={profile.instagram}
                  onChange={(e) =>
                    setProfile({ ...profile, instagram: e.target.value })
                  }
                />
              </div>
            </div>
          </Card>

          <div className="flex justify-end">
            <Button>Save Changes</Button>
          </div>
        </TabsContent>

        <TabsContent value="stats">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <Trophy className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Hunts Completed</h3>
                  <p className="text-2xl font-bold">0</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Teams Joined</h3>
                  <p className="text-2xl font-bold">0</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <MapPin className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Locations Found</h3>
                  <p className="text-2xl font-bold">0</p>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="history">
          <Card className="p-6">
            <div className="text-center py-8">
              <p className="text-muted-foreground">No hunt history yet</p>
              <Button asChild className="mt-4">
                <Link href="/play">Start Your First Hunt</Link>
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}