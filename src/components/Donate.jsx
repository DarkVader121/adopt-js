import { Typography } from '@material-tailwind/react'
import React from 'react'
import bdo__image from '../public/bdo__image.png'
import pnb__image from '../public/pnb__image.png'
import gcash__image from '../public/gcash__image.png'
import donate__dog from '../public/dog__donatee.png'

const Donate = () => {
  return (
    <div className='p-20 grid lg:grid-cols-2 md:grid-cols-1'>
      <div className='animate-slide-from-left'>
        <Typography
          variant='h1'
        >
          Help Us Save More Dogs
        </Typography>
        <Typography
          variant='paragraph'
          className='mt-5 text-xl'
        >
          Your generous contributions help us provide essential care, support, and a brighter future <br/> for dogs in need.
        </Typography>
        <Typography
          variant='small'
          className='mt-10 text-center text-4xl divide-y'
        >
          Donate Through
        </Typography>
      <div className='grid lg:grid-cols-2 md:grid-cols-1'>
        <div className='flex lg:justify-end md:justify-center'>
          <img
            src={gcash__image}
            width={200}
            height={100}
            alt='gcash'
            className='mt-5 mr-5'
          />
          <p className='flex items-center'>__</p>
        </div>
        <div>
            <Typography
              variant='paragraph'
              className='mt-5 lg:ml-5 lg:text-start md:text-center items-center'
            >
              Erron John C. Lapac <br/> 0906 116 4928
            </Typography>
        </div>
      </div>

      <div className='grid lg:grid-cols-2 md:grid-cols-1'> 
        <div className='flex lg:justify-end md:justify-center'>
          <img
            src={pnb__image}
            width={170}
            height={70}
            alt='pnb'
            className='mt-5 mr-5'
          />
          <p className='flex items-center'>__</p>
        </div>
        <div>
          <Typography
            variant='paragraph'
           className='mt-5 lg:ml-5 lg:text-start md:text-center items-center'

          >
            Erron John C Lapac <br/> 4928 5671 9034 1826
          </Typography>
        </div>
      </div>

      <div className='grid lg:grid-cols-2 md:grid-cols-1'> 
              <div className='flex lg:justify-end md:justify-center'>
          <img
            src={bdo__image}
            width={150}
            height={50}
            alt='bdo'
            className='mt-5 mr-5'
          />
          <p className='flex items-center'>__</p>
        </div>
        <div>
          <Typography
            variant='paragraph'
           className='mt-5 lg:ml-5 lg:text-start md:text-center items-center'

          >
            Erron John C Lapac <br/> 7250 6398 1047 8912
          </Typography>
        </div>
      </div>
    </div>
    <div className='animate-slide-from-right mt-5'>
      <img
        src={donate__dog}
        height={1500}
        
        width={1000}
        alt='donate dog'
        className=''
      />
    </div>
    </div>
  )
}

export default Donate