import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";

export default async function Hero() {
  const session = await auth();
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-20">
          <header className="flex justify-between items-center mb-16">
            <div className="text-2xl font-bold">Ksscode</div>
            {session && session?.user ? (
              <Button asChild variant="outline">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <Button asChild variant="outline">
                <Link href="/signin">Sign In</Link>
              </Button>
            )}
          </header>

          {/* Hero Content */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl animate-fade-up animate-once animate-duration-[800ms] animate-delay-200 animate-ease-in-out">
              Empower Your Team with Knowledge
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground animate-fade-up animate-once animate-duration-[800ms] animate-delay-300 animate-ease-in-out">
              Share skills, request help, and collaborate on projects - all in
              one place.
            </p>
            <div className="mt-10 flex justify-center animate-fade-up animate-once animate-duration-[800ms] animate-delay-400 animate-ease-in-out">
              <Button
                asChild
                size="lg"
                className="bg-black-200 text-white hover:bg-black-200/80"
              >
                <Link href="/get-started">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
