"use client";
import {Fragment} from 'react';
import { CarProps } from '../types';
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { generateCarImageURL } from '../utilities';

interface CarDetailsProps {
    car: CarProps;
    isOpen:boolean;
    closeModal: ()=> void;
}

const CarDetails = ({ isOpen, closeModal, car} : CarDetailsProps) => {
  return (
    <>
        <Transition appear show={isOpen} as={Fragment} >
            <Dialog as="div" className='relative z-10' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opaciry-100"
                    leaveTo="opacity-0">
                    <div className='fixed inset-0 bg-black bg-opacity-25'></div>
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opaciry-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="relative p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5">
                                <button
                                    title="x"
                                    type="button"
                                    onClick={closeModal}
                                    className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100  rounded-full'
                                >
                                    <Image
                                        src="/close.svg"
                                        alt="Close Modal"
                                        width={20}
                                        height={20}
                                        className='object-contain'
                                    />
                                </button>

                                <div className='flex-1 flex flex-col gap-3'>
                                    <div className='relative w-full h-40 bg-pattern rounded-lg bg-cover bg-center '>
                                    <Image 
                                        src={generateCarImageURL(car)}
                                        fill
                                        alt='car model' 
                                        priority
                                        className='object-contain'/> 
                                    </div>

                                    <div className='flex gap-3'>
                                        <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                            <Image 
                                                src={generateCarImageURL(car, '29')}
                                                fill
                                                alt='car model' 
                                                priority
                                                className='object-contain'/> 
                                        </div>
                                        <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                            <Image 
                                                src={generateCarImageURL(car, '33')}
                                                fill
                                                alt='car model' 
                                                priority
                                                className='object-contain'/> 
                                        </div>
                                        <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                            <Image 
                                                src={generateCarImageURL(car, '13')}
                                                fill
                                                alt='car model' 
                                                priority
                                                className='object-contain'/> 
                                        </div>
                                    </div>
                                </div>

                                {/* Additionnal infos  */}
                                <div className='flex flex-1 flex-col gap-2'>
                                    <h2 className="font-semibold capitalize text-xl">
                                        {car.make} {car.model}
                                    </h2>

                                    <div className="mt-3 flex flex-wrap gap-4">
                                        {Object.entries(car).map(([key, value]) => (
                                            <div className='flex justify-between gap-5 text-right w-full' key={key}>
                                                <h4 className='text-gray capitalize'>{key.replace('_', ' ')}</h4>
                                                <p className='text-black-300 capitalize font-semibold'>{value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>  
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    </>
  )
}

export default CarDetails