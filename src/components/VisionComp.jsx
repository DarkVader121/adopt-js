import React from 'react'
import visionImage from '../public/vision__image.jpg'
import { Typography } from '@material-tailwind/react'

const VisionComp = () => {
  return (
    <div className=' grid object-center lg:grid-cols-3 md:grid-cols-1 animate-slide-from-right delay-100'>
      <div className='mt-20 text-center mr-10 '>
        <Typography
          variant="h1"
        >
          Our Vision 
        </Typography>
        <Typography
          variant="paragraph"
          className="text-2xl mt-5"
          >
            Our vision is to provide <br/> a second chance to <br/> dogs in need, <br/> connecting them with <br/>loving families where <br/> they can thrive. <br/>Through education, <br/> support, and <br/> community engagement.  
          </Typography>
      </div>
      <div className='mt-5 col-span-2'>
        <img
          src={visionImage}
          width={1000}
          alt='vision image'  
          className='rounded-md'
        />
      </div>
    </div>
  )
}

export default VisionComp