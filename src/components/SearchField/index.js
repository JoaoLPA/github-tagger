import React from 'react';

import { Container } from './styles';

const SearchField = ({ handleSearch, setSearch, search }) => {
  return (
    <Container>
      <h2>Buscar por termos de interesse:</h2>
      <form onSubmit={handleSearch}>
        <input
          value={search}
          onChange={({ target }) => setSearch(target.value)}
          placeholder="react javascript"
        />
        <button type="submit">buscar</button>
      </form>
    </Container>
  );
};

export default SearchField;
