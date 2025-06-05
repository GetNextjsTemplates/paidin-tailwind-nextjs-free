import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'

const People = () => {
  return (
    <section className='pt-32 sm:pb-20 pb-10' id='product'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
          <div className='col-span-6 flex justify-center'>
            <div className="bg-Lightsuccess bg-[url('/images/people/bg-lines.png')] bg-no-repeat bg-contain bg-right-bottom w-full h-full flex flex-col gap-10 relative sm:py-11 py-14 sm:px-16 px-8 rounded-2xl after:absolute after:bg-[url('/images/people/quote.png')] after:w-48 after:h-40 after:-top-16 after:right-0">
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
                  <p className='text-2xl font-semibold'>Anna Franklin</p>
                  <p className='text-lg text-black/55'>Freelance Designer</p>
                </div>
              </div>
              <p className='font-medium text-2xl leading-9'>
                “PaidIn makes managing bills and cards easy. The spending insights keep me on budget, and reminders help me pay on time.”
              </p>
            </div>
          </div>
          <div className='col-span-6 flex justify-center flex-col gap-4 lg:pl-24 mt-10 lg:mt-0 '>
            <h2 className='text-midnight_text text-center lg:text-start'>
              Trusted by over 100k+ users worldwide.
            </h2>
            <p className='text-black/75 text-lg font-normal text-center lg:text-start max-w-md mx-auto lg:mx-0'>
              PaidIn helps you manage bills, track spending, and control your cards—all in one simple app.
            </p>
            <Link
              href={'/'}
              className='text-primary hover:text-blue-700 text-lg font-medium flex items-center gap-2 mx-auto lg:mx-0'>
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
