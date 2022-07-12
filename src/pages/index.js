import { createClient } from "../../prismicio";
import { fetcher } from "@/base/functions/functions";
import { useEffect } from "react";
import ComponentHome from "@/components/organisms/Pages/ComponentHomePage";
import { productsState } from "@/base/context/Atoms/atomstate";
import { useSetRecoilState } from "recoil";
import Layout from "@/components/organisms/Layouts/Layout";

export default function Home({ documents, products }) {
  const setProductState = useSetRecoilState(productsState);
  useEffect(() => {
    if (products && products.length) {
      setProductState(products);
    }
  });
  const { data } = documents;
  return (
    <Layout title={data.title}>
      <ComponentHome {...data} />;
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const response = await fetcher(
    `${process.env.STRAPI_ENDPOINT_PRODUCTION}/products?populate=*`
  );
  const { data: products } = response;
  const documents = await client.getByUID("home", "home");

  return {
    props: {
      documents,
      products,
    },
  };
}
