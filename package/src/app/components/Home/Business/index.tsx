import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'

const Business = () => {
  return (
    <section className='py-10'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-12 content-center justify-items-center'>
          <div className='lg:col-span-6 flex flex-col gap-5 justify-center'>
            <h2 className='text-midnight_text text-center lg:text-start'>
              Make better business decisions with Paidin.
            </h2>
            <p className='text-black/75 text-lg font-normal text-center lg:text-start sm:leading-140 max-w-2xl lg:max-w-lg mx-auto lg:mx-0'>
              From real-time expense tracking to smart financial analytics,
              PaidIn gives you the tools to make faster, data-driven business
              decisions — without the guesswork.
            </p>
            <Link
              href={'/'}
              className='text-primary hover:text-blue-700 text-lg font-medium flex items-center gap-2 mx-auto lg:mx-0 w-fit'>
              Learn more
              <Icon icon='tabler:arrow-right' className='text-2xl' />
            </Link>
          </div>
          <div className='lg:col-span-6 flex sm:justify-center justify-start mt-10 lg:mt-0'>
            <Image
              src='/images/business/business.png'
              alt='business'
              width={636}
              height={805}
              className='w-full'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Business
