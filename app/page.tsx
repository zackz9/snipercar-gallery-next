"use client";
import { useEffect, useState } from 'react';
import { CarCard, CustomFilter, Hero, SearchBar, ShowMoreBtn } from '../components'
import { fetchingCars } from '../utilities';
import { fuels, yearsOfProduction } from '../constants';
import Image from 'next/image';

export default function Home() {

  const [allCars, setAllCars] = useState([])
  const [loading, setLoading] = useState(false)

  // SearchStates
  const [ manufacturer, setManufacturer ] = useState('');
  const [ model, setModel ] = useState('');

  // FilterStates
  const [fuel, setFuel] = useState('');
  const [year, setYear] = useState(2022);
  
  // PaginateStates
  const [limit, setLimit] = useState(10);

  const jibLhdid = async () => {

      setLoading(true);

      try {

        const result= await fetchingCars({
          manufacturer: manufacturer || '',
          year: year || 2020,
          fuel: fuel || '',
          limit: limit || 10,
          model: model || '',
        });
  
        setAllCars(result);
        
      } catch (error) {
          console.log(error);
      } finally {
        setLoading(false)
      }

  }

  useEffect(() => {

    console.log(fuel, year);
    jibLhdid();

  }, [manufacturer, model, year, fuel, limit])


  // const allCars= await fetchingCars({
  //   manufacturer: searchParams.manufacturer || '',
  //   year: searchParams.year || '2020',
  //   fuel: searchParams.fuel || '',
  //   limit: searchParams.limit || '10',
  //   model: searchParams.model || '',
  // });

  const kaydaData  = !Array.isArray(allCars) || allCars.length < 1 || !allCars 



  return (
    <main className="overflow-hidden">
        <Hero/>

        <div className="mt-12 padding-x padding-y max-width" id='discover'>
          <div className="home__text-container">

            <h1 className='text-4xl font-extrabold'>
              Car Catalog
            </h1>
            <p>
              Explore cars you might like
            </p>
          </div>

          <div className="home__filters">
            <SearchBar setManufacturer={setManufacturer} setModel={setModel} />

            <div className="home__filter-container">
              <CustomFilter title="fuel" options={fuels} setFilter={setFuel}></CustomFilter>
              <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear}></CustomFilter>
            </div>
          </div>

          {

            allCars.length > 0  
            ? (
              <section>
                <div className="home__cars-wrapper">
                  {
                    allCars?.map((car) => (
                      <CarCard car={car}/>
                    ))
                  }
                </div>

                {
                  loading && (
                    <div>
                      <Image src="/loader.svg" alt="Loader" className="object-contain" width={50} height={50} />
                    </div>
                  )
                }

                <ShowMoreBtn
                  pageNumber={limit  / 10}
                  isNext={limit  > allCars.length}
                  setLimit={setLimit}
                />

              </section> 
            )
            : (<div className='home__error-container'>No Data found for this search. <p className='text-black text-xl font-bold'>{allCars?.message}</p></div>)
          }

        </div>
    </main>
  )
}
