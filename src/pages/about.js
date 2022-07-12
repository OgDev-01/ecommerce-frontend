import Layout from "@/components/organisms/Layouts/Layout";
import ComponentAbout from "@/components/organisms/Pages/ComponentAboutPage";
import { createClient } from "../../prismicio";

export default function about({ documents }) {
  const { data } = documents;

  return <Layout title={data.title}>
    <ComponentAbout {...data} />
  </Layout>
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const documents = await client.getByUID("about", "about");
  return {
    props: {
      documents,
    },
  };
}
