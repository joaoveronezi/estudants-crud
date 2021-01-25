import styled from 'styled-components';

export const Container  = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;


export const Formulary = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    margin: 20px;
    height: 25px;
  }
  p {
    margin: -5px;
  }
`;