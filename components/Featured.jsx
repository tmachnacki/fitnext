import React from 'react';
import { useState, useEffect } from 'react';
import { getFeaturedProducts } from '../services';
import FeaturedProduct from './FeaturedProduct';
import Slider from 'react-slick';

const NextArrow = ({ className, style, onClick }) => {
  return(
    <div 
      className={className} 
      style={{...style, display: "block", color: "black" }}
      onClick={onClick}
    ></div> 
  )
}

const PrevArrow = ({ className, style, onClick }) => {
  return(
    <div 
      className={className} 
      style={{...style, display: "block", color: "black" }}
      onClick={onClick}
    ></div> 
  )
}



const Featured = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    getFeaturedProducts()
      .then((res => setFeatured(res)))
      .catch((err) => console.log(err));
  }, [])

  const settings = {
    arrows: true,
    accessibility: true,
    dots: true,
    fade: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    adaptiveHeight: false,
    useCSS: true,
    variableWidth: false,

  }

  return (
    <div className='w-full mx-auto'>
      <Slider {...settings}>
      {
        // featured.map((featuredProduct) => (
        //   <div key={featuredProduct.slug}>
        //     <img
        //       src={featuredProduct.featuredImage.url} 
        //       className='object-cover w-full rounded -z-10 ' 
        //       width="100%"
        //       height="auto"
        //       alt={featuredProduct.name}
        //     />
        //   </div>
        // ))
      }

      {
        featured.map((featuredProduct) => (
          <FeaturedProduct 
            key={featuredProduct.slug} 
            name={featuredProduct.name} 
            description={featuredProduct.description}
            featuredImage={featuredProduct.featuredImage}
            slug={featuredProduct.slug}
          />
        ))
      }
      </Slider>
    </div>
  )
}

export default Featured