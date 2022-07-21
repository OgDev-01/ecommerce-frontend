import {
  productCategoriesState,
  productsState,
} from '@/base/context/Atoms/atomstate';
import { client } from '@/base/libs/apolloClient';
import Layout from '@/components/organisms/Layouts/Layout';
import ProductsPage from '@/components/organisms/Pages/ComponentProductsPage';
import { gql } from '@apollo/client';
import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import useSWR from 'swr';
const GET_PRODUCTS = gql`
  {
    products {
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
export default function Products({ products, productCategories }) {
  const setProductState = useSetRecoilState(productsState);
  const productCatState = useSetRecoilState(productCategoriesState);
  const fetcher = (query) =>
    client.query({
      query,
    });
  const { data, error } = useSWR(GET_PRODUCTS, fetcher, {
    fallbackData: products,
  });

  useEffect(() => {
    setProductState(data);
    productCatState(productCategories);
  }, [data]);

  return (
    <Layout>
      <ProductsPage />
    </Layout>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      {
        products {
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
    `,
  });
  const { products, productCategories } = data;

  return {
    props: {
      products,
      productCategories,
    },
  };
}
