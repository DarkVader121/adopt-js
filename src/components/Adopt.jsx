"use client"
import { Typography, Select, Option } from '@material-tailwind/react'
import React from 'react'
import { useState, useEffect } from 'react'
import { DogCard, SelectDogs} from '../components'
import { fetchDogs } from '../utils'

const Adopt = () => {
  const [allDogs, setAllDogs] = useState([]); 
  const [breed, setBreed] = useState("Bulldog");
  const [limit, setLimit] = useState(10);

  const getDogs = async () => {
    try{
      const result = await fetchDogs({
        breed: {breed},
      }); 
      setAllDogs(result); 
      
    } catch(error) {
      console.log(error); 
    } 
  }

  useEffect(() => {
    getDogs(); 
  }, [breed])

  const handleSearch = (e) => {
      e.preventDefault(); 
      
      if(breed === ''){
        return alert('Please fill in the search bar')
      }
        setBreed()
  }
  

  return (
    <>
    <div className='pt-10 px-20 pb-20 animate-slide-from-left'>
      <Typography
        variant='h1'
        className='text-center'
      >
        Find Your Perfect Fur Companion
      </Typography>
      <div className='grid lg:grid-cols-3 md:grid-cols-1 mt-10'>
        <div>
          <form onSubmit={handleSearch}>
            <SelectDogs 
              breed={breed}
              setBreed={setBreed}
            />
          </form>
        </div>
        <div className='col-span-2'>
        </div>
      </div>
        <div className='gap-2 mt-10 grid lg:grid-cols-4 md:grid-cols-1'>
          {allDogs.length > 0 ? (
              allDogs.map((dog, index) => (
                <div key={index}>
                  <DogCard dog={dog}/> 
                </div>
              ))
          ) : ( 
            <div>
              <h2>Oops, No results</h2>
            </div>
          )
          }

        </div>
        </div>
</>
  )
}

export default Adopt