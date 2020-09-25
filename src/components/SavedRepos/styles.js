import styled from 'styled-components';

import { blue, darkGray, lightGray, orange } from '../../styles/colors';

export const Container = styled.div`
  margin: 55px 31px;
  padding: 20px 23px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${blue};
  border-radius: 20px;
  min-height: 50px;
`;

export const SavedTitle = styled.h2`
  font-size: 1.125rem;
  line-height: 22px;
  color: ${blue};
  font-weight: 700;
  line-height: 0;

  svg {
    margin-right: 10px;
    position: relative;
    top: 2px;
  }
`;

export const Saved = styled.div`
  margin-top: 28px;
  background-color: #fff;
  border-radius: 10px;

  &:hover {
    background-color: ${lightGray};
  }

  h3 {
    font-size: 13px;
    line-height: 15px;
    font-weight: 700;
    color: ${darkGray};
    margin-bottom: 15px;
  }
`;

export const SavedTags = styled.div`
  background-color: ${lightGray};
  border-radius: 10px;
  padding: 10px 13px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 184px;
  p {
    color: ${orange};
    text-decoration: underline;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
  }
`;
