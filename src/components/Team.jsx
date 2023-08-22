import { Typography } from '@material-tailwind/react'
import React from 'react'
import staff__1 from '../public/staff__1.png'
import staff__2 from '../public/staff__2.png'
import staff__3 from '../public/staff__3.png'
import staff__4 from '../public/staff__4.png'
import staff__5 from '../public/staff__5.png'
import staff__6 from '../public/staff__6.png'

const Team = () => {
  return (
    <div className='text-center lg:p-20 animate-slide-from-left delay-500'>
      <Typography
        variant='h1'
        className=''
      >
        Meet the Team
      </Typography>
      <div className=' grid lg:grid-cols-3 justify-items-center md:grid-cols-1'>
        <div className='mt-20 hover:scale-150'>
          <img
            src={staff__1}
            height={200}
            width={200}
            alt='staff 1'
          />
          <Typography
            variant='h3'
            className='text-center'
          >
            Bea
          </Typography>
          <Typography
            variant='paragraph'
            className='text-amber-400 text-xl'
          >
            Assistant Veterinarian  
          </Typography>
        </div>
       <div className='mt-20 hover:scale-150 '>
          <img
            src={staff__2}
            height={200}
            width={200}
            alt='staff 2'
          />
          <Typography
            variant='h3'
            className='text-center'
          >
            John
          </Typography>
          <Typography
            variant='paragraph'
            className='text-amber-400 text-xl'
          >
            Ceo / Founder
          </Typography>
        </div>
       <div className='mt-20 hover:scale-150 '>
          <img
            src={staff__3}
            height={200}
            width={200}
            alt='staff 3'
          />
          <Typography
            variant='h3'
            className='text-center'
          >
            Ericka
          </Typography>
          <Typography
            variant='paragraph'
            className='text-amber-400 text-xl'
          >
            Veterinary Doctor
          </Typography>
 
        </div>
       <div className='mt-20 hover:scale-150  '>
          <img
            src={staff__4}
            height={200}
            width={200}
            alt='staff 4'
          />
          <Typography
            variant='h3'
            className='text-center'
          >
            Smith
          </Typography>
          <Typography
            variant='paragraph'
            className='text-amber-400 text-xl'
          >
            Admin Officer l
          </Typography>
        </div>

       <div className='mt-20 hover:scale-150  '>
          <img
            src={staff__5}
            height={200}
            width={200}
            alt='staff 5'
          />
          <Typography
            variant='h3'
            className='text-center'
          >
            Janna
          </Typography>
          <Typography
            variant='paragraph'
            className='text-amber-400 text-xl'
          >
            Admin Officer ll
          </Typography>
        </div>

       <div className='mt-20 hover:scale-150'>
          <img
            src={staff__6}
            height={200}
            width={200}
            alt='staff 6'
          />
          <Typography
            variant='h3'
            className='text-center'
          >
            Joseph
          </Typography>
          <Typography
            variant='paragraph'
            className='text-amber-400 text-xl'
          >
            Admin Officer l
          </Typography>
        </div>
      </div>

    </div>
  )
}

export default Team