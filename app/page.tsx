import HeroSection from '@/components/sections/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import ProductsSection from '@/components/sections/ProductsSection'
import ArticlesSection from '@/components/sections/ArticlesSection'
import VideosSection from '@/components/sections/VideosSection'
import EventsSection from '@/components/sections/EventsSection'
import StatsSection from '@/components/sections/StatsSection'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <ArticlesSection />
      <VideosSection />
      <StatsSection />
      <EventsSection />
      <CTASection />
    </>
  )
}
