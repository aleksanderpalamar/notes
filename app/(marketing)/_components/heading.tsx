"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

const poppins = Poppins({
  weight: ["400", "600", "800", "900"],
  subsets: ["latin"],
});

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:6xl font-bold">
        Your Ideas, Documents, & Plans. Unified. Welcome to
        <span
          className={cn(
            poppins.className,
            "underline ml-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-orange-500 font-extrabold"
          )}
        >
          Notes
        </span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notes is the connected workspace for your ideas, documents, and plans,
        faster work and better collaboration.
      </h3>
      {isLoading && (
        <div className="flex items-center justify-center w-full">
          <Spinner size="lg" className="text-violet-500" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button className="bg-violet-500 hover:bg-violet-600" asChild>
          <Link href="/documents">
            Enter Notes
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button className="bg-violet-500 hover:bg-violet-600">
            Get Notes Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
