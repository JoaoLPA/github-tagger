import React from 'react';
import { Download, GitHub } from 'react-feather';

import { SearchTerms, ResultRepos, EmptySearch } from './styles';

const SearchResults = ({ repositories, lastSearch, saveRepo }) => {
  const title = lastSearch.toString().replace(/,/gi, ', ');

  console.log(lastSearch.toString().replace(/,/gi, ', '));
  return (
    <ResultRepos>
      {lastSearch && (
        <SearchTerms>
          você buscou por: <strong>{title}</strong>
        </SearchTerms>
      )}
      {repositories.length !== 0 ? (
        repositories.map(({ id, name, html_url, description, owner }) => (
          <a key={id} href="#">
            <img src={owner.avatar_url} alt="Logo do repositório" />
            <div>
              <strong>{name}</strong>
              <p>{description}</p>
            </div>
            <button onClick={() => saveRepo(id)}>
              <Download size={11} />
            </button>
          </a>
        ))
      ) : (
        <EmptySearch>
          <GitHub size={240} />
        </EmptySearch>
      )}
    </ResultRepos>
  );
};

export default SearchResults;
