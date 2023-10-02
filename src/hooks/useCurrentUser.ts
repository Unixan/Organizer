import { create } from "zustand";
import { User } from "../model/interfaces";

interface currentUser {
  user: User | null;
  setUser: (User: User) => void;
  clearUser: () => void;
}

const useCurrentUser = create<currentUser>((set) => ({
  user: null,
  setUser: (User) => set(() => ({ user: User })),
  clearUser: () => set(() => ({ user: null })),
}));

export default useCurrentUser;
