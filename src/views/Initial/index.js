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
  const [savedRepos, setSavedRepos] = useState([]);

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

  function saveRepo(id) {
    const repo = repositories.find(repository => repository.id === id);
    setSavedRepos([...savedRepos, repo]);
  }

  return (
    <>
      <Column>
        <SearchField
          handleSearch={handleSearch}
          setSearch={setSearch}
          search={search}
        />
        <SavedRepos savedRepos={savedRepos} />
      </Column>
      <Column>
        <SearchResults
          repositories={repositories}
          lastSearch={lastSearch}
          saveRepo={saveRepo}
        />
      </Column>
    </>
  );
};

export default Initial;
