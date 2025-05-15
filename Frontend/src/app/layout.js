import './globals.css'

export const metadata = {
  title: 'QuickPick',
  description: 'A Mini E-Commerce Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-2">
        {children}
      </body>
    </html>
  )
}