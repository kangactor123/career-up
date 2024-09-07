import { atom } from "recoil";
import { MyNetworkType } from "./types";

export const myNetworkAtom = atom<MyNetworkType | null>({
  key: "my-network",
  default: null,
});
