import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Typography from '@pagerland/common/src/components/Typography';

import ArrowRight from '@pagerland/icons/src/line/ArrowRight';
import Local from '../../Local';
import data from '../../data';

const Footer = ({
  name,
  title,
  copyright,
  WrapperProps,
  ContainerProps,
  TitleProps,
  TextProps,
  CopyrightWrapperProps,
  CopyrightTextProps,
  direction,
  phone,
  email
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Fade cascade bottom duration={600}>
        <Typography {...TitleProps}><Local code={title} /></Typography>
      </Fade>
      <Typography {...TextProps}><Local code={direction} /> | <Local code={phone} /> | <Local code={email} /></Typography>
      <Box {...CopyrightWrapperProps}>
        <Typography {...CopyrightTextProps}>{copyright}</Typography>
      </Box>
    </Container>
  </Box>
);

Footer.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.node,
  text: PropTypes.node,
  cta: PropTypes.shape({
    label: PropTypes.node,
  }),
  features: PropTypes.arrayOf(
    PropTypes.shape({
      IconProps: PropTypes.object,
      title: PropTypes.node,
      text: PropTypes.node,
    }),
  ),
  copyright: PropTypes.node,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  TitleProps: PropTypes.object,
  GridProps: PropTypes.object,
  TextProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  CtaProps: PropTypes.object,
  FeaturesGridProps: PropTypes.object,
  FeatureItemProps: PropTypes.object,
  FeatureIconProps: PropTypes.object,
  FeatureTitleProps: PropTypes.object,
  FeatureTextProps: PropTypes.object,
  CopyrightWrapperProps: PropTypes.object,
  CopyrightTextProps: PropTypes.object,
  SocialLinksProps: PropTypes.object,
  SocialLinkProps: PropTypes.object,
};

Footer.defaultProps = {
  ...data.footer,
  copyright: data.copyright,
  WrapperProps: {
    bg: 'gray.0',
    pt: {
      _: 48,
      md: 64,
      lg: 160,
    },
    pb: {
      _: 3,
      md: 4,
      lg: 5,
    },
  },
  TitleProps: {
    as: 'h3',
    variant: 'h2',
    color: 'gray.6',
    mb: {
      _: 3,
      md: 4,
      lg: 5,
    },
  },
  GridProps: {
    gridTemplateColumns: {
      _: '1fr',
      lg: '1fr 2fr',
    },
    gridGap: '32px',
  },
  TextProps: {
    color: 'gray.2',
    mb: 4,
  },
  CtaProps: {
    variant: 'link',
    icon: ArrowRight,
  },
  FeaturesGridProps: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridColumnGap: '24px',
    gridRowGap: '32px',
  },
  FeatureItemProps: {
    flexBox: true,
    flexDirection: {
      _: 'column',
      md: 'row',
    },
  },
  FeatureIconProps: {
    color: 'brand',
    fontSize: 48,
    mr: 3,
    mb: {
      _: 3,
      md: 0,
    },
  },
  FeatureTitleProps: {
    color: 'gray.6',
    variant: 'h4',
    as: 'h4',
  },
  FeatureTextProps: {
    color: 'gray.2',
  },
  CopyrightWrapperProps: {
    flexBox: true,
    flexDirection: {
      _: 'column',
      md: 'row',
    },
    justifyContent: 'space-between',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: 'gray.1',
    pt: {
      _: 3,
      md: 4,
      lg: 5,
    },
    mt: {
      _: 3,
      md: 4,
      lg: 5,
    },
  },
  CopyrightTextProps: {
    variant: 'small',
    color: 'gray.1',
  },
  SocialLinksProps: {
    flexBox: true,
  },
  SocialLinkProps: {
    color: 'brand',
    p: 0,
    fontSize: 24,
    ml: {
      _: 0,
      md: 4,
    },
    mt: {
      _: 3,
      md: 0,
    },
    mr: {
      _: 4,
      md: 0,
    },
  },
};

export default Footer;
