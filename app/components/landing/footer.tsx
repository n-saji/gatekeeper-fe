import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import GateKeeperLogo from "@/app/asset/icons/gatekeeper.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col px-8 md:px-16 bg-foreground">
      <div className="w-full flex flex-col justify-start py-8">
        <div className="flex items-center py-8">
          <Image
            src={GateKeeperLogo}
            alt="gatekeeper logo"
            width={50}
            height={50}
          />
          <Label className="text-lg tracking-wide font-semibold ml-4 text-background">
            GateKeeper
          </Label>
        </div>
        <Label className="text-lg tracking-wide font-light text-background">
          Your Ultimate Access Management Solution
        </Label>
      </div>
      <Separator orientation="horizontal" className="bg-muted-foreground" />
      <div className="w-full flex items-center justify-between mx-auto py-8">
        <Label className="text-background">
          &copy; 2026 Gatekeeper. All rights reserved.
        </Label>
        <div className="text-background">
          <Button variant={"ghost"}>Privacy Policy</Button>
          <Button variant={"ghost"}>Contact Us</Button>
        </div>
      </div>
    </footer>
  );
}
