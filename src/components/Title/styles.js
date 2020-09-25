import styled from 'styled-components';

import { blue } from '../../styles/colors';

export const Container = styled.div`
  width: 125px;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-top: 4.25rem;
`;

export const Title = styled.h1`
  font-weight: 900;
  color: ${blue};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  padding-left: 31px;
`;
