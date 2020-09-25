import React, { useState } from 'react';
import api from '../../services/api';

import { Column } from '../../styles/column';

import SearchField from '../../components/SearchField';
import SavedRepos from '../../components/SavedRepos';
import SearchResults from '../../components/SearchResults';

const Initial = () => {
  const [search, setSearch] = useState('');
  const [lastSearch, setLastSearch] = useState('');
  const [repositories, setRepositories] = useState([]);

  async function handleSearch(event) {
    event.preventDefault();
    setRepositories([]);
    const terms = search.split(' ');
    setLastSearch([...terms]);
    const queryConstructor = terms
      .map(term => `topic:${term}`)
      .toString()
      .replace(/,/gi, '&');
    const response = await api.get(
      `search/repositories?q=${queryConstructor}&per_page=10&page=1`,
    );
    const repos = [...response.data.items];
    setSearch('');
    setRepositories([...repositories, ...repos]);
  }

  return (
    <>
      <Column>
        <SearchField
          handleSearch={handleSearch}
          setSearch={setSearch}
          search={search}
        />
        <SavedRepos />
      </Column>
      <Column>
        <SearchResults repositories={repositories} lastSearch={lastSearch} />
      </Column>
    </>
  );
};

export default Initial;
