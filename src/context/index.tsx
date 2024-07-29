"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  isSent: boolean;
  setIsSent: (isSent: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isSent, setIsSent] = useState(false);

  return (
    <AppContext.Provider value={{ isSent, setIsSent }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
