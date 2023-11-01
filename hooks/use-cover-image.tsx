import { create } from "zustand";

type CoverImageProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useCoverImage = create<CoverImageProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));