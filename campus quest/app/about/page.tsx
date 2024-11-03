import { Card } from "@/components/ui/card";
import { MapPin, Heart, Code, Mail } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">About MNNIT Hunt</h1>
        <p className="text-xl text-muted-foreground">
          A unique treasure hunt experience for MNNIT students
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="p-6">
          <div className="flex flex-col items-center space-y-4">
            <MapPin className="h-12 w-12 text-primary" />
            <h2 className="text-xl font-semibold">Our Mission</h2>
            <p className="text-center text-muted-foreground">
              To create an engaging and interactive way for students to explore the
              rich history and hidden gems of MNNIT campus while building
              connections with fellow students.
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex flex-col items-center space-y-4">
            <Heart className="h-12 w-12 text-primary" />
            <h2 className="text-xl font-semibold">Why We Built This</h2>
            <p className="text-center text-muted-foreground">
              We believe that the best way to experience our campus is through
              adventure and discovery. This platform combines technology with
              exploration to create unforgettable memories.
            </p>
          </div>
        </Card>
      </div>

      <Card className="p-6 mb-12">
        <div className="flex flex-col items-center space-y-6">
          <Code className="h-12 w-12 text-primary" />
          <h2 className="text-xl font-semibold">Technical Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Frontend</h3>
              <p className="text-muted-foreground">
                Built with Next.js, React, and TailwindCSS
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Backend</h3>
              <p className="text-muted-foreground">
                Powered by Node.js and MongoDB
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Real-time</h3>
              <p className="text-muted-foreground">
                WebSocket integration for live updates
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex flex-col items-center space-y-4">
          <Mail className="h-12 w-12 text-primary" />
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="text-center text-muted-foreground">
            Have questions or suggestions? Reach out to us at{" "}
            <a
              href="mailto:support@mnnithunt.com"
              className="text-primary hover:underline"
            >
              support@mnnithunt.com
            </a>
          </p>
        </div>
      </Card>
    </div>
  );
}