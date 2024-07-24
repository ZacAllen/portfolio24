import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { createTheme, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Margin from "./components/Margin";
import theme from "@/theme";
import "./globals.css";

export const metadata = {
  title: "Zach Allen - Frontend Dev",
  description: "Zach Allen Portfolio created in NextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <body>
            <Navbar />
            {/* Define consistent margin for all children of Layout */}
            <Margin children={children} />
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
