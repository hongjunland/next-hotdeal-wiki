import { WikiPage } from "@/types/Hotdeal/wiki";
import { atom } from "recoil";

export const wikiPageState = atom<WikiPage>({
    key: 'wikiPageState',
    default: {
        items: [],
        total: 0,
    },
  });

