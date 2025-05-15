import './globals.css'
import { Suspense } from 'react'

export const metadata = {
  title: 'QuickPick',
  description: 'A Mini E-Commerce Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-2">
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}