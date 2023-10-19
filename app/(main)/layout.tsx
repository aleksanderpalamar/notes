"use client";

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./error";
import { Navigation } from "./_components/navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  switch (true) {
    case isLoading:
      return (
        <div className="h-full flex items-center justify-center">
          <Spinner size="lg" className="text-violet-500" />
        </div>
      );

    case !isAuthenticated:
      return redirect("/");
  }

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="h-full flex dark:bg-[#1f1f1f]">
          <Navigation />
          <main className="flex-1 h-full overflow-y-auto">{children}</main>
        </div>
      </ErrorBoundary>
    </>
  );
};

export default MainLayout;
