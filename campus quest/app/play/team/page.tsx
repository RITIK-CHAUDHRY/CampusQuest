"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TeamHunt() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/auth/signin");
    },
  });

  const [teamCode, setTeamCode] = useState("");
  const [teamName, setTeamName] = useState("");
  const [members, setMembers] = useState<string[]>([""]);

  const handleCreateTeam = () => {
    // Implementation for creating a new team
    console.log("Creating team:", { teamName, members });
  };

  const handleJoinTeam = () => {
    // Implementation for joining a team
    console.log("Joining team with code:", teamCode);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Team Hunt</h1>

      <Tabs defaultValue="join" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="join">Join Team</TabsTrigger>
          <TabsTrigger value="create">Create Team</TabsTrigger>
        </TabsList>

        <TabsContent value="join">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="teamCode">Team Code</Label>
                <Input
                  id="teamCode"
                  placeholder="Enter 5-digit team code"
                  value={teamCode}
                  onChange={(e) => setTeamCode(e.target.value)}
                  maxLength={5}
                />
              </div>
              <Button
                className="w-full"
                onClick={handleJoinTeam}
                disabled={teamCode.length !== 5}
              >
                Join Team
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="create">
          <Card className="p-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="teamName">Team Name</Label>
                <Input
                  id="teamName"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                />
              </div>

              <div className="space-y-4">
                <Label>Team Members (3 required)</Label>
                {members.map((member, index) => (
                  <div key={index} className="flex space-x-2">
                    <Input
                      placeholder={`Member ${index + 1} email`}
                      value={member}
                      onChange={(e) => {
                        const newMembers = [...members];
                        newMembers[index] = e.target.value;
                        setMembers(newMembers);
                      }}
                    />
                    {members.length > 1 && (
                      <Button
                        variant="outline"
                        onClick={() =>
                          setMembers(members.filter((_, i) => i !== index))
                        }
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                ))}
                {members.length < 3 && (
                  <Button
                    variant="outline"
                    onClick={() => setMembers([...members, ""])}
                  >
                    Add Member
                  </Button>
                )}
              </div>

              <Button
                className="w-full"
                onClick={handleCreateTeam}
                disabled={members.length !== 3 || !teamName}
              >
                Create Team
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}