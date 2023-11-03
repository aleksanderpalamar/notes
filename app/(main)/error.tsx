"use client";

import { Button } from "@/components/ui/button";
import { LucideFileWarning, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  const router = useRouter();

  const handlePushToHome = () => {
    router.push("/");
  };

  return (
    <div
      role="alert"
      className="h-full w-full flex flex-col items-center justify-center space-y-4"
    >
      <LucideFileWarning size={96} className="text-rose-500" />
      <h1 className="text-2xl font-bold text-violet-500">
        Something went wrong:
      </h1>
      <pre className="text-sm text-zinc-500">
        Error:{" "}
        <span className="text-rose-500">{error.message}</span>
      </pre>
      <Button
        onClick={resetErrorBoundary || handlePushToHome}
        variant="ghost"
        size="sm"
        className="text-zinc-500"
      >
        Try again
        <RefreshCw className="ml-2 h-4 w-4" />        
      </Button>
    </div>
  );
};

export default ErrorFallback;
