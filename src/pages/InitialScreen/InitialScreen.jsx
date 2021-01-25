import React from 'react';
import { useHistory } from "react-router-dom";
import {Button, Container, Title} from './Styled.js';


const InitialScreen = () => {
  const history = useHistory();

  return (
    <Container>
      <Title>Bem vindo ao CRUD de estudantes</Title>
      <h3>Click no botão para continuar</h3>
      <Button onClick={() => history.push("/home")}>Entrar</Button>
    </Container>
  )
}

export default InitialScreen;