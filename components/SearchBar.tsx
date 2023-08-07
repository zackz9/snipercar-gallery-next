'use client'

import React, { useState } from 'react'
import { SearchManufacturer } from '.'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const SearchButton = ({otherClasses} : {otherClasses: string}) => (

    <button title='search' type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
            src="/magnifying-glass.svg"
            width={20}
            height={40}
            alt="magnifying glass"
            className='object-contain'
        />
    </button>
)

const SearchBar = ({setManufacturer, setModel}) => {

    const [searchManufacturer, setSearchManufacturer] = useState('');
    const [searchModel, setSearchModel] = useState('');

    const router = useRouter();

    const handleSearch = (e: React.FormEvent <HTMLFormElement>) => {
        e.preventDefault();

        if(searchManufacturer === '' && searchModel === '') {
            return alert('Please Fill In The Search Bar...')
        }

        setModel(searchModel), 
        setManufacturer(searchManufacturer)
        

    }

    const updateSearchParams = (model: string, manufacturer: string) => {

        const searchParams = new URLSearchParams(window.location.search);

        if(model) {
            searchParams.set('model', model)
        } else {
            
            searchParams.delete('model')
        }

        if(manufacturer) {
            searchParams.set('manufacturer', manufacturer)
        } else {
            
            searchParams.delete('manufacturer')
        }

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

        router.push(newPathname, {scroll: false})


    }


    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer
                    selected={searchManufacturer}
                    setSelected={setSearchManufacturer}
                />

                <SearchButton otherClasses="sm:hidden"/>
            </div>

            <div className='searchbar__item'>
                <Image src='/model-icon.png' width={25} height={25} alt="Car model" className='absolute w-[20px] h-[20px] ml-4'/>

                <input 
                type="text" 
                name="model" 
                value={searchModel}
                onChange={(e) => setSearchModel(e.target.value)}
                placeholder="Impreza"
                className='searchbar__input'
                />

                <SearchButton otherClasses="sm:hidden"/>
            </div>
            <SearchButton otherClasses="max-sm:hidden"/>
        </form>
    )
}

export default SearchBar