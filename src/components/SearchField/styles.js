import styled from 'styled-components';

import { orange, blue, darkGray } from '../../styles/colors';

export const Container = styled.div`
  width: 290px;
  padding: 8.625rem 31px 0;

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    height: 40px;
    border-radius: 20px;
    border: solid ${blue} 1px;
    padding: 13px 16px;
    font-size: 12px;
    font-weight: 400;
    color: ${blue};

    &::placeholder {
      color: ${darkGray};
      font-size: 12px;
      font-weight: 300;
    }

    &:focus {
      box-shadow: 0px 0px 2px ${blue};
    }
  }

  button {
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
  }

  h2 {
    font-size: 1rem;
    line-height: 19.2px;
    font-weight: 700;
    color: ${blue};
    width: 16ch;
    margin-bottom: 16px;
  }
`;
