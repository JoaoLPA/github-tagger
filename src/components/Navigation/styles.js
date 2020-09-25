import styled from 'styled-components';

import { orange } from '../../styles/colors';

export const Container = styled.div`
  width: 290px;
  padding: 8.625rem 31px 0;

  a {
    background-color: ${orange};
    padding: 14px 24px;
    color: #fff;
    font-weight: 700;
    font-size: 0.75rem;
    border: 2px solid #fff;
    outline: none;
    border-radius: 20px;
    width: 86px;
    align-self: flex-end;
    margin-top: 13px;
    text-decoration: underline;
    transition: background-color 0.1s ease-out;
    transition: border 0.1s ease-out;
    transition: color 0.1s ease-out;

    &:hover {
      background-color: #fff;
      border: 2px solid ${orange};
      color: ${orange};
    }

    svg {
      position: relative;
      top: 8px;
    }
  }
`;
