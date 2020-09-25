import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'react-feather';

import { Container } from './styles';

const Navigation = () => {
  return (
    <Container>
      <Link to="/">
        {' '}
        <ChevronLeft size={24} /> voltar
      </Link>
    </Container>
  );
};

export default Navigation;
