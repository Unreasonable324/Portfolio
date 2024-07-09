import { Query } from 'appwrite';
import { COLLECTION_STACK_ID, DB_ID } from '~/app.constants';
import type { iSortingCategory, iStack } from '~/types';
import { options } from '@/utils/queryConfig';
import { useQuery } from '@tanstack/vue-query';

export const useStackQuery = () => useQuery(options(["stack"], async () => DB.listDocuments(DB_ID, COLLECTION_STACK_ID, [Query.limit(150)])));

export const sortingCategory = (items: iStack[]): iSortingCategory =>
  items.reduce<iSortingCategory>((acc, curr) => {
    acc[curr.category as keyof iSortingCategory] = [...(acc[curr.category as keyof iSortingCategory] || []), curr];
    return acc;
  }, {} as iSortingCategory);

export const sortLight = (items: iStack[]) => items.sort((a, b) => b.name.length - a.name.length);
