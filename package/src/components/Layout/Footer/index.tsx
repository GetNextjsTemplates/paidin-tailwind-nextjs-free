import Link from 'next/link'
import Image from 'next/image'
// import Logo from "../Header/Logo";
import { Icon } from '@iconify/react/dist/iconify.js'

interface links {
  link: string
}

interface socialLinks {
  imgSrc: string
  link: string
  width: number
}

const socialLinks: socialLinks[] = [
  {
    imgSrc: 'fa-brands:facebook-f',
    link: 'www.facebook.com',
    width: 10,
  },
  {
    imgSrc: 'fa6-brands:instagram',
    link: 'www.instagram.com',
    width: 14,
  },
  {
    imgSrc: 'fa6-brands:twitter',
    link: 'www.twitter.com',
    width: 14,
  },
]

const links: links[] = [
  {
    link: 'Product',
  },
  {
    link: 'Pricing',
  },
  {
    link: 'Features',
  },
]

const footer = () => {
  return (
    <div className='bg-midnight_text'>
      <div className='mx-auto max-w-2xl pt-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12'>
          {/* COLUMN-1 */}
          <div className='sm:col-span-6 lg:col-span-3'>
            <div className='flex shrink-0 items-center border-right'>
              <Image
                src='/images/logo/logo-white.svg'
                alt='logo'
                width={214}
                height={55}
              />
            </div>
          </div>
          <div className='sm:col-span-6 lg:col-span-5 flex items-center'>
            <div className='flex gap-4'>
              {links.map((items, i) => (
                <div key={i}>
                  <Link
                    href='/'
                    className='text-lg font-normal text-white flex items-center justify-center'>
                    {items.link}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className='sm:col-span-6 lg:col-span-4'>
            <div className='flex gap-4 lg:justify-end'>
              {socialLinks.map((items, i) => (
                <Link href={items.link} key={i}>
                  <div className='bg-white/20 h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center text-white hover:text-black hover:bg-white'>
                    <Icon icon={items.imgSrc} className='text-2xl' />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className='pt-12 pb-10 lg:flex items-center justify-between border-t border-t-white/30'>
          <h4 className='text-lg text-center md:text-start font-normal text-white opacity-60'>
            @2025.All rights reserved by{' '}
            <Link
              href='https://getnextjstemplates.com/'
              className='hover:text-primary'>
              GetNextJs Templates
            </Link>
          </h4>
          <div className='flex gap-5 mt-6 md:mt-0 justify-center md:justify-start'>
            <h4 className='opacity-60 text-lg font-normal text-white'>
              <Link href='/' target='_blank'>
                Privacy policy
              </Link>
            </h4>
            <div className='h-5 bg-white opacity-60 w-0.5'></div>
            <h4 className='opacity-60 text-lg font-normal text-white'>
              <Link href='/' target='_blank'>
                Terms & conditions
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer
