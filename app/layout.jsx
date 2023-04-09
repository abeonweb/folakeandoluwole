import './globals.css'
import Navigation from "./components/Navigation"

export const metadata = {
  title: 'Folake and Oluwole',
  description: 'Wedding site for the lovely couple.',
}

export default function RootLayout({children,}) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
        </body>
    </html>
  )
}
