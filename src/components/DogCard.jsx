import React from 'react'
import { Card, 
         CardBody, 
         Typography, 
} from '@material-tailwind/react'
import {DogModal} from '../components'
const DogCard = ({dog}) => {
  return (
    <>
    <Card className='shadow-xl mb-10'>
      <div className='flex justify-center'>
        <img
            src={dog.image_link}
            width={400}
            height={300}
            className='rounded-md'
        />
      </div>
      <CardBody>
        <div className='flex mb-5 '>
          <Typography
            variant='h5' color='blue-gray' 
          >
            {dog.name}
          </Typography>

        </div>
        <DogModal 
          dog={dog}
        />
      </CardBody>
    </Card>
    </>
  )
}

export default DogCard