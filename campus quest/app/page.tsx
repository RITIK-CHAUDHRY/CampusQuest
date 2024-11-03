import { Button } from "@/components/ui/button";
import { MapPin, Users, Trophy } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            MNNIT Campus Quest
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Explore the campus, solve riddles, and compete with friends in this exciting treasure hunt!
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/play">Start Playing</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/rules">Learn More</Link>
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg">
            <MapPin className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Campus Adventure</h3>
            <p className="text-center text-muted-foreground">
              Discover hidden spots and historical landmarks across MNNIT campus
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Team Play</h3>
            <p className="text-center text-muted-foreground">
              Form teams with friends and compete in exciting challenges
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg">
            <Trophy className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Custom Hunts</h3>
            <p className="text-center text-muted-foreground">
              Create your own treasure hunts and challenge others
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}