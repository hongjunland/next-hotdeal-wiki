import { Wiki, WikiPage } from "@/types/Hotdeal/RecentWiki";
import { atom } from "recoil";

export const wikiPageState = atom<WikiPage>({
    key: 'wikiPageState',
    default: {
        items: [],
        total: 0,
    },
  });
