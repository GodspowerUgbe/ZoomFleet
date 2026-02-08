import Image from 'next/image'

export default function SellCarCTA() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-primary/10 rounded-2xl overflow-hidden flex flex-col md:flex-row items-center">
        <div className="p-12 md:w-1/2">
          <h2 className="text-4xl dark:text-white font-900 text-charcoal mb-4 tracking-tight">Selling your premium car?</h2>
          <p className="text-charcoal/70 dark:text-white text-lg font-medium mb-8">Get the best value for your vehicle. We offer competitive buy-back prices and trade-ins for all luxury makes.</p>
          <button className="bg-charcoal dark:bg-white/70 dark:text-charcoal text-white px-8 py-4 rounded-lg font-bold hover:bg-charcoal/90 dark:hover:bg-white/80 transition-all">
            Get Valuation
          </button>
        </div>
        <div className="md:w-1/2 h-64 md:h-auto self-stretch relative min-h-[600px]">
          <Image
            src="/images/interior.jpg"
            alt="Close up of a luxury car steering wheel and leather dashboard"
            // fill
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />


        </div>
      </div>
    </section>
  )
}