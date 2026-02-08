import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import FeaturedFleet from '@/components/FeaturedFleet'
import ValuePropositions from '@/components/ValuePropositions'
import SellCarCTA from '@/components/SellCarCTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'ZoomFleet | Premium Car Rental & Sales',
  description: 'Experience the ultimate in luxury and performance with our premium car rental and sales services. Rent exotic supercars, luxury SUVs, and more.',
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SearchBar />
        <FeaturedFleet />
        <ValuePropositions />
        <SellCarCTA />
      </main>
      <Footer />
    </>
  )
}