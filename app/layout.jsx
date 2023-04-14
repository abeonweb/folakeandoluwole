import './globals.css'
import Navigation from "./components/Navigation"
import { Inter } from "next/font/google";

export const metadata = {
  title: 'Folake and Oluwole',
  description: 'Wedding site for the lovely couple.',
}

const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Navigation/>
        {children}
        </body>
    </html>
  )
}

