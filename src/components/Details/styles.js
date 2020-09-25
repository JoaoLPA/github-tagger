import styled from 'styled-components';

import { blue, orange, darkGray } from '../../styles/colors';

export const RepoDetail = styled.div`
  margin-top: 80px;
  border-radius: 20px;
  border: 1px solid ${blue};
  width: 620px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: center;
  padding: 23px 43px;
  text-decoration: none;
  position: relative;

  button {
    position: absolute;
    background-color: ${orange};
    padding: 0;
    width: 28px;
    height: 28px;
    color: #fff;
    border: 1px solid #fff;
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
`;

export const DetailsHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-direction: column;
    strong {
      font-size: 1.125rem;
      color: ${blue};
      font-weight: 700;
      margin-bottom: 0.8rem;
    }
    p {
      color: ${orange};
      font-weight: 300;
      span {
        & + span {
          margin-left: 1rem;
        }

        svg {
          position: relative;
          top: 4px;
          margin-right: 2px;
        }
      }
    }
  }

  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin-right: 26px;
    background-color: #fff;
  }
`;

export const DetailsNumbers = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  p {
    & + p {
      margin-left: 1.2rem;
    }
  }
`;

export const DetailDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;

  h2 {
    color: ${orange};
    font-weight: 900;
    font-size: 13px;
    line-height: 15px;
    margin-top: 22px;
  }

  p {
    color: ${blue};
    font-size: 14px;
    line-height: 20px;
  }
`;

export const TagContainer = styled.div`
  margin-top: 33px;
  border-radius: 20px;
  width: 620px;
  padding: 13px;
`;

export const TagContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    color: ${blue};
    font-weight: 900;
    font-size: 18px;
    line-height: 22px;
    padding-top: 6px;
  }

  input {
    height: 40px;
    border-radius: 20px;
    border: solid ${blue} 1px;
    padding: 13px 16px;
    font-size: 12px;
    font-weight: 400;
    color: ${blue};
    margin-right: 18px;

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
    padding: 0;
    width: 40px;
    height: 40px;
    color: #fff;
    border: 2px solid #fff;
    outline: none;
    border-radius: 50%;
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
      top: 2px;
    }
  }
`;

export const SavedTagsContainer = styled.div`
  border-radius: 20px;
  display: flex;
  align-items: center;
  background-color: ${blue};
  padding: 23px 43px;
  text-decoration: none;
  color: white;
  margin-top: 13px;
  button {
    padding: 0;
    background-color: transparent;
    outline: none;
    border: 0;
    color: #fff;

    & + button {
      margin-right: 12px;
    }
  }
`;
