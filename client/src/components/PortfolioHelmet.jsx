import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PortfolioHelmet = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <style>{'body { background-color: #FFFFF0 }'}</style>
      </Helmet>
    </HelmetProvider>
  )
}

export default PortfolioHelmet;