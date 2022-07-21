import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/molecules/Header';
import { useRouter } from 'next/router';
import Nav from '@/components/molecules/Nav';
import Footer from '../../molecules/Footer';
import SearchOverlay from '@/components/molecules/SearchOverlay';
import {
  navState,
  searchToggle,
  cartState,
} from '@/base/context/Atoms/atomstate';
import { useRecoilValue } from 'recoil';
import Cart from '@/components/molecules/Cart';
import NotMobile from '../Pages/ComponentNotMobile';
const Layout = ({ children, ...customMeta }) => {
  const [mounted, setMounted] = useState(true);
  const isOpen = useRecoilValue(navState);
  const searchOpen = useRecoilValue(searchToggle);
  const cartOpen = useRecoilValue(cartState);
  const router = useRouter();
  const meta = {
    type: 'website',
    description:
      'Open Fashion - Free Ecommerce UI Kit is a free download UI kit. You can open Open Fashion - Free Ecommerce UI Kit file by Figma.',
    ...customMeta,
  };
  useEffect(() => {
    if (isOpen || cartOpen) {
      document.documentElement.classList.add('block-scroll');
    } else {
      document.documentElement.classList.remove('block-scroll');
    }
  }, [isOpen, cartOpen]);

  // mobile online restriction function
  const deviceType = () => {
    const userAgent = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
      return 'tablet';
    } else if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        userAgent
      )
    ) {
      return 'mobile';
    }
    return 'desktop';
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      const agent = deviceType();
      agent !== 'mobile' ? setMounted(false) : setMounted(true);
    }
  }, [mounted]);

  if (!mounted) {
    return <NotMobile />;
  }

  return (
    <div className='main-wrapper'>
      <Head>
        <title>{meta.title}</title>
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

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          rel='preload'
          as='font'
          href='/fonts/BodoniModa_28pt-BoldItalic.ttf'
          crossOrigin='anonymous'
        ></link>
        <link rel='preload' as='image' href='/images/icons/Close.svg'></link>
        <link rel='preload' as='image' href='/images/icons/Location.svg'></link>
        <link rel='preload' as='image' href='/images/icons/Call.svg'></link>
        <link rel='preload' as='image' href='/images/icons/Twitter.svg'></link>
        <link rel='preload' as='image' href='/images/icons/YouTube.svg'></link>
        <link rel='preload' as='image' href='/images/icons/Plus.svg'></link>
        <link
          rel='preload'
          as='image'
          href='/images/icons/Plus-dark.svg'
        ></link>
        <link
          rel='preload'
          as='image'
          href='/images/icons/minus-dark.svg'
        ></link>
        <link
          rel='preload'
          as='image'
          href='/images/icons/Instagram.svg'
        ></link>
      </Head>
      <Header />
      {isOpen && <Nav />}
      {searchOpen && <SearchOverlay />}
      {cartOpen && <Cart />}
      <main>{children}</main>
      {router.asPath !== '/about' && <Footer />}
    </div>
  );
};

export default Layout;
