"use client"
import Image from 'next/image'
import { CustomButton } from '.'

const Hero = () => {

    const handleScroll =  () => {
        alert('Welcome, You\'re already exploring them !')
    }
  return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    Get, order or book a car - with ease and efficiency!
                </h1>

                <p>
                Simplify your car experience with our easy-to-use search process.
                </p>

                <CustomButton 
                    title="Explore cars" 
                    handleClick={handleScroll} 
                    containerStyles="primBgColor text-white rounded-full mt-10"
                    />
            </div>

            <div className="hero__image-container relative">
                <div className="hero__image">
                    <Image src="/hero-rolls.png" alt="hero image" fill className='object-contain'/>
                </div>
                <div className='hero__image-overlay'/>
            </div>
        </div>
    )
}

export default Hero