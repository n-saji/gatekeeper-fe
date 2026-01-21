import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Main() {
  return (
    <main className="flex flex-col items-center justify-center p-24">
      <div className="space-y-8 flex flex-col justify-center items-center text-center">
        <Label className="text-xl font-extralight tracking-wide text-muted-foreground">
          INTRODUCING GATEKEEPER
        </Label>
        <h1 className="text-8xl font-bold bg-linear-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
          Gatekeeper: Your Ultimate Access Management Solution
        </h1>
        <p className="text-2xl font-light max-w-3xl text-muted-foreground">
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
