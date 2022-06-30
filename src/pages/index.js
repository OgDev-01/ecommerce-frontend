import Button from "@/components/atoms/button";
import { createClient, linkResolver } from "../../prismicio";

import ComponentHome from "@/components/organisms/Pages/ComponentHomePage";
export default function Home({ documents }) {
  const { data } = documents;
  console.log(data);
  return <ComponentHome {...data} />;
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const documents = await client.getByUID("home", "home");

  return {
    props: {
      documents,
    },
  };
}
