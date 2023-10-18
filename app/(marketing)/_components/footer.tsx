"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <div className="flex items-center w-full p-6
    bg-background z-50 dark:bg-[#1f1f1f]">
      <Logo />
      <div
        className="md:ml-auto w-full justify-between
      md:justify-end flex items-center gap-x-2
      text-muted-foreground"
      >
        <p className="text-xs text-zinc-500 font-medium">
          copyright © {new Date().getFullYear()}
          <span className="text-violet-500 ml-2">
            Palamar
            <span className="text-zinc-950 font-black">.</span>
            Dev
          </span>
        </p>
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};
