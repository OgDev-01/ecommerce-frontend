import HorizontalLine from '@/components/atoms/horizontalLine';
import ComponentNotCreated from '@/components/molecules/ComponentNotCreated';
import Layout from '@/components/organisms/Layouts/Layout';
import React from 'react';

export default function checkout() {
  return (
    <Layout>
      <br />
      <center>
        <h1>Checkout</h1>
      </center>
      <HorizontalLine />
      <br />
      <ComponentNotCreated component='Checkout'></ComponentNotCreated>
    </Layout>
  );
}
