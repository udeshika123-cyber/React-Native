import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createContext, useState } from "react";

export const UserContext = createContext();
export function UserProvider({ children }) {
  const [user, setUser] = React.useState(null);

  async function login(email, password) {}

  async function register(email, password) {}

  async function logout() {}
  return (
    <UserContext.Provider value={{ user, setUser, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
}
