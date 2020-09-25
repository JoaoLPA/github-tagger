import styled, { keyframes } from 'styled-components';

import { darkGray, blue, orange } from '../../styles/colors';

const pulse = keyframes`
  0% {transform: scale(1.2);}
  50% {transform: scale(1.5);}
  100% {transform: scale(1.2);}
`

export const SearchTerms = styled.h2`
  color: ${darkGray};
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 22px;

  strong {
    font-weight: 700;
  }
`;

export const ResultRepos = styled.div`
  margin-top: 80px;

  a {
    border-radius: 20px;
    width: 620px;
    display: flex;
    align-items: center;
    background-color: ${blue};
    padding: 23px 43px;
    text-decoration: none;
    color: white;
    transition: transform 0.2s ease-in-out;
    position: relative;

    & + a {
      margin-top: 0.5rem;
    }

    img {
      height: 100px;
      border-radius: 50%;
      margin-right: 26px;
      background-color: #fff;
    }

    div {
      strong {
        font-size: 1.2rem;
        color: #fff;
        font-weight: 700;
        margin-bottom: 0.8rem;
      }
      p {
        color: #fff;
        font-weight: 300;
      }
    }

    button {
      position: absolute;
      background-color: ${orange};
      padding: 0;
      width: 28px;
      height: 28px;
      color: #fff;
      border: 1px solid ${blue};
      outline: none;
      border-radius: 50%;
      right: 10px;
      bottom: 10px;
      transition: background-color 0.2s ease-out;
      transition: border 0.15s ease-in;
      transition: color 0.1s ease-in;

      svg {
        position: relative;
        bottom: 3px;
      }

      &:hover {
        background-color: transparent;
        border: 2px solid ${orange};
        color: ${orange};
      }
    }

    &:hover {
      transform: scale(1.01);
    }
  }
`;

export const EmptySearch = styled.div`
  width: 620px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
   svg {
    color: ${blue};
    opacity: 0.1;
    animation: ${pulse} 2s linear infinite;
   }
`;
