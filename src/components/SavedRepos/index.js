import React from 'react';
import { Download } from 'react-feather';

import { Container, SavedTitle, Saved, SavedTags } from './styles';

const SavedRepos = ({ savedRepos }) => {
  return (
    <Container>
      <SavedTitle>
        {' '}
        <Download size={18} />
        Repo's Salvos
      </SavedTitle>
      {savedRepos.map(repository => (
        <Saved key={repository.id}>
          <h3>@{repository.name}</h3>
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
