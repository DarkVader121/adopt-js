import React from 'react'
import landingImage from '../public/Landing__page.jpg'
import { Typography} from '@material-tailwind/react'
import CustomButton from './CustomButton'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate(); 
  return (
<>
    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-0 lg:my-20 lg:ml-20 lg:mr-20 md:my-0 md:mx-0 animate-slide-from-left delay-500">
      <img
        src={landingImage}
        width={1000}
        priority 
        className='object-center  rounded-md'
      />
      <div className='lg:ml-10 lg:mt-12 md:mx-5 md:my-5  '>
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
                <CustomButton
          title="&nbsp; Adopt Now!"
          btnColor="amber"
          btnVariant="gradient"
          btnSize="lg"
          handleClick={()=>navigate("/Adopt")}
          containerStyles="inline-block mt-10 text-white "
        />
      </div>
</div>
</>
  )
}

export default HomePage