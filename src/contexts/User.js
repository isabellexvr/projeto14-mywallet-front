import React, { createContext, useState, useContext } from "react";

const UsernameContext = createContext();

export default function UsernameProvider({ children }) {
  const [username, setUsername] = useState("");

  return (
    <UsernameContext.Provider value={{ username, setUsername }}>
      {children}
    </UsernameContext.Provider>
  );
}

export function useUsername() {
  const context = useContext(UsernameContext);
  const { username, setUsername } = context;
  return { username, setUsername };
}
