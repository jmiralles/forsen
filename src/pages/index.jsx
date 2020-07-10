import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

import Theme, { theme } from '@pagerland/themes/src/RealEstate';
import {
  Navbar,
  Welcome,
  About,
  Materials,
  Location,
  Contact,
  Footer,
} from '@pagerland/themes/src/RealEstate/containers';

import preview from '@pagerland/themes/src/RealEstate/assets/escavadora.jpg';

import SEO from '../components/SEO';

const RealEstate = ({ url }) => (
  <Theme>
    <Helmet>
      <link href={theme.typography.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.primary} />
      <meta property="og:image" content={`${url}${preview}`} />
    </Helmet>
    <SEO title="Forsen SL" />

    <Navbar />
    <Welcome name="" />
    <About name="about" />
    <Materials name="materials" />
    <Location name="location" />
    <Contact name="contact" />
    <Footer name="about-us" />
  </Theme>
);

RealEstate.propTypes = {
  url: PropTypes.string,
};

RealEstate.defaultProps = {
  url: 'https://www.forsen.es',
};

export default RealEstate;
