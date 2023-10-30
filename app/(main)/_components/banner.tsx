"use client";

import { Id } from "@/convex/_generated/dataModel";
import { useRouter } from "next/navigation";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/modals/confirm-modal";
import { Trash, Undo } from "lucide-react";

interface BannerProps {
  documentId: Id<"documents">;
}

export const Banner = ({ documentId }: BannerProps) => {
  const router = useRouter();
  const remove = useMutation(api.documents.remove);
  const restore = useMutation(api.documents.restore);

  const handleOnRemove = () => {
    const promise = remove({ id: documentId })

    toast.promise(promise, {
      loading: "Deleting document...",
      success: "Document deleted!",
      error: "Failed to delete document",
    });

    router.push("/documents");
  };

  const handleOnRestore = () => {
    const promise = restore({ id: documentId })      

    toast.promise(promise, {
      loading: "Restoring document...",
      success: "Document restored!",
      error: "Failed to restore document",
    });    
  };

  return (
    <div
      className="w-full bg-rose-500 text-center text-sm p-2
  text-white flex items-center gap-x-2 justify-center"
    >
      <p>This document is in the trash.</p>
      <Button
        variant="outline"
        size="sm"
        onClick={handleOnRestore}
        className="border-white bg-transparent hover:bg-primary/5
      text-white hover:text-white p-1 px-2 h-auto font-normal gap-x-2"
      >
        <Undo className="w-4 h-4" />        
        Restore
      </Button>
      <ConfirmModal onConfirm={handleOnRemove}>
        <Button
          variant="outline"
          size="sm"
          className="border-white bg-transparent hover:bg-primary/5
      text-white hover:text-white p-1 px-2 h-auto font-normal gap-x-2"
        >
          <Trash className="h-4 w-4" />
          Delete
        </Button>
      </ConfirmModal>
    </div>
  );
};
