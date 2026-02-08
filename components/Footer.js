import { AiOutlineSend } from "react-icons/ai";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-900 tracking-tighter text-white uppercase">
                ZoomFleet
              </span>
            </div>
            <p className="text-sm">
              The world&apos;s leading marketplace for premium vehicle rentals and sales. 
              Redefining your drive.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-bold mb-6">Quick Links</h5>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/inventory" className="hover:text-primary transition-colors">
                  Our Inventory
                </Link>
              </li>
              <li>
                <Link href="/policies" className="hover:text-primary transition-colors">
                  Rental Policies
                </Link>
              </li>
              <li>
                <Link href="/sell" className="hover:text-primary transition-colors">
                  Sell Your Car
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-primary transition-colors">
                  Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="text-white font-bold mb-6">Support</h5>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/help" className="hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="text-white font-bold mb-6">Newsletter</h5>
            <p className="text-sm mb-4">
              Subscribe for exclusive offers and fleet updates.
            </p>
            <div className="flex gap-2">
              <input
                className="bg-gray-800 border-none rounded-lg text-sm w-full focus:ring-primary"
                placeholder="Email address"
                type="email"
              />
              <button className="bg-primary text-charcoal px-4 py-2 rounded-lg font-bold text-center">
                <AiOutlineSend size={24} className="mx-auto"/>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 md:flex-row justify-between">
          <p className="text-xs text-center ">© 2024 ZoomFleet International. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  )
}