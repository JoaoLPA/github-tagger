import React, { useState, useEffect } from 'react';
import { Download } from 'react-feather';
import { Link } from 'react-router-dom';

import { Container, SavedTitle, Saved, SavedTags } from './styles';

const SavedRepos = () => {
  const [savedRepos] = useState(
    JSON.parse(localStorage.getItem('reposLocalStorage')) || [],
  );

  useEffect(
    () => localStorage.setItem('reposLocalStorage', JSON.stringify(savedRepos)),
    [savedRepos],
  );

  return (
    <Container>
      <SavedTitle>
        {' '}
        <Download size={18} />
        Repo's Salvos
      </SavedTitle>
      {savedRepos.reverse().map(({ id, full_name, name, tags }) => (
        <Saved key={id}>
          <Link to={`/repository/${full_name}`}>@{name}</Link>
          <SavedTags>
            {tags.map(tag => (
              <p>{tag}</p>
            ))}
          </SavedTags>
        </Saved>
      ))}
    </Container>
  );
};

export default SavedRepos;
