import { Client, Account, Avatars, Databases } from "react-native-appwrite";

export const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setPlatform("dev.netninja.sheflie")
  .setProject("68542275000337b4407d"); // Replace with your project ID

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
// 68542275000337b4407d// Replace with your project ID
// 68555c56000d919b7d04 //database ID
// 685803b40012328533bc //collection ID
