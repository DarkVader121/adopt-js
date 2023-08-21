import React from 'react'
import { Typography } from '@material-tailwind/react'

const DogData = ({dog}) => {
  return (
    <Typography
    variant="lead"
    className="text-black text-left"
        >
        Hi! I'm <span className='text-amber-600'>{dog.name}</span> Let me tell you about myself. I'm good with children,
        rating myself at <span className='text-amber-600'>{dog.good_with_children}</span>  out of 10. When it comes to 
        other dogs, I'd say I'm about a <span className='text-amber-600'>{dog.good_with_other_dogs}</span>. As for 
        shedding, I'd give myself a <span className='text-amber-600'> {dog.shedding}</span>. Grooming? Well, let's say
            I'm a <span className='text-amber-600'>{dog.grooming}</span>. Drooling? Maybe a <span className='text-amber-600'> {dog.drooling}</span>. My coat 
            length is <span className='text-amber-600'>{dog.coat_length}</span> , and when it comes to strangers, I'm a
            <span className='text-amber-600'> {dog.good_with_strangers}</span>. Playfulness? Oh, you bet! I'm a solid&nbsp;
            <span className='text-amber-600'>{dog.playfulness}</span> . I'm also quite protective, rating myself at &nbsp;
            <span className='text-amber-600'>{dog.protectiveness}</span>  . Trainability? I'd say I'm a <span className='text-amber-600'>{dog.trainability}</span> . 
            My energy level is <span className='text-amber-600'>{dog.energy}</span> , and my barking, well, that's a <span className='text-amber-600'>{dog.barking}</span> .


        {/* In terms of life expectancy, I can hang around for  <span className='text-amber-600'>{dog.min_life_expectancy}</span> 
        &nbsp; to <span className='text-amber-600'>{dog.max_life_expectancy}</span>  years. For the taller folks, I can reach a 
            max height of <span className='text-amber-600'>{dog.max_height_male} </span> (males) or <span className='text-amber-600'>{dog.max_height_female} </span> 
            (females). When it comes to weight, males can get up to &nbsp; 
            <span className='text-amber-600'>{dog.max_weight_male}</span> , and females to <span className='text-amber-600'>{dog.max_weight_female}</span>. 
            On the shorter side, males stand at <span className='text-amber-600'>{dog.min_height_male}</span>, and females
            at <span className='text-amber-600'>{dog.min_height_female}</span> . Weight-wise, males can be as light as &nbsp;
            <span className='text-amber-600'>{dog.min_weight_male}</span> , and females as dainty as <span className='text-amber-600'>{dog.min_weight_female}</span>. */}
            <br/>
            <br/>Here's a quick rundown of me:<br/>
                Good with children: <span className='text-amber-600'>{dog.good_with_children} </span> <br/>
                Good with other dogs: <span className='text-amber-600'>{dog.good_with_other_dogs}</span>  <br/>
                Shedding: <span className='text-amber-600'>{dog.shedding}</span>  <br/>
                Grooming: <span className='text-amber-600'>{dog.grooming}</span>  <br/>
                Drooling: <span className='text-amber-600'>{dog.drooling} </span> <br/>
                Coat length:<span className='text-amber-600'>{dog.coat_length} </span>  <br/>
                Good with strangers: <span className='text-amber-600'>{dog.good_with_strangers} </span> <br/>
                Playfulness:<span className='text-amber-600'>{dog.playfulness} </span> <br/>
                Protectiveness:<span className='text-amber-600'> {dog.protectiveness}</span>   <br/>
                Trainability:<span className='text-amber-600'>{dog.trainability}</span>  <br/>
                Energy:<span className='text-amber-600'>{dog.energy}</span>  <br/>
                Barking:<span className='text-amber-600'>{dog.barking} </span> <br/>
                Min life expectancy:<span className='text-amber-600'>{dog.min_life_expectancy} </span> <br/>
                Max life expectancy:<span className='text-amber-600'>{dog.max_life_expectancy}</span>  <br/>
                Max height male:<span className='text-amber-600'>{dog.max_height_male} </span> <br/>
                Max height female:<span className='text-amber-600'>{dog.max_height_female} </span> <br/>
                Max weight male:<span className='text-amber-600'>{dog.max_weight_male}</span>  <br/>
                Max weight female:<span className='text-amber-600'>{dog.max_weight_female} </span> <br/>
                Min height male:<span className='text-amber-600'>{dog.min_height_male}</span>  <br/>
                Min height female:<span className='text-amber-600'>{dog.min_height_female}</span>  <br/>
                Min weight male:<span className='text-amber-600'>{dog.min_weight_male} </span> <br/>
                Min weight female:<span className='text-amber-600'>{dog.min_weight_female} </span> <br/>

                <br/> So, that's a bit about me! Thanks for listening
        </Typography>
  )
}

export default DogData