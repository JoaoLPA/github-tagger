import React, { useState, useEffect } from 'react';
import { Download, Star, GitBranch, AlertCircle, Plus, X } from 'react-feather';
import { useRouteMatch } from 'react-router-dom';
import api from '../../services/api';

import {
  RepoDetail,
  DetailsHeader,
  DetailsNumbers,
  DetailDescription,
  TagContainer,
  TagContainerHeader,
  SavedTagsContainer,
  DeleteButton,
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
    repository.tags = savedTags;
    setSavedRepos([...savedRepos, repository]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTags('');
    const tagArray = tags.split(' ');
    const updatedRepository = repository;
    updatedRepository.tags = tagArray;
    setRepository(updatedRepository);
    setSavedTags([...tagArray]);
  }

  function removeTag(value) {
    setSavedTags(savedTags.filter(tag => tag !== value));
  }

  function removeRepo() {
    setIsSaved(false);
    setSavedRepos(savedRepos.filter(repo => repo.id !== repository.id));
  }

  useEffect(() => {
    api
      .get(`repos/${params.repository}`)
      // .then(response => setRepository(response.data))
      .then(response => {
        const repo = response.data;
        repo.tags = [];
        setRepository(repo);
      })
      .catch(error => {
        console.log(error);
      });
  }, [params.repository]);

  useEffect(
    () => localStorage.setItem('reposLocalStorage', JSON.stringify(savedRepos)),
    [savedRepos, savedTags],
  );

  useEffect(() => {
    setIsSaved(savedRepos.some(repo => repo.full_name === params.repository));
  }, [savedRepos]);

  return (
    <>
      <RepoDetail>
        {isSaved && (
          <DeleteButton onClick={() => removeRepo()}>
            <X size={18} />
          </DeleteButton>
        )}
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
            {repository?.tags.map(tag => (
              <button
                key={tag}
                value={tag}
                onClick={({ target }) => removeTag(target.value)}
              >
                {tag}
              </button>
            ))}
          </SavedTagsContainer>
        </TagContainer>
      )}
    </>
  );
};

export default Details;
