import type { Models } from 'appwrite';
import type {
  ComposerTranslation,
  LocaleMessages,
  VueMessageType,
} from 'vue-i18n';

export interface iProject {
  name: string;
  description: string;
  stack: string[];
  time_spent: string;
  create_date: string;
  images: string[];
}
export type iStack = Models.Document & stack;
interface stack {
  id: string;
  category: string;
  icon: string;
  name: string;
}
export interface iNav {
  label: string;
  to: string;
  hash: string;
}
export type t = ComposerTranslation<
{
  [x: string]: LocaleMessages<VueMessageType>;
},
string,
never,
string,
string
>
type category = "Design" | "Other" | "Database" | "Framework" | "Platform" | "Language" | "Library"
export type iSortingCategory = {
  [key in category]: iStack[];
};