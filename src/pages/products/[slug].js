import Layout from '@/components/organisms/Layouts/Layout';
import { fetcher } from '@/base/functions/functions';
export default function ProductDetails({ productsDetails }) {
  console.log(productsDetails);
  return (
    <Layout>
      <div>welcome to product details page</div>;
    </Layout>
  );
}

export async function getStaticPaths() {
  const response = await fetcher(
    `${process.env.STRAPI_ENDPOINT_PRODUCTION}/products?fields=slug`
  );
  const { data } = response;
  const paths = data.map((path) => ({
    params: { slug: path.attributes.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const response = await fetcher(
    `${process.env.STRAPI_ENDPOINT_PRODUCTION}/products/${params.slug}?populate=*`
  );
  const { data: productsDetails } = response;

  return {
    props: { productsDetails },
  };
}
