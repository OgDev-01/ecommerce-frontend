import Layout from '@/components/organisms/Layouts/Layout';
import React from 'react';
import ComponentNotFound from '../components/organisms/Pages/ComponentNotFound/ComponentNotFound';

const PageError = () => {
  const spec = {
    text: 'Home Page',
    urlPath: '/',
    icon: {
      url: '/images/icons/arrow-left.svg',
      alt: 'arrow right',
      position: 'left',
    },
    type: 'link',
    variants: 'default',
  };
  return (
    <Layout>
      <ComponentNotFound {...spec} />
    </Layout>
  );
};

export default PageError;
