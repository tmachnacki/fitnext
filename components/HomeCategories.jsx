import React from 'react'
import { useState, useEffect } from 'react';
import CategoryCard from './CategoryCard';
import { getPrimaryCategories } from '../services';
import Link from 'next/link';
import { useMediaQuery } from '@mui/material';
import { get } from 'http';

const HomeCategories = () => {
  const [categories, setCategories] = useState([]);
  const isSmallScreen = useMediaQuery('(min-width: 640px)');
  const isMediumScreen = useMediaQuery('(min-width: 768px');
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    getPrimaryCategories()
      .then((primaryCategories) => setCategories(primaryCategories))
      .catch((error) => console.log(error))
  }, [])

  const getMinWidth = () => {
    if (isLargeScreen) return `33.33%`;
    else if (isMediumScreen || isSmallScreen) return `50%`;
    else return '100%'
  }

  const getHeight = () => {
    return isLargeScreen ? '600px' : '500px'
  }


  return (
    // <ul 
    //   className={` p-2 mt-36 mb-36 gap-3 grid  ${isMobile ? 'grid-cols-2 ' : 'grid-cols-3'} `}
    // >
    //   {
    //     categories.map((category) => (
    //       <li 
    //         key={category.slug} 
    //         className={`w-full ${isMobile && category.slug === 'accessories' ? 'col-span-2 ' : 'col-span-1'}`}
    //         style={{

    //         }}
    //       >
    //         <img 

    //           className='-z-10 object-cover object-center w-full'
    //           src={`${category.homeImage.url}`}
    //           style={{
            
    //           }}
    //         />
    //         <Link href={`/category/${category.slug}`}>{category.name}</Link>
    //       </li>
    //     ))
    //   }
    // </ul>

    <div 
      className='collection mx-auto flex flex-wrap  w-full rounded-lg'
      style={{ maxWidth: `1536px` }}
    >
      {categories.map((category) => (
        <Link 
          key={category.slug}
          href={`/category/${category.slug}`} 
          className={`collectionItem block flex-grow flex-shrink basis-0 rounded-lg hover:shadow-md hover:shadow-orange-500 `}
          style={{
            minWidth: `${getMinWidth()}`,

          }}
        >
          

          <div 
            className={`collectionItem__bg relative -z-20 rounded-lg ` }
            style={{
              backgroundImage: `url(${category.homeImage.url})`,
              height: `${getHeight()}`,
              backgroundSize: 'cover',
              backgroundPositionX: 'center',
              backgroundPositionY: 'top',
              overflow: 'hidden',
          
            }}
          >
            <div className="collectionItem__wrapper relative w-full h-full">
              <div 
                className="collectionItem__overlay relative w-full h-full -z-10 "
                style={{
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(0,0,0,0.9) 75% )'
                }}  
              ></div>
              <div className="py-10 collectionItem__content absolute top-0 left-0 flex flex-col justify-end items-center w-full h-full">
                <div className='text-white text-3xl p-3 mb-8'>{category.name}</div>
                <button className='px-4 py-2 inline-block bg-orange-500 text-white rounded-lg mb-4'>SHOP NOW</button>
              </div>
            </div>
            
            
          </div>
          
        </Link>
      ))}
    </div>
  )
}

export default HomeCategories;