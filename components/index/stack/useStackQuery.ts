import { COLLECTION_STACK_ID, DB_ID } from '~/app.constants';
import { useQuery } from '@tanstack/vue-query';

export async function useStackQuery() {
  return await useQuery({
    queryKey: ["stack"],
    queryFn: async () => DB.listDocuments(DB_ID, COLLECTION_STACK_ID),
  });
}

