import { Client, Account, Avatars, } from 'appwrite';

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1') // your endpoint
    .setProject('694b4f0000357ddc52a2');                   // your project ID

export const account = new Account(client);
export const avatars = new Avatars(client)
