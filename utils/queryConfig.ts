import type { Models } from 'appwrite';
import type { UseQueryOptions } from '@tanstack/vue-query';

const queryConfig = {
  retry: 1,
  keepPreviousData: true,
  refetchOnWindowFocus: false,
};

type iOptions = UseQueryOptions<() => any, Models.DocumentList<Models.Document>, Models.DocumentList<Models.Document>>;

export const options = (key: any[], api: () => Promise<Models.DocumentList<Models.Document>>) =>
  new Object({ queryKey: key, queryFn: api, ...queryConfig }) as iOptions;
