import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Column } from '../../styles/column';
import Navigation from '../../components/Navigation';
import Details from '../../components/Details';
import SavedRepos from '../../components/SavedRepos';

const Detail = () => {
  const { params } = useRouteMatch();

  const [repoTags, setRepoTags] = useState({});

  function addTag() {}

  function removeTag() {}

  return (
    <>
      <Column>
        <Navigation />
        <SavedRepos />
      </Column>
      <Column>
        {/* <div>
          <h1>Detalhe: {params.repository}</h1>
        </div> */}
        <Details />
      </Column>
    </>
  );
};

export default Detail;
