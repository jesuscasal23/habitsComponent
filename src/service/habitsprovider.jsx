import React from "react";
import HabitsProvider from "./habits";

export default function DataContextProvider({ children }) {
  return <HabitsProvider>{children}</HabitsProvider>;
}
