"use client";
import { CheckCircle, Users, BookOpen, Rocket } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const features = [
  {
    name: "Help Request System",
    description:
      "Easily request assistance or learning opportunities in specific areas.",
    icon: CheckCircle,
  },
  {
    name: "Knowledge Sharing",
    description:
      "Share insights, resources, or tutorials on new skills with your team.",
    icon: BookOpen,
  },
  {
    name: "Collaboration",
    description:
      "Work together on meaningful projects to foster growth and innovation.",
    icon: Users,
  },
  {
    name: "Skill Development",
    description:
      "Track your progress and enhance your skills through continuous learning.",
    icon: Rocket,
  },
];

export function Features() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2
            className={`text-base leading-7 font-light ${
              isInView ? "animate-fade-up" : "opacity-0"
            } animate-once animate-duration-[800ms] animate-ease-in-out`}
          >
            Empower Your Team
          </h2>
          <p
            className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${
              isInView ? "animate-fade-up animate-delay-100" : "opacity-0"
            } animate-once animate-duration-[800ms] animate-ease-in-out`}
          >
            Everything you need to boost knowledge sharing
          </p>
          <p
            className={`mt-6 text-lg leading-8 text-muted-foreground ${
              isInView ? "animate-fade-up animate-delay-200" : "opacity-0"
            } animate-once animate-duration-[800ms] animate-ease-in-out`}
          >
            Ksscode provides a comprehensive set of tools to facilitate skill
            development and collaboration within your team.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className={`relative pl-16 ${
                  isInView ? "animate-fade-up" : "opacity-0"
                } animate-once animate-duration-[800ms] animate-ease-in-out`}
                style={{ animationDelay: `${(index + 1) * 100 + 200}ms` }}
              >
                <dt className="text-base font-semibold leading-7">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
