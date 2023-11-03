"use client"

import {
  BlockNoteEditor,
  PartialBlock
} from "@blocknote/core"
import {
  BlockNoteView,
  useBlockNote
} from "@blocknote/react"
import "@blocknote/core/style.css"
import { useTheme } from "next-themes"

import { useEdgeStore } from "@/lib/edgestore"

interface EditorProps {
  initialContent?: string
  onChange: (value: string) => void
  editable?: boolean
}

const Editor = ({
  initialContent,
  onChange,
  editable
}: EditorProps) => {
  const { resolvedTheme } = useTheme()
  const { edgestore } = useEdgeStore()

  const handleUpload = async (file: File) => {
    const res = await edgestore.publicFiles.upload({
      file
    })

    return res.url
  }

  const editor: BlockNoteEditor = useBlockNote({
    initialContent: initialContent ? JSON.parse(initialContent) as PartialBlock[] : undefined,
    editable,
    onEditorContentChange: (editor) => {
      onChange(JSON.stringify(editor.topLevelBlocks, null, 2))      
    },
    uploadFile: handleUpload
  })
  return (
    <div>
      <BlockNoteView 
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    </div>
  )
}

export default Editor