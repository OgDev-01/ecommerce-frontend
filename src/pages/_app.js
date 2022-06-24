import { Apollo } from "../base/libs/apolloClient";
import Layout from "../components/organisms/Layouts/Layout";
import "../styles/globals.scss";
function MyApp({ Component, pageProps }) {
  return (
    <Apollo>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </Apollo>
  );
}

export default MyApp;
