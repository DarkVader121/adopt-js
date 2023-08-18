import React from 'react'
import landingImage from '../public/Landing__page.jpg'
import { Typography, Button} from '@material-tailwind/react'
import CustomButton from './CustomButton'

const HomePage = () => {
  return (

    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-0 my-20 ml-10 mr-20">
      <img
        src={landingImage}
        width={1000}
        className='object-center transform -translate-x-full animate-slide-from-left delay-500 rounded-md'
      />
      <div className='inline-block ml-10 mt-12 '>
       <div className='transform -translate-x-full delay-500 animate-slide-from-right'>
        <Typography
          variant="h1"
        >
          Greetings, <br/> Wonderful Furmans
        </Typography>

        <Typography
          variant="paragraph"
          className="mt-10 text-2xl"
        >
          I'm your German Shepherd pal, thrilled to guide you in finding your perfect dog companion. Our adoption hub is where tails wag and hearts connect. Let's join paws and bring joy to a deserving dog. Start your journey today!
        </Typography>
        </div>
        <CustomButton
          title="&nbsp; Adopt Now!"
          btnColor="amber"
          btnVariant="gradient"
          btnSize="lg"
          containerStyles="inline-block mt-10 text-white transform -translate-x-full animate-slide-from-bottom delay-500"
        />
      </div>



</div>
  )
}

export default HomePage