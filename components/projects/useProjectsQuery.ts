import { Query } from 'appwrite';
import { COLLECTION_PROJECTS_ID, DB_ID } from '~/app.constants';
import { options } from '@/utils/queryConfig';
import { useQuery } from '@tanstack/vue-query';

export  const  useProjectsQuery=()=> 
   useQuery(options(["projects"], async () => DB.listDocuments(DB_ID, COLLECTION_PROJECTS_ID, [Query.limit(150), Query.orderDesc("create_date")])))

