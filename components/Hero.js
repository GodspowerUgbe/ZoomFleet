import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[640px] flex items-center overflow-hidden bg-charcoal">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/60 to-transparent z-10"></div>
        <Image src={'/images/hero1.jpg'}
          alt="Premium Luxury Car" className="w-full h-full object-cover scale-x-[-1]" data-alt="Side profile of a sleek silver luxury sports car in a modern garage"
          width={400}
          height={400}
        />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-900 text-white leading-[0.95] tracking-tight mb-6">
            Drive Your <br /><span className="text-primary">Dream</span> Today
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 font-medium max-w-lg">
            Experience the ultimate in luxury and performance with our premium car rental and sales services. Curated for the elite.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary hover:bg-primary/90 text-charcoal px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg flex items-center gap-2">
              Explore Inventory
              
              <ArrowRight />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg text-lg font-bold transition-all">
              How it Works
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}