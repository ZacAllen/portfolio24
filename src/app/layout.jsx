import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import AppContainer from "./AppContainer";
import { createTheme, ThemeProvider } from "@mui/material";
import theme from "@/theme";
import "./globals.css";

export const metadata = {
  title: "Zach Allen - Frontend Dev",
  description: "Zach Allen Portfolio created in NextJs",
};

/* Layout contains all components of website pages denoted as children */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <body>
            <link rel="stylesheet" href="./globals.css" />
            <AppContainer children={children} />
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
