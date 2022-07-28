import Layout from '@/components/organisms/Layouts/Layout';
import { client } from '@/base/libs/apolloClient';
import { GET_PATHS, GET_SINGLE_PRODUCT_BY_SLUG } from '@/base/libs/gqlQueries';
import ProductDetailsPage from '@/components/organisms/Pages/ComponentProductDetailsPage';
export default function ProductDetails({ product }) {
  const { title, description } = product;
  return (
    <Layout title={title} description={description}>
      <ProductDetailsPage {...product} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_PATHS,
  });
  const { products } = data;
  const paths = products.map((path) => ({
    params: { slug: path.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const { slug } = params;
  const { data } = await client.query({
    query: GET_SINGLE_PRODUCT_BY_SLUG,
    variables: { slug },
  });
  const { product } = data;
  return {
    props: { product },
  };
}
