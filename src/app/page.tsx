import Image from 'next/image'
import { ModeToggle } from './_components/mode-toggle'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { IntroSection } from './_components/intro-section'
import { AboutSection } from './_components/about-section'
import { FeatureSection } from './_components/feature-section'
import { FaqSection } from './faq-section'
import { InvestmentSection } from './_components/investiment-section'

export default function Home() {
  return (
    <main className="">
      <IntroSection />
      <AboutSection />
      <FeatureSection />
      <InvestmentSection />
      <FaqSection />
    </main>
  )
}