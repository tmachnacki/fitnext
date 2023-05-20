import React from 'react'

const CategoryCard = ({ category: { name, slug, homeImage, } }) => {
  return (
    <div>{name}</div>
  )
}

export default CategoryCard