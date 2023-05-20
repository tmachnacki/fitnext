import React, { useEffect, useState } from 'react'
import { ProductCard, Loader } from '../../components';
import { useRouter } from 'next/router';
import { getCategoryProducts, getAllProductsPaths, getPrimaryCategories, getPrimaryCategoriesPaths } from '../../services';

const CategoryPage = ({ products }) => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   getCategoryProducts(params.slug)
  //   .then((data) => setProducts(data))
  //   .catch((error) => console.error(error));
  // }, [])


  const router = useRouter();
  if(router.isFallback) {
    return <Loader />
  }

  return (
    <div>
      {
        products.map((product) => (
          <p key={product.id} className='text-neutral-500'>{product.name}</p>
        ))
      }
    </div>
  )
}

export default CategoryPage;


// fetch products for current category
export async function getStaticProps({ params }) {
  const categoryProducts = await getCategoryProducts(params.slug)

  return {
    props: { products: categoryProducts }
  }
}

// pre render dynamic routes for products slugs
export async function getStaticPaths() {
  const categoryPaths = await getPrimaryCategoriesPaths();

  const paths = categoryPaths.map((categoryPath) => ({
    params: {
      slug: categoryPath.slug
    }
  }))

  return {
    paths,
    fallback: false
  }
}
