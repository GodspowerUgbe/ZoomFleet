'use client';
import { MapPin,CarFront,CircleDollarSign,Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative z-30 max-w-6xl mx-auto px-4 -mt-16">
      <div className="bg-white dark:bg-charcoal p-6 md:p-8 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Location */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <select className="w-full pl-10 pr-4 py-3 rounded-lg border-gray-200 dark:border-gray-700 dark:bg-gray-800 focus:ring-primary focus:border-primary text-sm font-medium">
                <option>Beverly Hills, CA</option>
                <option>Miami, FL</option>
                <option>Manhattan, NY</option>
                <option>Las Vegas, NV</option>
              </select>
            </div>
          </div>

          {/* Car Type */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Vehicle Type
            </label>
            <div className="relative">
              <CarFront className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <select className="w-full pl-10 pr-4 py-3 rounded-lg border-gray-200 dark:border-gray-700 dark:bg-gray-800 focus:ring-primary focus:border-primary text-sm font-medium">
                <option>All Categories</option>
                <option>Sports Car</option>
                <option>Luxury SUV</option>
                <option>Sedan</option>
                <option>Convertible</option>
              </select>
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Price Range
            </label>
            <div className="relative">
              <CircleDollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <select className="w-full pl-10 pr-4 py-3 rounded-lg border-gray-200 dark:border-gray-700 dark:bg-gray-800 focus:ring-primary focus:border-primary text-sm font-medium">
                <option>Any Price</option>
                <option>$100 - $300 / day</option>
                <option>$300 - $800 / day</option>
                <option>$800+ / day</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button className="w-full bg-primary hover:bg-primary/90 text-charcoal h-12 rounded-lg font-bold flex items-center justify-center gap-2 transition-all">
              <Search className="h-5 w-5" />
              Search Fleet
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}