import React, { useEffect, useState } from "react";
import NovoEstudanteComponent from "../../components/NovoEstudante";
import ListComponent from "../../components/List";
import {
  Container,
  FormWrapper,
  ListWrapper,
  Title,
  InfoWrapper,
} from "./Styled";
import { app } from "../../utils/firebase";
const db = app.firestore();

const Home = () => {
  const [estudante, setEstudante] = useState([]);

  useEffect(() => {
    return db.collection("estudantes").onSnapshot((snapshot) => {
      const estudantesData = [];
      snapshot.forEach((doc) =>
        estudantesData.push({ ...doc.data(), id: doc.id })
      );
      setEstudante(estudantesData);
    });
  }, []);

  console.log(estudante);
  return (
    <Container>
      <Title>Bem vindo ao CRUD de Estudantes</Title>
      <InfoWrapper>
        <FormWrapper>
          <NovoEstudanteComponent />
        </FormWrapper>
        <ListWrapper>
          <ListComponent estudante={estudante} />
        </ListWrapper>
      </InfoWrapper>
    </Container>
  );
};

export default Home;
