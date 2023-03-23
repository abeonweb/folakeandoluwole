import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
