import React from "react";
import {
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import {Link, Routes, Route, useNavigate} from 'react-router-dom'
import { HomePage, AboutUs, ContactUs, Donate, Team, CustomButton, Adopt, DogModal, WebNav } from "../components"
import LogoImage from "../public/favicon.png"
 
export function Navigation() {
  const navigate = useNavigate(); 
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="paragraph"
        color="black"
        className="px-5 py-2 drop-shadow-10 rounded-md font-bold hover:bg-amber-400 hover:text-white duration-300 hover:scale-110"

      >
        <Link onClick={()=>{setOpenNav(!openNav)}} to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="black"
        className="px-5 py-2 drop-shadow-10 rounded-md font-bold hover:bg-amber-400 hover:text-white duration-300 hover:scale-110"

      >
        <Link onClick={()=>{setOpenNav(!openNav)}} to="/AboutUs" className="flex items-center">
          About Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="black"
        className="px-5 py-2 drop-shadow-10 rounded-md font-bold hover:bg-amber-400 hover:text-white duration-300 hover:scale-110"

      >
        <Link onClick={()=>{setOpenNav(!openNav)}} to="/ContactUs" className="flex items-center">
          Contact Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="black"
        className="px-5 py-2 drop-shadow-10 rounded-md font-bold hover:bg-amber-400 hover:text-white duration-300 hover:scale-110"

      >
        <Link onClick={()=>{setOpenNav(!openNav)}} to="/Team" className="flex items-center">
          Meet the team
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="black"
        className="px-5 py-2 drop-shadow-10 rounded-md font-bold hover:bg-amber-400 hover:text-white duration-300 hover:scale-110"

      >
        <Link onClick={()=>{setOpenNav(!openNav)}} to="/Adopt" className="flex items-center">
          Adopt a Dog
        </Link>
      </Typography>
    </ul>
  );
 
  return (
    <>
    <div className="max-w-screen shadow-lg  px-4 lg:px-8  bg-amber-200">
      <div className="mx-auto flex items-center justify-between text-blue-black-900">
        <button className="flex justify-center items-center" onClick={()=>navigate("/")}>
       <img 
       src={LogoImage}
       height={50} 
       width={70} 
       alt="Logo Adopt" 
       priority="true"
       />
       <Typography
        variant="h2"
        className="text-white drop-shadow-lg"
       >
        <h1 className="ml-2">
          ADOPT
        </h1>
       </Typography>

      </button>
        <div className="hidden lg:block">{<WebNav/>}</div>
        <CustomButton
          title="Donate"
          btnColor="amber"
          containerStyles={`font-bold hidden text-white  lg:inline-block`}
          btnType="button"
          btnVariant="gradient"
          btnSize="lg"
          handleClick={()=> {
            navigate("/Donate");
          }}
        />
  
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <CustomButton
            title="Donate Now!"
            containerStyles="my-2 inline-flex flex-1"
            btnType="button"
            textStyles="text-white"
            isDisabled={false}
            btnColor="amber"
            btnSize="lg"
            handleClick={()=>{
              navigate("/Donate")
              setOpenNav(!openNav);
            }}
            btnVariant="gradient"
          />
        </div>
      </Collapse>
    </div>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
      <Route path="/Team" element={<Team/>}/>
      <Route path="/Donate" element={<Donate/>}/>
      <Route path="/Adopt" element={<Adopt/>}/>
      <Route path="/DogModal" element={<DogModal/>}/>
    </Routes>
    </>
  );
}