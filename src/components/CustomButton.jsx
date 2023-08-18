import React from 'react'
import { Button } from '@material-tailwind/react'

const CustomButton = ({ title, btnColor,btnSize,  containerStyles, handleClick, 
    btnType, textStyles, leftIcon, isDisabled, btnVariant,
}) => {
  return (
    <>
    <Button
        disabled={isDisabled || btnType === 'submit'}
        type={ btnType || "button"}
        size={`${btnSize}`}
        color={`${btnColor}`}
        className={`${containerStyles}`}
        onClick={handleClick}
        variant={`${btnVariant}`}
    >
        <div>
            {leftIcon}
        </div>
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
    </Button>
    </>
  )
}

export default CustomButton