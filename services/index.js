import { request, gql } from 'graphql-request';
import { GraphQLClient } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
// const graphQLClient = new GraphQLClient(graphqlAPI);

export const testFetchRequest = async () => {
  const query = gql`
    query myQuery {
      primaryCategoriesConnection {
        edges {
          node {
            name 
            slug
          }
        }
      }
    }
  `

  const res = await request(graphqlAPI, query);
  return res.primaryCategoriesConnection.edges;
}

export const getPrimaryCategories = async () => {
  const query = gql`
    query GetPrimaryCategories {
      primaryCategories(orderBy: name_DESC) {
        name
        slug
        homeImage {
          url
        }
      }
    }
  `

  const res = await request(graphqlAPI, query);
  return res.primaryCategories;
};

export const getPrimaryCategoriesPaths = async () => {
  const query = gql`
  query GetPrimaryCategoriesPaths {
    primaryCategories {
      slug
    }
  }
`

const res = await request(graphqlAPI, query);
return res.primaryCategories;
}

export const getSecondaryCategories = async () => {
  const query = gql`
    query GetSecondaryCategories {
      secondaryCategories(orderBy: name_DESC) {
        name
        slug
      }
    }
  `

  const res = await request(graphqlAPI, query); 
  return res.secondaryCategories;
};

export const getAllProductsPaths = async () => {
  const query = gql`
    query GetAllProductsPaths{
      products{
        id
        slug
      }
    }
  `

  const res = await request(graphqlAPI, query);
  return res.products;
}

export const getFeaturedProducts = async () => {
  const query = gql`
    query GetFeaturedProducts {
      products(where: { isFeatured: true }) {
        name
        description
        featuredImage {
          url
        }
        slug
      }
    }
  `

  const res = await request(graphqlAPI, query);
  return res.products;
};

export const getCategoryProducts = async (slug) => {
  const query = gql`
    query GetCategoryProducts($slug: String!) {
      products(
        where: { primaryCategories_every: { slug: $slug } }
        orderBy: name_DESC
      ) {
        id
        name
        isFeatured
        featuredImage {
          url
        }
        price
        slug
      }
    }
  `
  const res = await request(graphqlAPI, query, { slug });
  return res.products;
}