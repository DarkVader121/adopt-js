import React from 'react'
import { Typography } from '@material-tailwind/react'
import Goal__image from '../public/about__goals.jpg'
const Goals = () => {
  return (
    <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-1'>
        <div className='col-span-2 flex lg:justify-end md:justify-center pl-5'>
            <img
                src={Goal__image}
                width={1000}
                alt='goal image'
                className='rounded-md'
            />
        </div>
          <div className='lg:justify-center lg:text-left md:text-center ml-5 mt-10'>
            <Typography
              variant='h1'
            >
              Our Goals
            </Typography>
            <Typography
              variant='paragraph'
              className='text-xl mt-5'
            >
              To simplify adoption <br/> through user-friendly <br/> resources, ensuring <br/>each dog finds the <br/>right home, and to <br/> build a supportive <br/> community that <br/> fosters lasting <br/> relationships between <br/> pets and families
            </Typography>
            </div>
    </div>
  )
}

export default Goals