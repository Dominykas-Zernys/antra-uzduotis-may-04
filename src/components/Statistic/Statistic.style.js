import styled from 'styled-components';

export const Statistic = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 15px #c0c0c0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  padding: 30px;

  & > p {
    color: #858585;
    text-transform: uppercase;
  }

  & > h3 {
    color: #1ca35e;
  }
`;
