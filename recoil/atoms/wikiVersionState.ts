import { Wiki, WikiVersion } from "@/types/Hotdeal/RecentWiki";
import { atom } from "recoil";

export const wikiVersionState = atom<WikiVersion>({
  key: "wikiVersion",
  default: {
    id: "",
    title: "",
    content: "",
    wiki: {
      id: "",
      title: "",
      content: "",
      createdAt: "",
      updatedAt: "",
      versions: [],
    },
    diff: null,
    createdAt: "",
    updatedAt: "",
  },
});
