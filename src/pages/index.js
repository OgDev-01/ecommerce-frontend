import { createClient } from '../../prismicio';
import { fetcher } from '@/base/functions/functions';
import { useEffect } from 'react';
import ComponentHome from '@/components/organisms/Pages/ComponentHomePage';
import {
  productCategoriesState,
  productsState,
} from '@/base/context/Atoms/atomstate';
import { useSetRecoilState } from 'recoil';
import Layout from '@/components/organisms/Layouts/Layout';
import { gql } from '@apollo/client';
import { client } from '@/base/libs/apolloClient';

export default function Home({ documents, products, productCategories }) {
  const setProductState = useSetRecoilState(productsState);
  const setCategries = useSetRecoilState(productCategoriesState);
  useEffect(() => {
    if (products && products.length) {
      setProductState(products);
    }
    setCategries(productCategories);
  });
  const { data } = documents;
  return (
    <Layout title={data.title}>
      <ComponentHome {...data} />;
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  // Hygraph contents for products and blogs
  const { data } = await client.query({
    query: gql`
      query {
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
  // Prismic Cms page data for home page
  const prismic_client = createClient({ previewData });
  const documents = await prismic_client.getByUID('home', 'home');

  return {
    props: {
      documents,
      products,
      productCategories,
    },
  };
}
