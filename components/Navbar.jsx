import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineMenu, AiOutlineUser, AiOutlineClose } from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';
import { useMediaQuery } from '@mui/material';
import { BsMoon, BsSun } from 'react-icons/bs';
import { getPrimaryCategories } from '../services';
import { testFetchRequest } from '../services';


const Navbar = () => {
  const { darkMode, setDarkMode, toggleDarkMode } = useStateContext();
  const [primaryCategories, setPrimaryCategories] = useState([]);
  const [secondaryCategories, setSecondaryCategories] = useState([]);

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  // get primary categories on initialization
  useEffect(() => {
    // testFetchRequest().then((data) => console.log(data));
    getPrimaryCategories().then(categories => setPrimaryCategories(categories))
  }, []);

  return (
    <div className=" mx-auto px-3 mb-8 sm:px-6 py-2 sticky flex flex-row justify-between items-center dark:bg-neutral-800 bg-white border-b border-black dark:border-white">
      <Link href="/" className='text-orange-500 text-3xl font-semibold'>FitNext</Link>

      {/* DESKTOP NAV */}
      {!isMobile && (
        <div className="flex justify-between items-center gap-10">
          {primaryCategories.map((primaryCategory) => (
            <Link 
              key={primaryCategory.slug} 
              href={`/category/${primaryCategory.slug}`} 
              className='
                font-semibold 
                dark:text-white 
                text-gray-900 
                hover:text-orange-500 
                hover:dark:text-orange-500 
                transition-all
                '
              >
                {primaryCategory.name}
              </Link>
          ))}
        </div>
      )}

      {/* Icons */}
      <div className="flex justify-between items-center gap-4">
        {darkMode 
          ? (<BsSun onClick={toggleDarkMode} className='font-semibold dark:text-white text-gray-900 hover:text-orange-500 hover:dark:text-orange-500 transition-all cursor-pointer'/>) 
          : (<BsMoon onClick={toggleDarkMode} className='font-semibold dark:text-white text-gray-900 hover:text-orange-500 hover:dark:text-orange-500 transition-all cursor-pointer'/>)
        }
        <Link href={`/`} className='font-semibold text-lg dark:text-white text-gray-900 hover:text-orange-500 hover:dark:text-orange-500 transition-all'> 
          <AiOutlineUser /> 
        </Link>
        <Link href={`/`} className='font-semibold text-lg dark:text-white text-gray-900 hover:text-orange-500 hover:dark:text-orange-500 transition-all'> 
          <AiOutlineShopping /> 
        </Link>

        {/* MOBILE NAV */}
        { isMobile && !isMobileNavOpen && (
          <AiOutlineMenu className='font-semibold text-lg dark:text-white text-gray-900 hover:text-orange-500 hover:dark:text-orange-500 transition-all cursor-pointer' onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} />
        )}

        {isMobile && isMobileNavOpen && (
            <div className="p-4 flex flex-col justify-start items-start gap-3 fixed right-0 bottom-0 h-full w-52 z-10 dark:bg-neutral-700 bg-neutral-50">
            <div className="flex w-full justify-end items-center">
              <AiOutlineClose onClick={() => setIsMobileNavOpen(false)} className='text-lg cursor-pointer font-semibold dark:text-white text-gray-900 hover:text-orange-500 hover:dark:text-orange-500 transition-all'/>
            </div>
            {primaryCategories.map((primaryCategory) => (
              <Link 
                key={primaryCategory.slug} 
                href={`/category/${primaryCategory.slug}`} 
                className='font-semibold dark:text-white text-gray-900 hover:text-orange-500 hover:dark:text-orange-500 transition-all'
              >
                {primaryCategory.name}
              </Link>
            ))}
          </div>
        )} {/* ismobile && ismobilenavopen */}
      </div>
    </div>  
  )
}

export default Navbar