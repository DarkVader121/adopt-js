import React from 'react'
import { Typography } from '@material-tailwind/react'
import facebook from '../public/facebook.png'
import gmail from '../public/gmail__icon.png'
import phone from '../public/phone.png'

const ContactUs = () => {
  return (
    <>
    <div className='bg-orange-600'>
      <div className='lg:px-20 lg:pt-20 pb-10'>
      <Typography
        variant='h1'
        color='white'
        className='text-center animate-slide-from-left delay-500'
      >
        We Would Love to Hear From You
      </Typography>
      <Typography
        variant='paragraph'
        color='white'
        className='text-center mt-3 animate-slide-from-left'
      >
      You can reach us on Facebook for updates and stories, or contact us directly via email or by phone.
      </Typography>
      <div className='mt-10 grid lg:justify-items-center lg:grid-cols-3 md:grid-cols-1'>
        <div className='flex animate-slide-from-left delay-500 mt-5'>
          <div className='rounded-full p-2 bg-orange-300'>
            <img
              src={facebook}
              width={100}
              height={100}
              alt='facebook icon'
            />
          </div>
            <Typography
              variant='h3'
              color='white'
              className='mt-5 ml-5'
              >
              FACEBOOK
              <Typography
              variant='paragraph'
              color='white'
              className='mt-5'
              >
              https://www.facebook.com/Adopt.21/
            </Typography>
            </Typography>
        </div>
        <div className='flex animate-slide-from-left delay-500 mt-5'>
          <div className='rounded-full p-2 bg-orange-300'>
            <img
              src={gmail}
              height={100}
              width={100}
              alt='email icon'
            />
          </div>
          <Typography
              variant='h3'
              color='white'
              className='mt-5 ml-5'
              >
              GMAIL 
              <Typography
              variant='paragraph'
              color='white'
              className='mt-5'
              >
              lapacerronjohn@gmail.com
            </Typography>
          </Typography>
        </div>
        <div className='flex animate-slide-from-left delay-500 mt-5'>
          <div className='rounded-full p-2 bg-orange-300'>
            <img
              src={phone}
              height={100}
              width={100}
              alt='phone icon'
            />
          </div>
          <Typography
              variant='h3'
              color='white'
              className='mt-5 ml-5'
              >
              PHONE
              <Typography
              variant='paragraph'
              color='white'
              className='mt-5'
              >
              0906 116 4928
            </Typography>
          </Typography>
        </div>
      </div>
      </div>
    </div>

    <Typography
      variant='h1'
      className='lg:mt-20  text-center animate-slide-from-left delay-500'
    >
      Home Address
    </Typography>
    <div className=' lg:divide-blue-gray-800 lg:divide-x justify-center items-center grid lg:grid-cols-2 md:grid-cols-1 mt-5'>
      <div className='animate-slide-from-left'>
        <Typography
          variant='h3'
          className='text-center mt-10'
        >
          Adopt Sanctuary
        </Typography>
        <Typography
          variant='paragraph'
          className='text-xl text-center'
        >
            San Antonio Village, <br/> Poblacion, Lila, Bohol, <br/> Philippines
        </Typography>
      </div>
      <div className='animate-slide-from-left delay-500 '>
        <Typography
          variant='h3'
          className='text-center mt-10'
        >
          Adopt Pet Center 
        </Typography>
        <Typography
          variant='paragraph'
          className='text-xl text-center '
        >
          San Antonio Village,<br/> Poblacion, Lila, Bohol, <br/>  Philippines
        </Typography>
      </div>
    </div>
    </>
  )
}

export default ContactUs