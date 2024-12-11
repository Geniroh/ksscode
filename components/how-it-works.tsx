"use client";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const steps = [
  {
    name: "Request Help",
    description:
      "Identify areas where you need assistance or want to learn more.",
  },
  {
    name: "Share Knowledge",
    description:
      "Contribute your expertise by sharing insights and resources with your team.",
  },
  {
    name: "Collaborate",
    description: "Work on projects together to apply and expand your skills.",
  },
  {
    name: "Grow Together",
    description:
      "Track progress, provide feedback, and celebrate team achievements.",
  },
];

export function HowItWorks() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className="bg-muted/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2
            className={`text-base font-semibold leading-7 text-primary ${
              isInView ? "animate-fade-up" : "opacity-0"
            } animate-once animate-duration-[800ms] animate-ease-in-out`}
          >
            How It Works
          </h2>
          <p
            className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${
              isInView ? "animate-fade-up animate-delay-100" : "opacity-0"
            } animate-once animate-duration-[800ms] animate-ease-in-out`}
          >
            Simple steps to foster a culture of learning
          </p>
          <p
            className={`mt-6 text-lg leading-8 text-muted-foreground ${
              isInView ? "animate-fade-up animate-delay-200" : "opacity-0"
            } animate-once animate-duration-[800ms] animate-ease-in-out`}
          >
            Ksscode makes it easy for your team to engage in continuous learning
            and collaboration.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <ol className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-y-16">
            {steps.map((step, stepIdx) => (
              <li
                key={step.name}
                className={`relative flex flex-col gap-6 pl-9 pb-6 lg:pb-0 ${
                  isInView ? "animate-fade-up" : "opacity-0"
                } animate-once animate-duration-[800ms] animate-ease-in-out`}
                style={{ animationDelay: `${(stepIdx + 1) * 100 + 200}ms` }}
              >
                <div className="flex items-center mb-2">
                  <span className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                    {stepIdx + 1}
                  </span>
                  <h3 className="text-base font-semibold leading-7">
                    {step.name}
                  </h3>
                </div>
                <p className="text-base leading-7 text-muted-foreground">
                  {step.description}
                </p>
                {stepIdx < steps.length - 1 && (
                  <ArrowRight className="absolute bottom-0 left-3.5 h-6 w-6 text-muted-foreground/50 lg:bottom-auto lg:left-auto lg:right-0 lg:top-3" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
