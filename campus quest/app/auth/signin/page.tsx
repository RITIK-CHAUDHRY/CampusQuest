"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function SignIn() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-background to-muted">
      <Card className="w-full max-w-md p-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">MNNIT Hunt</h1>
          </div>
          <p className="text-center text-muted-foreground">
            Sign in with your MNNIT email to start the adventure
          </p>
          <Button
            size="lg"
            className="w-full"
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          >
            Sign in with Google
          </Button>
          <p className="text-sm text-muted-foreground">
            Only @mnnit.ac.in emails are allowed
          </p>
        </div>
      </Card>
    </div>
  );
}