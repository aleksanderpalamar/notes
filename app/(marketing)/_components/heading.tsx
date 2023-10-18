"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  weight: ["400", "600", "800", "900"],
  subsets: ["latin"],
})

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:6xl font-bold">
        Your Ideas, Documents, & Plans. Unified. Welcome to
        <span className={cn(
          poppins.className,
          "underline ml-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-orange-500 font-extrabold"
        )}>
          Notes
        </span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notes is the connected workspace for your ideas, documents, and plans,
        faster work and better collaboration.
      </h3>
      <Button className="bg-violet-500 hover:bg-violet-600">
        Enter Notes
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};
