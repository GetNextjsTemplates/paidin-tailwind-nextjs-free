import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'

const Business = () => {
  return (
    <section className='py-10'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
          <div className='col-span-6 flex flex-col justify-center'>
            <h2 className='text-midnight_text text-4xl sm:text-5xl font-semibold text-center lg:text-start leading-140!'>
              Make better business decisions with Paidin.
            </h2>
            <h3 className='text-black/75 text-lg font-normal text-center lg:text-start pt-3 leading-180!'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab.
            </h3>
            <Link
              href={'/'}
              className='text-primary hover:text-blue-700 text-lg font-medium flex items-center gap-2 pt-4 mx-auto lg:mx-0 w-fit'>
              Learn more
              <Icon icon='tabler:arrow-right' className='text-2xl' />
            </Link>
          </div>
          <div className='col-span-6 flex justify-center mt-10 lg:mt-0'>
            <Image
              src='/images/business/business.png'
              alt='business'
              width={1000}
              height={805}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Business
