import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client()
  .setPlatform("dev.sheflie.netninja")
  .setProject("68542275000337b4407d"); // Replace with your project ID

export const account = new Account(client);
export const avatars = new Avatars(client);

// 68542275000337b4407d// Replace with your project ID
// 68555c56000d919b7d04
// dev.sheflie.netninja
