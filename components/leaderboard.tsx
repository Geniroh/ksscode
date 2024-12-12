"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

export function Leaderboard() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            className={`text-3xl font-bold tracking-tight sm:text-4xl ${
              isInView ? "animate-fade-up" : "opacity-0"
            } animate-once animate-duration-[800ms] animate-ease-in-out`}
          >
            Top Contributors
          </h2>
          <p
            className={`mt-6 text-lg leading-8 text-muted-foreground ${
              isInView ? "animate-fade-up animate-delay-100" : "opacity-0"
            } animate-once animate-duration-[800ms] animate-ease-in-out`}
          >
            Recognize and celebrate the most active members of your community.
            Points are awarded for knowledge sharing, helping others, and
            collaborative contributions.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div
            className={`relative lg:order-last lg:col-span-5 ${
              isInView ? "animate-fade-left" : "opacity-0"
            } animate-once animate-duration-[800ms] animate-delay-300 animate-ease-in-out`}
          >
            <Image
              src="/images/leaderboard.png"
              alt="Leaderboard"
              width={400}
              height={400}
              className="aspect-[4/3] rounded-2xl object-cover"
            />
          </div>
          <div
            className={`max-w-xl text-base leading-7 lg:col-span-7 ${
              isInView ? "animate-fade-right" : "opacity-0"
            } animate-once animate-duration-[800ms] animate-delay-300 animate-ease-in-out`}
          >
            <ul role="list" className="mt-8 space-y-8 text-muted-foreground">
              <li className="flex gap-x-3">
                <span className="mt-1 h-5 w-5 flex-none rounded-full bg-black" />
                <span>
                  <strong className="font-semibold text-foreground">
                    Knowledge Sharing:
                  </strong>{" "}
                  Earn points for creating and sharing valuable content,
                  tutorials, and resources.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span className="mt-1 h-5 w-5 flex-none rounded-full bg-black" />
                <span>
                  <strong className="font-semibold text-foreground">
                    Helping Others:
                  </strong>{" "}
                  Get rewarded for answering questions and assisting team
                  members with their learning goals.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span className="mt-1 h-5 w-5 flex-none rounded-full bg-black" />
                <span>
                  <strong className="font-semibold text-foreground">
                    Collaborative Projects:
                  </strong>{" "}
                  Gain recognition for initiating and participating in team
                  projects that foster skill development.
                </span>
              </li>
            </ul>
            <Button
              className="mt-8 text-white bg-black hover:bg-black/80"
              size="lg"
            >
              View Full Leaderboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
