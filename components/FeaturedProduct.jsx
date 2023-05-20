import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const FeaturedProduct = ({ name, description, featuredImage, slug }) => {
  return (
    <div className='w-full '>
      <div className="w-full h-full px-8 py-8 absolute flex flex-col justify-end items-start">
        <h3 className=' text-4xl'>{name}</h3>
        <p>{description}</p>
      </div> 
      
      <img
        src={featuredImage.url} 
        className='object-cover object-center rounded-lg' 
        width={`100%`}
        height={`auto`}
        alt={name}
        style={{ maxHeight: `600px`}}
      />
    </div>
  )
}

export default FeaturedProduct