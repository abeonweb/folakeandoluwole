import './globals.css'
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

export const metadata = {
  title: 'Folake and Oluwole',
  description: 'Wedding site for the lovely couple.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
