import React from 'react'
import {
    Dialog, 
    DialogHeader, 
    DialogBody, 
    DialogFooter, 
    Button,
} from "@material-tailwind/react"
import {CustomButton, DogData} from '../components'
import { useState } from 'react'


const DogModal = ({dog}) => {
 const [open, setOpen] = useState(false)

 const handleOpen = () => setOpen(!open); 
  return (
    <div>
        <>
        <CustomButton
            title="Adopt"
            btnColor={"amber"}
            btnVariant="gradient"
            containerStyles="text-white"
            btnSize="sm"
            handleClick={handleOpen}
        />
        <Dialog open={open} handler={handleOpen}>
            <DialogHeader>{dog.name}</DialogHeader>
            <DialogBody style={{ maxHeight: '600px', overflow:'auto'}}>
                <div className='flex justify-center'>
                    <img
                            src={dog.image_link}
                            width={600}
                            height={600}
                            alt='dog'                    
                        />
                </div>
                <div className='text-center'>
                    <DogData 
                        dog={dog}
                    />
                </div>
            </DialogBody>

            <DialogFooter>
            <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
            >
                <span>Cancel</span>
            </Button>
            <CustomButton
                title="Adopt Now"
                btnColor="amber"
                containerStyles="text-white"
            />
            </DialogFooter>
        </Dialog>
        </>
    </div>
  )
}

export default DogModal