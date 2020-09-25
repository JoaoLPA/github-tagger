import React from 'react';
import { Download } from 'react-feather';
import { Link } from 'react-router-dom';

import { Container, SavedTitle, Saved, SavedTags } from './styles';

const SavedRepos = ({ savedRepos }) => {
  return (
    <Container>
      <SavedTitle>
        {' '}
        <Download size={18} />
        Repo's Salvos
      </SavedTitle>
      {savedRepos.map(({ id, full_name, name }) => (
        <Saved key={id}>
          <Link to={`/repository/${full_name}`}>@{name}</Link>
          <SavedTags>
            <p>produtividade</p>
            <p>typescript</p>
            <p>estudar</p>
            <p>react</p>
            <p>react</p>
            <p>react</p>
          </SavedTags>
        </Saved>
      ))}
    </Container>
  );
};

export default SavedRepos;
