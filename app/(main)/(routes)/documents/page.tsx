"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { FileWarning, PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api"
import { toast } from "sonner";

const DocumentsPage = () => {
  const { user } = useUser()
  const create = useMutation(api.documents.create)

  const onCreate = () => {
    const promise = create({ title: "Untitled" })
    
    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note",
    })
  }

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <div className="flex flex-col items-center">
        <FileWarning size={96} className="text-zinc-500 dark:text-zinc-400" />
        <h1 className="text-2xl font-bold text-zinc-500 dark:text-zinc-400">
          Empty documents
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Welcome to {user?.firstName}&apos;s Notes
        </p>
        <Button onClick={onCreate} className="mt-4 bg-violet-500 hover:bg-violet-600">
          <PlusCircle className="mr-2 h-5 w-5" />
          Create a note
        </Button>
      </div>
    </div>
  );
};

export default DocumentsPage;
