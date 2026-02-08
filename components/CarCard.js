import Image from 'next/image'


export default function CarCard({ car }) {
  return (
    <div className="group bg-white dark:bg-charcoal rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={car.image}
          alt={car.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {car.badge && (
          <div className="absolute top-4 left-4 bg-primary text-charcoal text-[10px] font-900 uppercase tracking-widest px-2 py-1 rounded">
            {car.badge}
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-800 text-charcoal dark:text-white">
              {car.name}
            </h3>
            <p className="text-gray-400 text-sm font-medium">{car.type}</p>
          </div>
          <div className="text-right">
            <span className="text-primary text-xl font-800">${car.price}</span>
            <span className="text-gray-400 text-xs font-bold block">/day</span>
          </div>
        </div>

        <div className="flex items-center gap-4 py-4 border-y border-gray-100 dark:border-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400">
          {car.specs.map((spec, index) => (
            <div key={index} className="flex items-center gap-2 text-[14px]">
              <span className="material-symbols-outlined ">
                {spec.icon}
              </span>
              {spec.label}
            </div>
          ))}
        </div>

        <button className="w-full mt-6 py-3 border-2 border-primary text-charcoal dark:text-primary font-bold rounded-lg hover:bg-primary hover:text-charcoal transition-all">
          Rent Now
        </button>
      </div>
    </div>
  )
}