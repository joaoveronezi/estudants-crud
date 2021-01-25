import React, { useState } from "react";
import { app } from "../../utils/firebase";
import { Container, Formulary } from "./Styled";

const db = app.firestore();

const NovoEstudante = () => {
  const [fileURL, setFileURL] = useState("");

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);

    setFileURL(await fileRef.getDownloadURL());
  };
  const RandomNumber = () => {
    return Math.random();
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const nome = e.target.username.value;
    const endereco = e.target.useradresss.value;
    if (!nome && !endereco) {
      return;
    }
    db.collection("estudantes").doc(RandomNumber().toString()).set({
      nome: nome,
      endereco: endereco,
      foto: fileURL,
    });
  };

  return (
    <Container>
      <Formulary onSubmit={onSubmit}>
        <p>Nome</p>
        <input type="text" name="username" placeholder="Nome" />
        <p>Endereço</p>
        <input type="text" name="useradresss" placeholder="Endereço " />
        <p>Foto</p>
        <input type="file" onChange={onFileChange} />

        <button type="submit">Cadastrar</button>
      </Formulary>
      <p>A foto possui limite de tamanho...</p>
    </Container>
  );
};
export default NovoEstudante;
