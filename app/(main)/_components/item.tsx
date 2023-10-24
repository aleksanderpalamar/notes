"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { ChevronDown, ChevronRight, LucideIcon, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type ItemProps = {
  id?: Id<"documents">;
  documentIcon?: string;
  active?: boolean;
  expanded?: boolean;
  isSearch?: boolean;
  level?: number;
  onExpand?: () => void;
  label: string;
  icon: LucideIcon;
  onClick: () => void;
};

export const Item = ({
  id,
  label,
  icon: Icon,
  onClick,
  documentIcon,
  active,
  expanded,
  isSearch,
  level = 0,
  onExpand,
}: ItemProps) => {
  const router = useRouter()
  const create = useMutation(api.documents.create)

  const handleExpand = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
     e.stopPropagation();
     onExpand?.();   
  }

  const handleOnCreate = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (!id) return
    const promise = create({ title: "Untitled", parentDocument: id })
      .then((documentId) => {
        if (!expanded) {
          onExpand?.();
        }
        //router.push(`/documents/${documentId}`)
      })
      
      toast.promise(promise, {
        loading: "Creating a new note...",
        success: "New note created!",
        error: "Failed to create a new note",
      })
  }

  const ChevronIcon = expanded ? ChevronDown : ChevronRight;

  return (
    <div
      role="button"
      onClick={onClick}
      style={{
        paddingLeft: level ? `${level * 12 + 12}px` : "12px",
      }}
      className={cn(
        "group min-h-[0.75rem] text-sm py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground",
        active && "bg-primary/5 text-primary"
      )}
    >
      {!!id && (
        <div
          role="button"
          className="h-full rounded-sm hover:bg-neutral-300
        dark:bg-neutral-600 dark:hover:bg-neutral-500 mr-1"
          onClick={handleExpand}
        >
          <ChevronIcon 
            className="h-4 w-4 shrink-0 text-muted-foreground/50"
          />
        </div>
      )}      
      {documentIcon ? (
        <div className="shrink-0 text-[18px] mr-2">
          {documentIcon}
        </div>
      ): (
        <>          
          <Icon className="shrink-0 h-[18px] mr-2 text-muted-foreground" />
        </>
      )}
      <span className="truncate">{label}</span> 
      {isSearch && (
        <kbd className="ml-auto pointer-events-none inline-flex h-5
        select-none items-center gap-1 rounded bg-muted px-1.5
        font-mono text-[10px] font-medium text-muted-foreground
        opacity-100">
          <span className="text-xs">⌘</span>k
        </kbd>
      )}
      {!!id && (
        <div className="ml-auto flex items-center gap-x-2">
          <div 
          role="button"
          onClick={handleOnCreate}
          className="opacity-0 group-hover:opacity-100 h-full ml-auto
          rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600">
            <Plus className="h-4 w-4 text-muted-foreground"/>
          </div>
        </div>
      )}           
    </div>
  );
};

Item.Skeleton = function ItemSkeleton({ level }: { level?: number }) {
  return (
    <div style={{
      paddingLeft: level ? `${(level * 12) + 25}px` : "12px",
    }}
    className="flex gap-x-2 py-[3px]"
    >
      <Skeleton 
        className="w-4 h-4"
      />
      <Skeleton 
        className="w-[30%] h-4"
      />
    </div>
  )
}