import { Account, Client, Databases, Storage } from 'appwrite';
import { APP_WRITE_ID, CV_ID, STORAGE_DOCS_ID } from '@/app.constants';

export const baseUrl='https://cloud.appwrite.io/v1'
export const cvLink= `${baseUrl}/storage/buckets/${STORAGE_DOCS_ID}/files/${CV_ID}/view?project=${APP_WRITE_ID}`
export const client = new Client();
client.setEndpoint(baseUrl).setProject(APP_WRITE_ID);

export const account = new Account(client);
export const DB = new Databases(client);
export const storage = new Storage(client);