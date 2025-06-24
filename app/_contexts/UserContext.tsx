"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { userDefaultSection } from "@/app/_utils/constants";

type UserContextType<T> = {
  curSection: T;
  setCurSection: Dispatch<SetStateAction<T>>;
};

const UserContext = createContext<UserContextType<string> | undefined>(
  undefined
);

function UserProvider({ children }: { children: React.ReactNode }) {
  const [curSection, setCurSection] = useState(userDefaultSection[0]);

  return (
    <UserContext.Provider value={{ curSection, setCurSection }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("UserContext was used outside provider!");

  return context;
}

export { UserProvider, useUser };
