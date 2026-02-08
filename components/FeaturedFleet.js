import Link from 'next/link'
import CarCard from './CarCard';
import { ChevronRight,Settings,UserRound } from 'lucide-react';



const cars = [
  {
    id: 1,
    name: ' Mercedes-AMG GT',
    type: 'Gasoline • Sport',
    price: 450,
    image: '/images/benz.jpg',
    alt: 'Modern blue luxury sports sedan parked on an urban street',
    badge: 'Trending',
    specs: [
      { icon: <Settings size={18} />, label: 'Auto' },
      { icon: <UserRound size={18} />, label: '4 Seats' },
    ],
  },
  {
    id: 2,
    name: 'BMW 3 Series',
    type: 'Gasoline • Sport',
    price: 1200,
    image: '/images/bmw.jpg',
    alt: 'Exotic silver sport car in a studio lighting setup',
    badge: 'New Arrival',
    specs: [
      { icon: <Settings size={18} /> ,label: 'Manual' },
      { icon: <UserRound size={18} />, label: '2 Seats' }
    ],
  },
  {
    id: 3,
    name: 'Jeep Cherokee',
    type: 'Gasoline • SUV',
    price: 380,
    image: '/images/jeep.jpg',
    alt: 'Large black luxury SUV on a winding mountain road',
    badge: 'Family Choice',
    specs: [
      { icon: <Settings size={18} />, label: 'Auto' },
      { icon: <UserRound size={18} />, label: '7 Seats' }
    ],
  },
]

export default function FeaturedFleet() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-800 tracking-tight text-charcoal dark:text-white">
            Featured Fleet
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 font-medium">
            Hand-picked luxury vehicles for your next journey.
          </p>
        </div>
        <Link 
          href="/fleet" 
          className="text-primary font-bold flex items-center gap-1 hover:underline"
        >
          View All <ChevronRight />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  )
}