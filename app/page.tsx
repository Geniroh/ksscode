import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Leaderboard } from "@/components/leaderboard";
import { CTA } from "@/components/cta";
import Hero from "@/components/hero";

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Leaderboard />
      <CTA />
    </main>
  );
}
