import { Card } from "@/components/ui/card";
import { MapPin, Users, Trophy, Clock, Target, Shield } from "lucide-react";

export default function Rules() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Game Rules</h1>

      <div className="space-y-8">
        <Card className="p-6">
          <div className="flex items-start space-x-4">
            <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Campus Hunt Rules</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Follow all campus safety guidelines</li>
                <li>Respect restricted areas and private spaces</li>
                <li>Complete challenges within designated time limits</li>
                <li>Use only the provided clues to find locations</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start space-x-4">
            <Trophy className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Custom Hunt Rules</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Maximum 5 players per room</li>
                <li>Create appropriate and solvable riddles</li>
                <li>Keep locations within campus boundaries</li>
                <li>No sharing answers with other players</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start space-x-4">
            <Users className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Team Hunt Rules</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Teams must have exactly 3 members</li>
                <li>All team members must be MNNIT students</li>
                <li>Stay together during the hunt</li>
                <li>Communicate only through the in-game chat</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start space-x-4">
            <Shield className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Fair Play Guidelines</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>No cheating or exploiting game mechanics</li>
                <li>Report any bugs or issues to moderators</li>
                <li>Maintain respectful behavior towards other players</li>
                <li>Follow the honor code during hunts</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}