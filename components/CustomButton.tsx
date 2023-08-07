'use client'
import React from 'react'
import Image from 'next/image'
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title?: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit" ;
  textStyle?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}


const CustomButton = ({title, btnType, textStyle, rightIcon,containerStyles, handleClick}: CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
        >
        <span className={`flex-1 ${textStyle}`}>{title}</span>
        { rightIcon && (
          <div className='relative w-6 h-6'>
            <Image
                src={rightIcon} fill alt='RightIcon' className='object-contain'
            />
          </div>
        )}
    </button>
  )
}

export default CustomButton