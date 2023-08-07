"use client";
import { useState } from 'react'
import Image from 'next/image';
import { CarProps } from '../types';
import { CarDetails, CustomButton } from '.';
import { calculateCarRent, generateCarImageURL } from '../utilities';


interface CarCardProps {
  car: CarProps
}

const CarCard = ({ car } : CarCardProps ) => {

  const { 
    city_mpg,
    
    drive,
    make,
    model,
    transmission,
    year,
  } = car ;


  const [isOpen, setIsOpen ] = useState(false);



  const carRent = calculateCarRent(city_mpg, year)

  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {make} {model} 
        </h2>
      </div>
      <div className='car-card__content mt-2'>
      Category: 
        <h4 className='car-card__content-subtitle'>
          {car.class} 
        </h4>
      </div>
       

      <p className='flex mt-4 text-[32px] font-extrabold'>
        <span className='self-start text-[24px] font-semibold'>$</span>
          {carRent}
        <span className='self-end text-[24px] font-medium'>/day</span>
      </p>

      <div className='relative w-full my-3 h-40 object-contain'>
        <Image 
          src={generateCarImageURL(car)}
          fill
          alt='car model' 
          priority
          className='object-contain'/> 
      </div>


      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <div className='flex gap-2 items-center flex-col justify-center'>
            <Image src="/steering-wheel.svg" alt='Steering wheel' width={20} height={20} className='hover:scale-50'/>
            <p className='text-[14px]'>
              {
                transmission === 'a' ?  'Automatic' : ' Manual'
              }
            </p>
          </div>

          <div className='flex gap-2 items-center flex-col justify-center'>
            <Image src="/tire.svg" alt='tire' width={20} height={20} className='hover:scale-50'/>
            <p className='text-[14px]'>
              {
                drive.toUpperCase()
              }
            </p>
          </div>

          <div className='flex gap-2 items-center flex-col justify-center'>
            <Image src="/gas.svg" alt='gas' width={20} height={20} className='hover:scale-50'/>
            <p className='text-[14px]'>
              { city_mpg } MPG
            </p>
          </div>

        </div>

        <div className='car-card__btn-container'>
              <CustomButton 
                title='View more'
                textStyle='text-white text[14px] leading-[17px] font-bold'
                containerStyles='w-full py-[16px] rounded-full primBgColor '
                rightIcon="/right-arrow.svg"
                handleClick={() => setIsOpen(true)}>

              </CustomButton>
        </div>

      </div>

      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car}/>
    </div>
  )
}

export default CarCard