import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'

const People = () => {
  return (
    <section className='pt-32 pb-20' id='product'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
          <div className='col-span-6 flex justify-center'>
            <div className="bg-Lightsuccess bg-[url('/images/people/bg-lines.png')] bg-no-repeat bg-contain bg-right-bottom w-full h-full flex flex-col gap-10 relative py-11 px-16 rounded-2xl after:absolute after:bg-[url('/images/people/quote.png')] after:w-48 after:h-40 after:-top-16 after:right-0">
              <div className='flex items-center gap-10'>
                <div>
                  <Image
                    src='/images/people/user.png'
                    alt='user'
                    width={86}
                    height={86}
                  />
                </div>
                <div className=''>
                  <h3 className='text-2xl font-semibold'>Anna Franklin</h3>
                  <p className='text-lg text-black/55'>Owner, Lavis studio</p>
                </div>
              </div>
              <p className='font-medium text-2xl leading-180!'>
                “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium”
              </p>
            </div>
          </div>
          <div className='col-span-6 flex flex-col gap-7 lg:pl-24 mt-10 lg:mt-0 '>
            <h2 className='text-midnight_text text-4xl sm:text-5xl font-semibold text-center lg:text-start leading-140!'>
              More than 100k+ people are using our product.
            </h2>
            <h3 className='text-black/75 text-lg font-normal text-center lg:text-start pt-5 lg:pt-0'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab.
            </h3>
            <Link
              href={'/'}
              className='text-primary hover:text-blue-700 text-lg font-medium flex items-center gap-2 mx-auto lg:mx-0 pt-5 lg:pt-0'>
              Learn more
              <Icon icon='tabler:arrow-right' className='text-2xl' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default People
