import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <div className="bg-black text-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to boost your team&apos;s skills?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/80">
            Start your journey with Ksscode today and unlock the full potential
            of your team&apos;s knowledge and skills.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" variant="secondary">
              <Link href="/get-started">Get started</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/learn-more">Learn more</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
