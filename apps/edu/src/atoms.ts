import { atom } from "jotai";
import { CourseType, type UserType } from "./types";

export const userAtom = atom<UserType | null>(null);

export const coursesAtom = atom<CourseType[]>([]);
