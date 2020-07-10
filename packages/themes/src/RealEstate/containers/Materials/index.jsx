import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';

import Box from '@pagerland/common/src/components/Box';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';

import ArrowRight from '@pagerland/icons/src/line/ArrowRight';
import data from '../../data';
import { StyledGrid, StyledImg } from './styled.components';

const Materials = ({
  name,
  sections,
  title,
  WrapperProps,
  GridProps,
  ImgProps,
  ContainerProps,
  CaptionProps,
  TopTitleProps,
  BoxProps,
  TitleProps,
  TextProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Box {...BoxProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TopTitleProps}>{title}</Typography>
        </Fade>
      </Box>
    </Container>
    <StyledGrid {...GridProps}>
      {sections.map((section, key) => (
        <React.Fragment key={key}>
          <StyledImg {...ImgProps} {...section.ImgProps} />
          <Box {...CaptionProps}>
            <Fade cascade bottom duration={600}>
              <Typography {...TitleProps}>{section.title}</Typography>
              <Typography {...TextProps}>{section.text}</Typography>
            </Fade>
          </Box>
        </React.Fragment>
      ))}
    </StyledGrid>
  </Box>
);

Materials.propTypes = {
  name: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      ImgProps: PropTypes.object,
      title: PropTypes.node,
      text: PropTypes.node,
    }),
  ),
  WrapperProps: PropTypes.object,
  GridProps: PropTypes.object,
  ImgProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  TitleProps: PropTypes.object,
  TextProps: PropTypes.object,
  CtaProps: PropTypes.object,
};

Materials.defaultProps = {
  WrapperProps: {
    overflow: 'hidden',
    pt: 80,
    pb: 0,
  },
  GridProps: {
    gridTemplateColumns: {
      _: '1fr',
      md: 'repeat(2, 1fr)',
      lg: 'repeat(3, 1fr)',
    },
    gridTemplateRows: {
      _: 'auto',
      lg: 'repeat(2, 1fr)',
    },
    gridAutoFlow: {
      _: 'row',
      lg: 'column',
    },
  },
  ImgProps: {
    width: '100%',
    height: {
      _: 'auto',
      md: '100%',
    },
  },
  CaptionProps: {
    bg: 'gray.0',
    p: {
      _: 4,
      lg: 5,
    },
    flexBox: true,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  TopTitleProps: {
    as: 'h2',
    variant: 'h2',
    mb: 4,
  },
  BoxProps: {
    maxWidth: 736,
    mx: 'auto',
  },
  TitleProps: {
    as: 'h3',
    variant: 'h3',
    color: 'gray.6',
    mb: 4,
  },
  TextProps: {
    color: 'gray.3',
    mb: 4,
  },
  CtaProps: {
    variant: 'link',
    icon: ArrowRight,
  },
  ...data.materials,
};

export default Materials;
