// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
import { createContext, useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";

export const UserContext = createContext();
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authChecked, serAuthChecked] = useState(false);

  async function login(email, password) {
    try {
      // await account.deleteSession("current");
      await account.createEmailPasswordSession(email, password);

      const response = await account.get();
      setUser(response);
    } catch (err) {
      console.error("Login Error:", err);
      throw err;
    }
  }

  async function register(email, password) {
    try {
      await account.create(ID.unique(), email, password);
      await login(email, password);
    } catch (error) {
      throw error(error.message);
    }
  }

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
  }
  async function getIntialUserValue() {
    try {
      const response = await account.get();
      setUser(response);
    } catch (err) {
      setUser(null);
    } finally {
      serAuthChecked(true);
    }
  }

  useEffect(() => {
    getIntialUserValue();
  }, []);
  return (
    <UserContext.Provider
      value={{ user, setUser, login, register, logout, authChecked }}
    >
      {children}
    </UserContext.Provider>
  );
}
