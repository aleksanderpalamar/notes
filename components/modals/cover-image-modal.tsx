"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog"

import { useCoverImage } from "@/hooks/use-cover-image"
import { SingleImageDropzone } from "../single-image-dropzone"
import { useState } from "react"
import { useEdgeStore } from "@/lib/edgestore"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { useParams } from "next/navigation"
import { Id } from "@/convex/_generated/dataModel"

export const CoverImageModal = () => {
  const [file, setFile] = useState<File>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const coverImage = useCoverImage()
  const { edgestore } = useEdgeStore()
  const update = useMutation(api.documents.update)
  const params = useParams()

  const handleOnClose = () => {
    setFile(undefined)
    setIsSubmitting(false)
    coverImage.onClose()
  }

  const handleOnChange = async (file?: File) => {
    if (file) {
      setIsSubmitting(true)
      setFile(file)

      const res = await edgestore.publicFiles.upload({
        file,
      })

      await update({
        id: params.documentId as Id<"documents">,
        coverImage: res.url
      })

      handleOnClose()
    }
  }

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-lg font-semibold items-center">Cover Image</h2>
        </DialogHeader>
        <div>
          <p className="text-sm text-muted-foreground">
            Select an image to use as your cover image
          </p>
          <SingleImageDropzone 
            onChange={handleOnChange} 
            disabled={isSubmitting}
            value={file}
            className="w-full outline-none" 
          />
        </div>
      </DialogContent>      
    </Dialog>
  )
}