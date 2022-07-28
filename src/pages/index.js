import { createClient } from '../../prismicio';
import { GET_PRODUCTS_WITH_CATEGORIES } from '@/base/libs/gqlQueries';
import { useEffect } from 'react';
import ComponentHome from '@/components/organisms/Pages/ComponentHomePage';
import {
  productCategoriesState,
  productsState,
} from '@/base/context/Atoms/atomstate';
import { useSetRecoilState } from 'recoil';
import Layout from '@/components/organisms/Layouts/Layout';
import { client } from '@/base/libs/apolloClient';
import useSWR from 'swr';

export default function Home({ documents, products, productCategories }) {
  const setProductState = useSetRecoilState(productsState);
  const setCategries = useSetRecoilState(productCategoriesState);
  const fetcher = (query) =>
    client.query({
      query,
    });

  const { data: clientProducts } = useSWR(
    GET_PRODUCTS_WITH_CATEGORIES,
    fetcher,
    { fallbackData: products }
  );
  useEffect(() => {
    setProductState(clientProducts);
    setCategries(productCategories);
  }, [clientProducts]);

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
    query: GET_PRODUCTS_WITH_CATEGORIES,
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
