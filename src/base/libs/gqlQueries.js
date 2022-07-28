import { gql } from '@apollo/client';

export const GET_PRODUCTS_FULL = gql`
  {
    products {
      id
      title
      price
      rating
      description
      slug
      coverImage {
        url(
          transformation: {
            document: { output: { format: webp } }
            validateOptions: true
          }
        )
        height
        width
      }
      productCategories {
        name
      }
      sizes {
        name
        keyword
      }
    }
    productCategories {
      name
    }
  }
`;

export const GET_PRODUCTS_WITH_CATEGORIES = gql`
  {
    products {
      id
      title
      price
      rating
      description
      slug
      coverImage {
        url(
          transformation: {
            document: { output: { format: webp } }
            validateOptions: true
          }
        )
        height
        width
      }
      productCategories {
        name
      }
      sizes {
        name
        keyword
      }
      colors {
        hex
      }
    }

    productCategories {
      name
    }
  }
`;

export const GET_PRODUCT_CATEGORIES = gql`
  {
    productCategories {
      name
    }
  }
`;

export const GET_SINGLE_PRODUCT_BY_SLUG = gql`
  query Product($slug: String!) {
    product(where: { slug: $slug }) {
      id
      slug
      title
      rating
      description
      price
      coverImage {
        url(transformation: { document: { output: { format: webp } } })
      }
      productDetails {
        markdown
      }
      colors {
        hex
      }
      sizes {
        name
        keyword
      }
      productImages {
        url
        width
        height
      }
      productCategories {
        name
      }
    }
  }
`;

export const GET_PATHS = gql`
  {
    products {
      slug
    }
  }
`;
