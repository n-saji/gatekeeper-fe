import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignIn from "../_components/signIn";
import SignUp from "../_components/signUp";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeftCircle } from "lucide-react";

export default function GetStartedPage() {
  return (
    <div className="w-full h-full p-8">
      <div className="flex flex-col max-w-2xl mx-auto">
        <Link href={"/"} className="w-8 h-8 mb-4">
          <ArrowLeftCircle className="h-8 w-8 p-1" />
        </Link>
        <Tabs defaultValue="sign-in" className="max-w-2xl">
          <TabsList className="w-full">
            <TabsTrigger value="sign-in">Sign In</TabsTrigger>
            <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="sign-in">
            <SignIn />
          </TabsContent>
          <TabsContent value="sign-up">
            <SignUp />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
