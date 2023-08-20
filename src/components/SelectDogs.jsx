import React from 'react'
import { Select, Option, Options } from '@material-tailwind/react'
import {useState, Fragment } from 'react'
import { breeds } from '../constants'
const SelectDogs = ({breed, setBreed}) => {

  return (
    <Select variant="static" size='lg' label="Select Breed" value={breed} onChange={setBreed}>
        {breeds.map((breedOption) => (
          <Option key={breedOption} value={breedOption}>
            {breedOption}
          </Option>
        ))
        }
    </Select>
  )
}

export default SelectDogs