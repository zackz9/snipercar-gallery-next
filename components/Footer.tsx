'use client'

import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
        <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
            <div className="flex flex-col justify-start items-start gap-6">
                <Link href='/' className='flex justify-center items-center'>
                    <Image src="/logo-snipercar.png"  alt='footer logo' width={118} height={18} className='object-contain'/>
                </Link>
                <p className='text-base text-gray-700'>Snipercar 2023 <br />Inspired by JSMastery</p>
            </div>

            <div className="footer__links">
                {
                    footerLinks.map((link) => (
                        <div className='footer__link' key={link.title}>
                            <h3 className="font-bold">
                                {link.title}
                            </h3>

                            {
                                link.links.map((l) => (
                                    <Link key={l.title} href={l.url} className='text-gray-500'>
                                        {l.title}
                                    </Link>
                                ))
                            }
                        </div>
                    ))
                }
            </div>

        </div>      

        <div className="flex justify-between items-center flex-wrap gap-4 mt-10 border-gray-100 sm:px-16 px-6 py-10 ">

            <p>@2023 Snipercar. Developed with passion</p>
            <div className="footer__copyrights-link">
                <Link href='/' className='text-gray-500'>
                    Privacy policy
                </Link>
                <Link href='/' className='text-gray-500'>
                    Terms of use
                </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer