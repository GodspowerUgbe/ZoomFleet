import './globals.css'

export const metadata = {
  title: 'ZoomFleet | Premium Car Rental & Sales',
  description: 'Experience the ultimate in luxury and performance with our premium car rental and sales services. Curated for the elite. Rent exotic cars, supercars, luxury SUVs and more.',
  keywords: 'luxury car rental, exotic car rental, premium car sales, supercar rental, Ferrari rental, Porsche rental, Range Rover rental',
  authors: [{ name: 'ZoomFleet' }],
  openGraph: {
    title: 'ZoomFleet | Premium Car Rental & Sales',
    description: 'Experience the ultimate in luxury and performance with our premium car rental and sales services.',
    type: 'website',
    locale: 'en_US',
    siteName: 'ZoomFleet',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZoomFleet | Premium Car Rental & Sales',
    description: 'Experience the ultimate in luxury and performance with our premium car rental and sales services.',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: '',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className="bg-background-light dark:bg-background-dark font-display text-charcoal dark:text-gray-100">
        {children}
      </body>
    </html>
  )
}