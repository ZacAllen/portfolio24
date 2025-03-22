import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import AppContainer from './AppContainer'
import { createTheme, ThemeProvider } from '@mui/material'
import theme from '@/theme'
import './globals.css'
import { headers } from 'next/headers'
// import { isMobile } from "react-device-detect";

export const metadata = {
  title: 'Zach Allen - Frontend Dev',
  description: 'Portfolio Site for Zach Allen, Atlanta-based Frontend Developer',
}

/* Layout contains all components of website pages denoted as children */
export default function RootLayout({ children }) {
  const headersList = headers()
  const userAgent = headersList.get('user-agent') || ''
  const isServerMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent)
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <body>
            <link rel="stylesheet" href="./globals.css" />
            <AppContainer children={children} isMobile={isServerMobile} />
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  )
}
