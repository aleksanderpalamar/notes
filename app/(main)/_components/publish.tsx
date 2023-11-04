"use client";

import { Doc } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useOrigin } from "@/hooks/use-origin";
import { useMutation } from "convex/react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Check, CopyCheck, CopyIcon, Globe } from "lucide-react";

interface PublishProps {
  initialData: Doc<"documents">;
}

export const Publish = ({ initialData }: PublishProps) => {
  const origin = useOrigin();
  const update = useMutation(api.documents.update);

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const url = `${origin}/preview/${initialData._id}`;

  const handleOnPublish = () => {
    setIsSubmitting(true);

    const promise = update({
      id: initialData._id,
      isPublished: true,
    }).finally(() => setIsSubmitting(false));

    toast.promise(promise, {
      loading: "Publishing...",
      success: "Document published!",
      error: "Failed to publish document",
    });
  };

  const handleOnUnpublish = () => {
    setIsSubmitting(true);

    const promise = update({
      id: initialData._id,
      isPublished: false,
    }).finally(() => setIsSubmitting(false));

    toast.promise(promise, {
      loading: "Unpublishing...",
      success: "Document unpublished!",
      error: "Failed to unpublish document",
    });
  };

  const handleOnCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="text-muted-foreground hover:text-accent-foreground"
          size="sm"
          variant="ghost"
        >
          Publish
          {initialData.isPublished && (
            <Globe className="ml-2 h-4 w-4 text-emerald-500" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72" align="end" alignOffset={8} forceMount>
        {initialData.isPublished ? (
          <div className="space-y-4">
            <div className="flex items-center gap-x-2">
              <Globe className="h-4 w-4 text-emerald-500 animate-pulse" />
              <p className="text-xs font-medium text-muted-foreground">This document is published on web</p>              
            </div>
            <div className="flex items-center">
              <input 
                value={url}
                className="flex-1 px-2 text-xs border rounded-l-md h-8
                bg-muted truncate"
                disabled
              />
              <Button
                className="bg-transparent border-violet-500 hover:bg-violet-200 hover:text-violet-500 
                w-10 rounded-l-none h-8"
                variant="outline"
                size="sm"
                onClick={handleOnCopy}
                disabled={copied}
              >
                {copied ? <CopyCheck className="h-5 w-5 text-emerald-500" /> : <CopyIcon className="h-5 w-5" />}
              </Button>
            </div>
            <Button
              className="bg-violet-500 hover:bg-violet-600 w-full text-xs"
              size="sm"
              disabled={isSubmitting}
              onClick={handleOnUnpublish}
            >
              Unpublish
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <Globe className="h-8 w-8 text-muted-foreground mb-2" />
            <p className="text-sm font-medium mb-2">Publish this document</p>
            <span className="text-xs text-muted-foreground mb-4">
              Share your work with others.
            </span>
            <Button
              className="bg-violet-500 hover:bg-violet-600 w-full text-xs"
              size="sm"
              disabled={isSubmitting}
              onClick={handleOnPublish}
            >
              Publish
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};
