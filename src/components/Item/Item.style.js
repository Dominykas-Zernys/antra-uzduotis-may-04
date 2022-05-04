import styled from 'styled-components';

export const Item = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 15px #c0c0c0;
  display: flex;
  height: 100px;
  overflow: hidden;
  width: 100%;

  & > img {
    height: 100%;
    object-fit: cover;
    width: 120px;
  }

  & > div {
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    padding: 0 50px;
    @media (max-width: 430px) {
      flex-direction: column;
      justify-content: center;
      padding: 0 10px;
    }
  }
`;

export const Title = styled.p`
  color: #1ca35e;
`;
export const SalesNumber = styled.p`
  color: #a09999;
`;
