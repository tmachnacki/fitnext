import React from 'react'
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import { useStateContext } from '../context/StateContext';
import { useEffect } from 'react';



const Layout = ({ children }) => {
  const { darkMode, setDarkMode } = useStateContext();

  const setBackgroundColor = () => {
    darkMode ? document.body.style.backgroundColor = '#171717' : document.body.style.backgroundColor = '#f5f5f5'
  }

  useEffect(() => {
    setBackgroundColor();
  }, [darkMode])

  return (
    <div className={`${darkMode && 'dark'} `}>
      <Head>
        <title>FitNext</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header>
        <Navbar />
      </header>
      
      <main>
        <div className="mx-auto mb-8 px-1 sm:px-2 md:px-4 ">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout