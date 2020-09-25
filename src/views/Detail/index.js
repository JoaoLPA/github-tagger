import React from 'react';
import { Column } from '../../styles/column';
import Navigation from '../../components/Navigation';
import Details from '../../components/Details';
import SavedRepos from '../../components/SavedRepos';

const Detail = () => {
  return (
    <>
      <Column>
        <Navigation />
        <SavedRepos />
      </Column>
      <Column>
        <Details />
      </Column>
    </>
  );
};

export default Detail;
