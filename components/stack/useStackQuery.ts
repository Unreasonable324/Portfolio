import { Query } from 'appwrite';
import { COLLECTION_STACK_ID, DB_ID } from '~/app.constants';
import { useQuery } from '@tanstack/vue-query';

export async function useStackQuery(page: any) {
  return await useQuery({
    queryKey: ["stack", page],
    queryFn: async () => DB.listDocuments(DB_ID, COLLECTION_STACK_ID, [Query.limit(1), Query.offset(page.value)]),
  });
}

