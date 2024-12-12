import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "@/auth";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function SigninPage() {
  return (
    <section className="w-full h-full min-h-screen flex items-center justify-center">
      <Card className="w-[350px]">
        <div className="flex items-center justify-start p-5">
          <Link
            href={"/"}
            className="text-xs cursor-pointer flex items-center gap-1"
          >
            <ChevronLeft size={12} />
            Back
          </Link>
        </div>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl md:text-3xl">KSSCODE</CardTitle>
          <CardDescription className="">Create an account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            action={async () => {
              "use server";

              await signIn("google");
            }}
          >
            <div className="grid w-full items-center gap-4">
              <div>
                <Button
                  variant="outline"
                  className="w-full hover:text-white hover:bg-black"
                  size="lg"
                >
                  <FcGoogle />
                  Sign in with Google
                </Button>
              </div>
              <div className="flex flex-col space-y-1.5"></div>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
