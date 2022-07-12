import Layout from "@/components/organisms/Layouts/Layout";
import ComponentContact from "@/components/organisms/Pages/ComponentContactPage";
import { createClient } from "../../prismicio";
export default function Contact({ documents }) {
  const { data } = documents;
  console.log(data);
  return (
    <Layout title={data.title}>
      <ComponentContact {...data} />;
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const documents = await client.getByUID("contact", "contact");
  return {
    props: {
      documents,
    },
  };
}
