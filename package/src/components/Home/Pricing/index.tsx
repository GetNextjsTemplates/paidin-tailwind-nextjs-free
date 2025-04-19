'use client'
import { SetStateAction, useState } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'

const names = [
  {
    heading: 'Lite',
    price: {
      monthly: 19,
      yearly: 190,
    },
    subscriber: 0.5,
    button: 'Start free trial',
    option: [
      'Basic invoice generation',
      'Downloadable PDF invoice',
      'Unlimited transactions',
      'Emails for all the updates',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/starone.svg',
  },
  {
    heading: 'Basic',
    price: {
      monthly: 29,
      yearly: 290,
    },
    subscriber: 0.5,
    button: 'Start free trial',
    option: [
      'All Lite features',
      'Custom invoice templates',
      'Tax calculation support',
      'Automatic invoice reminders',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/startwo.svg',
  },
  {
    heading: 'Plus',
    price: {
      monthly: 59,
      yearly: 590,
    },
    subscriber: 0.5,
    button: 'Start free trial',
    option: [
      'All Basic features',
      'Multi-currency support',
      'Invoice payment tracking',
      'Priority customer support',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/starthree.svg',
  },
]

const Pricing = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    'monthly' | 'yearly'
  >('yearly')

  const handleCategoryChange = (
    category: SetStateAction<'monthly' | 'yearly'>
  ) => {
    setSelectedCategory(category)
  }

  const filteredData = names.filter((item) =>
    item.category.includes(selectedCategory)
  )

  return (
    <section id='pricing' className='bg-header relative py-20'>
      <Image
        src='/images/pricing/upperline.png'
        alt='upperline-image'
        width={280}
        height={219}
        className='absolute top-[160px] left-[90px] hidden sm:block'
      />
      <Image
        src='/images/pricing/lowerline.png'
        alt='lowerline-image'
        width={180}
        height={100}
        className='absolute bottom-[0px] right-[90px]'
      />
      <div className='container px-4'>
        <h3 className='text-center text-4xl sm:text-65xl font-black'>
          Our Pricing Plan.
        </h3>

        <p className='text-lg font-normal text-center text-black/60 pt-5'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium
          <br /> doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.
        </p>

        {/* Yearly/Monthly Toggle Buttons */}
        <div className='mt-6 relative'>
          <div className='flex justify-center'>
            <div className='bg-deepSlate flex py-1 px-1 rounded-full'>
              <h3
                className={`text-xl font-medium cursor-pointer ${
                  selectedCategory === 'yearly'
                    ? 'text-primary bg-white rounded-full py-2 px-4 sm:py-4 sm:px-16'
                    : 'text-white py-2 px-4 sm:py-4 sm:px-16'
                }`}
                onClick={() => handleCategoryChange('yearly')}>
                Yearly
              </h3>
              <h3
                className={`text-xl font-medium cursor-pointer ${
                  selectedCategory === 'monthly'
                    ? 'text-primary bg-white rounded-full py-2 px-4 sm:py-4 sm:px-16'
                    : 'text-white py-2 px-4 sm:py-4 sm:px-16'
                }`}
                onClick={() => handleCategoryChange('monthly')}>
                Monthly
              </h3>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-6'>
          {filteredData.map((item, index) => (
            <div
              className='pt-10 pb-28 pl-10 pr-10 bg-white rounded-3xl bxshd relative cursor-pointer hover:bg-primary group'
              key={index}>
              <Image
                src={item.imgSrc}
                alt='star-image'
                width={154}
                height={154}
                className='absolute bottom-0 right-0'
              />
              <h4 className='text-4xl sm:text-5xl font-semibold mb-8 text-midnight_text group-hover:text-white'>
                {item.heading}
              </h4>
              <button className='text-xl font-medium text-white w-full bg-primary hover:text-white group-hover:bg-deepSlate group-hover:border-deepSlate border-2 border-primary rounded-full py-4 px-12 mb-8'>
                {item.button}
              </button>
              <h2 className='text-4xl sm:text-5xl font-semibold text-midnight_text mb-3 group-hover:text-white'>
                $
                {selectedCategory === 'monthly'
                  ? item.price.monthly
                  : item.price.yearly}
                /<span className='text-lightgrey'>mo</span>
              </h2>
              <p className='text-lg font-normal text-black group-hover:text-white'>
                ${item.subscriber}
                <span>/ Subscriber</span>
              </p>
              <p className='text-lg font-normal text-black/40 mb-6 group-hover:text-white'>
                (per subscriber per month)
              </p>

              {/* Plan Features with icons */}
              <div className='mt-6'>
                {item.option.map((feature, idx) => (
                  <div key={idx} className='flex gap-4 pt-4'>
                    <Icon
                      icon='tabler:circle-check-filled'
                      className='text-2xl text-emerald-400'
                    />
                    <p className='text-lg font-medium text-black/60 group-hover:text-white/60'>
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
