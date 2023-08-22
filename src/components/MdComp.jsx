import React from 'react'
import { Typography } from '@material-tailwind/react'
import visionImage from '../public/vision__image.jpg'
import missionImage from '../public/mission__image.jpg'
import Goal__image from '../public/about__goals.jpg'

const MdComp = () => {
  return (
    <>
    <div className='mt-10 animate-slide-from-right delay-100'>
    <div className='text-center'>
      <Typography
        variant="h1"
      >
        Our Vision 
      </Typography>
      <div className='mt-5'>
            <img
                src={visionImage}
                width={1000}
                alt='vision image'  
                className='rounded-md'
            />
       </div>
      <Typography
        variant="paragraph"
        className="text-2xl mt-5"
        >
          Our vision is to provide <br/> a second chance to <br/> dogs in need, <br/> connecting them with <br/>loving families where <br/> they can thrive. <br/>Through education, <br/> support, and <br/> community engagement.  
        </Typography>
    </div>


  <div className='mt-10 text-center grid justify-items-center'>
    <Typography
        variant='h1'
    >
        Our Mission
    </Typography>
    <img
        src={missionImage}
        width={900}
        alt='mission image'
        className='mt-10 rounded-md'
    />
    <div className='mt-5 grid lg:grid-cols-3 md:grid-cols-1 lg:gap-10 justify-around animate-slide-from-left'>
        <Typography
        variant="paragraph"
        className="text-2xl"
        >
        To bring joy to both <br/> dogs and people's <br/>lives by facilitating <br/> meaningful adoptions. 
        </Typography>
        <Typography
        variant="paragraph"
        className="text-2xl"
        >
        Unite deserving dogs <br/> with loving families, <br/> enriching lives through <br/> the powerful bond of <br/> adoption.
        </Typography>
        <Typography
        variant="paragraph"
        className="text-2xl"
        >
        Make tails wag and hearts <br/> smile by connecting dogs <br/> with their forever homes, <br/> fostering happiness.
        </Typography>
    </div>
    </div>


         <div className='mt-10 text-center'>
            <Typography
              variant='h1'
            >
              Our Goals
            </Typography>
            <img
                src={Goal__image}
                width={1000}
                alt='goal image'
                className='rounded-md'
            />
            <Typography
              variant='paragraph'
              className='text-2xl mt-5'
            >
              To simplify adoption <br/> through user-friendly <br/> resources, ensuring <br/>each dog finds the <br/>right home, and to <br/> build a supportive <br/> community that <br/> fosters lasting <br/> relationships between <br/> pets and families
            </Typography>
        </div>
        </div>
</>
  )
}

export default MdComp