import { atom } from "jotai";
import { DEFAULT_ENGINE } from "../data/engines";

export const engineAtom = atom<string>(DEFAULT_ENGINE)