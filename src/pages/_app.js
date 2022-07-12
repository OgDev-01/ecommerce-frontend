import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../../prismicio";
import Links from "@/components/atoms/Link";
import { RecoilRoot } from "recoil";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Links {...props} path={href}>
            {children}
          </Links>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <Component {...pageProps} />
        </PrismicPreview>
      </PrismicProvider>
    </RecoilRoot>
  );
}

export default MyApp;
