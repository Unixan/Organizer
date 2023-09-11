import { create } from "zustand";

interface privacyState {
  isPrivate: boolean;
  changeIsPrivate: () => void;
}

const usePrivacyState = create<privacyState>((set) => ({
  isPrivate: true,
  changeIsPrivate: () => set((state) => ({ isPrivate: !state.isPrivate })),
}));

export default usePrivacyState;
