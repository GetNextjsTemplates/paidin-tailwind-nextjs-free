import React from 'react'
import Hero from '@/app/components/Home/Hero'
import People from '@/app/components/Home/People'
import Features from '@/app/components/Home/Features'
import Business from '@/app/components/Home/Business'
import Payment from '@/app/components/Home/Payment'
import Pricing from '@/app/components/Home/Pricing'
import { Metadata } from 'next'
import ContactForm from './components/Contact/Form'
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
      <ContactForm />
    </main>
  )
}
