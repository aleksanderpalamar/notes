"use client"

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Loader2 } from "lucide-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

export const Navbar = () => {
  const {isAuthenticated, isLoading} = useConvexAuth();
  const scrolled = useScrollTop();  

  return (
    <div className={cn(
      "z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full p-6",
      scrolled && "border-b shadow-sm"
    )}>      
      <Logo />  
      <div className="md:ml-auto md:justify-end justify-between
      w-full flex items-center gap-x-2">
        {isLoading && (
          <Spinner size="default" className="text-violet-500"/>
        )}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>              
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">
                Get Notes Free
              </Button>              
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">
                Enter Notes
              </Link>
            </Button>
            <UserButton 
              afterSignOutUrl="/"
            />
          </>
        )}        
        <ModeToggle />
      </div>    
    </div>
  )
}