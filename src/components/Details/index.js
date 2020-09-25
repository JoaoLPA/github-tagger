import React from 'react';
import { Download, Star, GitBranch, AlertCircle, Plus } from 'react-feather';

import {
  RepoDetail,
  DetailsNumbers,
  DetailDescription,
  TagContainer,
  TagContainerHeader,
  SavedTagsContainer,
} from './styles';

const Details = () => {
  return (
    <>
      <RepoDetail>
        <img src="#" alt="Logo do repositório" />
        <div>
          <strong>Nome</strong>
          <DetailsNumbers>
            <p>
              <Star /> 156
            </p>
            <p>
              <GitBranch />
              42
            </p>
            <p>
              <AlertCircle />
              12
            </p>
          </DetailsNumbers>
        </div>
        <DetailDescription>
          <h2>Descrição</h2>
          <p>
            TypeScript is a superset of JavaScript that compiles to clean
            JavaScript output.
          </p>
        </DetailDescription>
        <button>
          <Download size={11} />
        </button>
      </RepoDetail>
      <TagContainer>
        <TagContainerHeader>
          <h2>Tags</h2>
          <form>
            <input></input>
            <button>
              <Plus size={18} />
            </button>
          </form>
        </TagContainerHeader>
        <SavedTagsContainer>
          <p>react</p>
        </SavedTagsContainer>
      </TagContainer>
    </>
  );
};

export default Details;
