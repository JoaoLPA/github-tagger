import React from 'react';
import { Download } from 'react-feather';

import { Container, SavedTitle, Saved, SavedTags } from './styles';

const SavedRepos = () => {
  return (
    <Container>
      <SavedTitle>
        {' '}
        <Download size={18} />
        Repo's Salvos
      </SavedTitle>
      <Saved>
        <h3>@lynnwallenstein</h3>
        <SavedTags>
          <p>produtividade</p>
          <p>typescript</p>
          <p>estudar</p>
          <p>react</p>
          <p>react</p>
          <p>react</p>
        </SavedTags>
      </Saved>
      <Saved>
        <h3>@lynnwallenstein</h3>
        <SavedTags>
          <p>produtividade</p>
          <p>typescript</p>
          <p>estudar</p>
          <p>react</p>
          <p>react</p>
          <p>react</p>
        </SavedTags>
      </Saved>
      <Saved>
        <h3>@lynnwallenstein</h3>
        <SavedTags>
          <p>produtividade</p>
          <p>typescript</p>
          <p>estudar</p>
          <p>react</p>
          <p>react</p>
          <p>react</p>
        </SavedTags>
      </Saved>
    </Container>
  );
};

export default SavedRepos;
