import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  font-family: Arial, helvetica, sans-serif;
  border-top: solid 1px lightblue;
  border-bottom: solid 1px lightblue;
  padding: 20px 0;
  margin-bottom: 20px;

  div {
    flex: 1;
  }

  .information, .buttons {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }
`;
