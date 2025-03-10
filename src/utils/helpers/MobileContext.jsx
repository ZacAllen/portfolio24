"use client";
import { createContext, useContext } from "react";

export const MobileContext = createContext(null);

export function MobileProvider({ children, isMobile }) {
  return <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>;
}

export function useMobile() {
  return useContext(MobileContext);
}
