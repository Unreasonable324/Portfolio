import type { Models } from 'appwrite';

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
