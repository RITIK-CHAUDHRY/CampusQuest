"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <MapPin className="h-6 w-6" />
              <span className="font-bold text-lg">MNNIT Hunt</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {status === "authenticated" ? (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/rules">Rules</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/about">About</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/play">Let's Play</Link>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => signOut({ callbackUrl: "/" })}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Button asChild>
                <Link href="/auth/signin">Sign In</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}