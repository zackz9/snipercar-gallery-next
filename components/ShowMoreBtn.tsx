"use client";

import { useRouter } from 'next/navigation';
import React from 'react'
import { ShowMoreBtnProps } from '../types';
import { CustomButton } from '.';
import { updateSearchParams } from '../utilities';

const ShowMoreBtn = ({ pageNumber, isNext, setLimit } : ShowMoreBtnProps) => {

    const  handleNavigation = () => {

        const newLimit = (pageNumber + 1) * 10;
        setLimit(newLimit)
    }

    return (
        <div className='w-full flex-center gap-5 mt-10'>
            {
                !isNext && ( 
                    <CustomButton
                        title='Show More'
                        btnType='button'
                        containerStyles='primBgColor rounded-full text-white'
                        handleClick={handleNavigation}
                    />
                )
            }

        </div>
    )
}

export default ShowMoreBtn