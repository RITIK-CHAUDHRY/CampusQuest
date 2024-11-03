"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Trophy } from "lucide-react";
import Link from "next/link";

export default function Play() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/auth/signin");
    },
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Choose Your Adventure</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex flex-col items-center space-y-4">
            <MapPin className="h-12 w-12 text-primary" />
            <h2 className="text-xl font-semibold">Campus Hunt</h2>
            <p className="text-center text-muted-foreground">
              Explore MNNIT campus and discover its hidden treasures
            </p>
            <Button asChild className="w-full">
              <Link href="/play/campus">Start Hunt</Link>
            </Button>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex flex-col items-center space-y-4">
            <Trophy className="h-12 w-12 text-primary" />
            <h2 className="text-xl font-semibold">Custom Hunt</h2>
            <p className="text-center text-muted-foreground">
              Create your own hunt or join one with a room code
            </p>
            <Button asChild className="w-full">
              <Link href="/play/custom">Create/Join</Link>
            </Button>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex flex-col items-center space-y-4">
            <Users className="h-12 w-12 text-primary" />
            <h2 className="text-xl font-semibold">Team Hunt</h2>
            <p className="text-center text-muted-foreground">
              Form a team and compete with other groups
            </p>
            <Button asChild className="w-full">
              <Link href="/play/team">Team Up</Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}