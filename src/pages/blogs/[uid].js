import { createClient, linkResolver } from "../../../prismicio";
import * as prismicH from "@prismicio/helpers";
function Page({ page }) {
  if (!page) return null;
  console.log(page);
  switch (page.uid) {
    case "/home":
      return <p>About page</p>;
    case "about":
      return <p>About</p>;
    default:
      break;
  }
  return <div>Home</div>;
}

export default Page;

export async function getStaticProps({ params, previewData }) {
  console.log(params);
  const client = createClient({ previewData });

  const page = await client.getByUID("pages", params.uid);
  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();
  const documents = await client.getAllByType("page");
  return {
    paths: documents.map((doc) => ({
      params: { uid: prismicH.asLink(doc, linkResolver) },
    })),
    fallback: true,
  };
}
