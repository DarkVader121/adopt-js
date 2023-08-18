import React from 'react'
import { Typography } from '@material-tailwind/react'
import missionImage from '../public/mission__image.jpg'

const MissionComp = () => {
  return (
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
  )
}

export default MissionComp