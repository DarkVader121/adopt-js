import { Typography } from '@material-tailwind/react'
import React from 'react'
import aboutImage from '../public/Dog__shelter2.jpg'
import {MissionComp, VisionComp, Goals} from '../components'

const AboutUs = () => {
  return (
    <div className='p-10 '>
      <div className='grid justify-items-center'>
        <div>
          <Typography
            variant="h1"
            className="text-center animate-slide-from-right"
          >
            About ADOPT.
          </Typography>

          <img
          src={aboutImage}
          width={900}
          alt='adopt office'
          className='object-center rounded-md mt-5 animate-slide-from-left delay-100'
        />

        <Typography
          variant="paragraph"
          className="text-center mt-5 text-2xl animate-slide-from-right delay-100"
        >
          We're all about finding fantastic homes for our furry friends.<br/> Our website is your hub for dog adoptions making that perfect <br/> match between dogs and loving families.
        </Typography>
        </div>
      </div>  
      <VisionComp/>
      <MissionComp/>
      <Goals/>
    </div>
  )
}

export default AboutUs