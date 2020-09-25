import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

const Detail = () => {
  const { params } = useRouteMatch();

  const [repoTags, setRepoTags] = useState({});

  function addTag() {}

  function removeTag() {}

  return (
    <div>
      <h1>Detalhe: {params.repository}</h1>
    </div>
  );
};

export default Detail;
