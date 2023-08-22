import React from 'react'
import { Typography } from '@material-tailwind/react'
import {  Link } from 'react-router-dom'

const WebNav = () => {

  return (
    <div>    
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
    <Typography
      as="li"
      variant="paragraph"
      color="black"
      className="px-5 py-2 drop-shadow-10 rounded-md font-bold hover:bg-amber-400 hover:text-white duration-300 hover:scale-110"

    >
      <Link to="/" className="flex items-center">
        Home
      </Link>
    </Typography>
    <Typography
      as="li"
      variant="paragraph"
      color="black"
      className="px-5 py-2 drop-shadow-10 rounded-md font-bold hover:bg-amber-400 hover:text-white duration-300 hover:scale-110"

    >
      <Link to="/AboutUs" className="flex items-center">
        About Us
      </Link>
    </Typography>
    <Typography
      as="li"
      variant="paragraph"
      color="black"
      className="px-5 py-2 drop-shadow-10 rounded-md font-bold hover:bg-amber-400 hover:text-white duration-300 hover:scale-110"

    >
      <Link to="/ContactUs" className="flex items-center">
        Contact Us
      </Link>
    </Typography>
    <Typography
      as="li"
      variant="paragraph"
      color="black"
      className="px-5 py-2 drop-shadow-10 rounded-md font-bold hover:bg-amber-400 hover:text-white duration-300 hover:scale-110"

    >
      <Link to="/Team" className="flex items-center">
        Meet the team
      </Link>
    </Typography>
    <Typography
      as="li"
      variant="paragraph"
      color="black"
      className="px-5 py-2 drop-shadow-10 rounded-md font-bold hover:bg-amber-400 hover:text-white duration-300 hover:scale-110"

    >
      <Link to="/Adopt" className="flex items-center">
        Adopt a Dog
      </Link>
    </Typography>
  </ul>
  </div>
  )
}

export default WebNav