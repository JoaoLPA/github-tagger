import React, { useState, useEffect } from 'react';
import { Download, Star, GitBranch, AlertCircle, Plus } from 'react-feather';
import { Link, useRouteMatch } from 'react-router-dom';
import api from '../../services/api';

import {
  RepoDetail,
  DetailsHeader,
  DetailsNumbers,
  DetailDescription,
  TagContainer,
  TagContainerHeader,
  SavedTagsContainer,
} from './styles';

const Details = () => {
  const { params } = useRouteMatch();

  const [repository, setRepository] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [tags, setTags] = useState('');
  const [savedTags, setSavedTags] = useState([]);
  const [savedRepos, setSavedRepos] = useState(
    JSON.parse(localStorage.getItem('reposLocalStorage')) || [],
  );

  function saveRepo() {
    setIsSaved(true);
    setSavedRepos([...savedRepos, repository]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTags('');
    const tagArray = tags.split(' ');
    setSavedTags([...savedTags, ...tagArray]);
  }

  function removeTag() {}

  useEffect(() => {
    api
      .get(`repos/${params.repository}`)
      .then(response => setRepository(response.data))
      .catch(error => {
        console.log(error);
      });
  }, [params.repository]);

  useEffect(
    () => localStorage.setItem('reposLocalStorage', JSON.stringify(savedRepos)),
    [savedRepos],
  );

  useEffect(() => {
    if (repository !== null) {
      setIsSaved(true);
    }
  }, [repository]);
  return (
    <>
      <RepoDetail>
        <DetailsHeader>
          <img src={repository?.owner.avatar_url} alt="Logo do repositório" />
          <div>
            <strong>{repository?.name}</strong>
            <DetailsNumbers>
              <p>
                <span>
                  <Star /> {repository?.stargazers_count}
                </span>
                <span>
                  <GitBranch />
                  {repository?.forks_count}
                </span>
                <span>
                  {' '}
                  <AlertCircle />
                  {repository?.open_issues_count}
                </span>
              </p>
            </DetailsNumbers>
          </div>
        </DetailsHeader>
        <div></div>
        <DetailDescription>
          <h2>Descrição</h2>
          <p>{repository?.description}</p>
        </DetailDescription>
        {!isSaved && (
          <button onClick={() => saveRepo()}>
            <Download size={11} />
          </button>
        )}
      </RepoDetail>
      {isSaved && (
        <TagContainer>
          <TagContainerHeader>
            <h2>Tags</h2>
            <form onSubmit={handleSubmit}>
              <input
                value={tags}
                onChange={({ target }) => setTags(target.value)}
                placeholder="produtividade interessante experimentar"
              ></input>
              <button type="submit">
                <Plus size={18} />
              </button>
            </form>
          </TagContainerHeader>
          <SavedTagsContainer>
            {savedTags.map(tag => (
              <button>tag</button>
            ))}
          </SavedTagsContainer>
        </TagContainer>
      )}
    </>
  );
};

export default Details;
