"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog"
import { Label } from "../ui/label"
import { useSettings } from "@/hooks/use-settings"
import { ModeToggle } from "../mode-toggle"

export const SettingsModal = () => {
  const settings = useSettings()

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">My Settings</h2>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-y-1">
              <Label>Appearance</Label>
              <span className="text-xs text-muted-foreground">
                Customize how the app looks on your device.
              </span>
            </div>
            <ModeToggle />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )  
}