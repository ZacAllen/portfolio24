"use client";

import Navbar from "./components/Navbar";
import Margin from "./components/Margin";
import { DarkModeContextProvider } from "@/utils/helpers/DarkModeContext";

const AppContainer = ({ children }) => {
  return (
    <>
      <DarkModeContextProvider>
        <Navbar />
        {/* Define consistent margin for all children of Layout */}
        <Margin children={children} />
      </DarkModeContextProvider>
    </>
  );
};

export default AppContainer;
