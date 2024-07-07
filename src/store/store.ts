import {create} from "zustand";
import {GithubDataItems} from "../types/types";

interface CardStore {
    card: GithubDataItems
    updateCard: (newCard: GithubDataItems) => void;
}


export const useCardStore = create<CardStore>((set) => ({
    card: {} as GithubDataItems,
    updateCard: (newCard: GithubDataItems) => set({ card: newCard }),
}))