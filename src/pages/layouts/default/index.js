import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function Defaultlayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

Defaultlayout.propTypes = {
  children: PropTypes.element.isRequired,
};
