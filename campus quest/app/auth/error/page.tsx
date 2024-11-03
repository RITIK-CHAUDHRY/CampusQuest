import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function AuthError() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-background to-muted">
      <Card className="w-full max-w-md p-8">
        <div className="flex flex-col items-center space-y-6">
          <AlertTriangle className="h-12 w-12 text-destructive" />
          <h1 className="text-2xl font-bold text-center">Authentication Error</h1>
          <p className="text-center text-muted-foreground">
            Please ensure you are using your MNNIT email address (@mnnit.ac.in)
          </p>
          <Button asChild size="lg">
            <Link href="/auth/signin">Try Again</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}