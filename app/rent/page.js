import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Rent Luxury Cars | ZoomFleet',
  description: 'Browse our premium fleet of luxury cars, exotic supercars, and high-performance vehicles available for rent. Daily, weekly, and monthly rentals available.',
  keywords: 'luxury car rental, exotic car rental, supercar rental, premium vehicle rental',
}

export default function RentPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-5xl font-900 text-charcoal dark:text-white mb-6">
            Rent <span className="text-primary">Luxury Cars</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            Browse our premium fleet of luxury vehicles
          </p>
          
          {/* Add your rent page content here */}
          <div className="bg-white dark:bg-charcoal rounded-xl p-8 border border-gray-200 dark:border-gray-800">
            <p className="text-gray-600 dark:text-gray-400">
              Your rental fleet content goes here...
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}