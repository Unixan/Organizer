import { create } from "zustand";

interface newUser {
  createNew: boolean;
  setCreateNew: () => void;
}

const useCreateNew = create<newUser>((set) => ({
  createNew: false,
  setCreateNew: () => set((state) => ({ createNew: !state.createNew })),
}));

export default useCreateNew;
