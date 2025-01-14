import { create } from "zustand";

interface useModalProps {
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
  setIsOpen: (bool: boolean) => void;
}

export const useModal = create<useModalProps>((set) => {
  return {
    isOpen: false,
    setOpen: () => set(() => ({ isOpen: true })),
    setClose: () => set(() => ({ isOpen: false })),
    setIsOpen: (bool) => set(() => ({ isOpen: bool })),
  };
});
