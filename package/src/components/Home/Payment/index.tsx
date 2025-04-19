import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'

const Payment = () => {
  return (
    <section className='py-10'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
          <div className='col-span-6'>
            <Image
              src='/images/payment/payment.png'
              alt='payment'
              width={600}
              height={500}
            />
          </div>
          <div className='col-span-6 flex flex-col justify-center'>
            <h2 className='text-midnight_text text-4xl sm:text-5xl font-semibold text-center lg:text-start leading-140!'>
              Now its time to change payment method.
            </h2>
            <p className='text-black/75 text-lg font-normal text-center lg:text-start leading-180! pt-3'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab.
            </p>
            <Link
              href={'/'}
              className='text-primary hover:text-blue-700 text-lg font-medium flex items-center gap-2 pt-4 mx-auto lg:mx-0'>
              Learn more
              <Icon icon='tabler:arrow-right' className='text-2xl' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Payment
