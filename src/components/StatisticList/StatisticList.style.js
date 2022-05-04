import styled from 'styled-components';

export const StatisticList = styled.div`
  display: flex;
  gap: 15px;
  margin: 0 10px 30px;
  width: calc(100%-20px);

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
