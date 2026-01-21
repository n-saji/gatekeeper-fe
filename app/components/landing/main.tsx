import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Main() {
  return (
    <main className="flex flex-col items-center justify-center p-8 mt-12 lg:mt-0 md:p-12 lg:p-24 flex-1">
      <div className="space-y-4 md:space-y-8 flex flex-col justify-center items-center text-center">
        <Label className="text-sm md:text-xl font-extralight tracking-wide text-muted-foreground">
          INTRODUCING GATEKEEPER
        </Label>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-linear-to-r from-green-500 to-blue-600 bg-clip-text text-transparent p-4">
          Gatekeeper: Your Ultimate Access Management Solution
        </h1>
        <p className="text-lg md:text-2xl font-light max-w-3xl text-muted-foreground">
          Gatekeeper is a cutting-edge access management system designed to
          provide secure and efficient control over user permissions and
          resources. With Gatekeeper, you can easily manage access rights,
          monitor user activities, and ensure compliance with security policies.
        </p>
        <Link href="/get-started">
          <Button size="lg" className="px-8 py-4 mt-4">
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
