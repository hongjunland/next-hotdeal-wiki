import { Wiki } from "@/types/Hotdeal/wiki";
import { atom } from "recoil";

export const wikiState = atom<Wiki>({
    key: 'wikiState',
    default: {
        id: '',
        title: '',
        content: '',
        createdAt: '',
        updatedAt: '',
        versions: [],
    },
  });
