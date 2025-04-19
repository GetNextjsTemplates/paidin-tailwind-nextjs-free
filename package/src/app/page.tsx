import React from 'react'
import Hero from '@/components/Home/Hero'
import People from '@/components/Home/People'
import Features from '@/components/Home/Features'
import Business from '@/components/Home/Business'
import Payment from '@/components/Home/Payment'
import Pricing from '@/components/Home/Pricing'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Paidin',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <People />
      <Features />
      <Business />
      <Payment />
      <Pricing />
    </main>
  )
}
