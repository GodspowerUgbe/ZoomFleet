import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contact Us | ZoomFleet',
  description: 'Get in touch with ZoomFleet for luxury car rentals, vehicle sales inquiries, or customer support. Our team is available 24/7.',
  keywords: 'contact ZoomFleet, customer support, luxury car rental contact, vehicle inquiry',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-5xl font-900 text-charcoal dark:text-white mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            We&apos;re here to help 24/7
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-charcoal rounded-xl p-8 border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border-gray-200 dark:border-gray-700 dark:bg-gray-800 focus:ring-primary focus:border-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border-gray-200 dark:border-gray-700 dark:bg-gray-800 focus:ring-primary focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border-gray-200 dark:border-gray-700 dark:bg-gray-800 focus:ring-primary focus:border-primary"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button className="w-full bg-primary hover:bg-primary/90 text-charcoal px-6 py-3 rounded-lg font-bold transition-all">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-charcoal rounded-xl p-8 border border-gray-200 dark:border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      phone
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-charcoal rounded-xl p-8 border border-gray-200 dark:border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      mail
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">support@zoomfleet.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-charcoal rounded-xl p-8 border border-gray-200 dark:border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      location_on
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      123 Luxury Lane<br />
                      Beverly Hills, CA 90210
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}