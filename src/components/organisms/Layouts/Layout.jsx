import { useEffect } from "react";
import Head from "next/head";
import Header from "@/components/molecules/Header";
import { useRouter } from "next/router";
import Nav from "@/components/molecules/Nav";
import Footer from "../../molecules/Footer";
import SearchOverlay from "@/components/molecules/SearchOverlay";
import { navState, searchToggle } from "@/base/context/Atoms/atomstate";
import { useRecoilValue } from "recoil";
const Layout = ({ children, ...customMeta }) => {
  const isOpen = useRecoilValue(navState);
  const searchOpen = useRecoilValue(searchToggle);
  const router = useRouter();
  const meta = {
    type: "website",
    ...customMeta,
  };
  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("block-scroll");
    } else {
      document.documentElement.classList.remove("block-scroll");
    }
  }, [isOpen]);
  return (
    <div className='main-wrapper'>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta property='og:type' content={meta.type} />
        <meta
          property='og:site_name'
          content='Open-fashion online ecommerce store'
        />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@O_sunday15' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}
      </Head>
      <Header />
      {isOpen && <Nav />}
      {searchOpen && <SearchOverlay />}
      <main>{children}</main>
      {router.asPath !== "/about" && <Footer />}
    </div>
  );
};

export default Layout;
