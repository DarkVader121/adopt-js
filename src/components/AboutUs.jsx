import { Typography } from '@material-tailwind/react'
import React from 'react'
import aboutImage from '../public/Dog__shelter2.jpg'
import {MissionComp, VisionComp, Goals, MdComp} from '../components'

const AboutUs = () => {
  return (
    <div className='lg:p-10 animate-slide-from-left delay-500'>
      <div className='grid justify-items-center'>
        <div>
          <Typography
            variant="h1"
            className="text-center "
          >
            About ADOPT.
          </Typography>

          <img
          src={aboutImage}
          width={900}
          alt='adopt office'
          className='object-center rounded-md lg:mt-5 '
        />

        <Typography
          variant="paragraph"
          className="text-center mt-5 text-2xl"
        >
          We're all about finding fantastic homes for our furry friends.<br/> Our website is your hub for dog adoptions making that perfect <br/> match between dogs and loving families.
        </Typography>
        </div>
      </div>  
      <div className='lg:hidden md:block'>
         <MdComp/>
      </div>
      <div className='hidden lg:block'>
      <VisionComp/>
      <MissionComp/>
      <Goals/>
      </div>
      
    </div>
  )
}

export default AboutUs