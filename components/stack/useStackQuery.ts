import { Query } from 'appwrite';
import { COLLECTION_STACK_ID, DB_ID } from '~/app.constants';
import { options } from '@/utils/queryConfig';
import { useQuery } from '@tanstack/vue-query';

export  const  useStackQuery=()=> 
   useQuery(options(["stack"], async () => DB.listDocuments(DB_ID, COLLECTION_STACK_ID, [Query.limit(150)])))

