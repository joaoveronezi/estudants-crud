import React, { useState } from "react";
import {
  Container,
  DetailsWrapper,
  InfoContainer,
  InformationWrapper,
} from "./Styled";
import { app } from "../../utils/firebase";
import Actions from "../Actions";

const List = ({ estudante }) => {
  return (
    <>
      {estudante.length > 0 ? (
        estudante.map((estudante, index) => (
          <Container key={index}>
            <img
              src={estudante.foto}
              alt={estudante.nome}
              height="212px"
              width="200px"
            />
            <DetailsWrapper>
              <InformationWrapper>
                <InfoContainer>
                  <h2>Nome: </h2>
                  <h2>{estudante.nome}</h2>
                </InfoContainer>
                <InfoContainer>
                  <h2>Endereço: </h2>
                  <h2>{estudante.endereco}</h2>
                </InfoContainer>
              </InformationWrapper>
              <Actions estudante={estudante} />
            </DetailsWrapper>
          </Container>
        ))
      ) : (
        <h1>Não Ha informações!</h1>
      )}
    </>
  );
};

export default List;
