import React, { useState } from "react";
import { InfoContainer, Button, ChangeWrapper } from "./Styled";
import { app } from "../../utils/firebase";

const Actions = ({ estudante }) => {
  const [nome, setNome] = useState(estudante?.nome);
  const [endereco, setEndereco] = useState(estudante?.endereco);
  const [fileURL, setFileURL] = useState("");

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);

    setFileURL(await fileRef.getDownloadURL());
  };

  const onUpdate = () => {
    const db = app.firestore();
    console.log("Nome->", nome);
    console.log("Endereco ___>", estudante.nome);
    db.collection("estudantes")
      .doc(estudante.id)
      .set({
        ...estudante,
        nome: nome,
        endereco: endereco,
        foto: fileURL,
      });
  };

  const onDelete = () => {
    const db = app.firestore();
    db.collection("estudantes").doc(estudante.id).delete();
  };

  return (
    <ChangeWrapper>
      <InfoContainer>
        <p>Nome: </p>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          onChange={(e) => {
            setNome(e.target.value);
          }}
        />
      </InfoContainer>
      <InfoContainer>
        <p>Endereço: </p>
        <input
          type="text"
          name="endereco"
          placeholder="Endereço"
          onChange={(e) => {
            setEndereco(e.target.value);
          }}
        />
      </InfoContainer>
      <input type="file" onChange={onFileChange} />
      <div>
        <Button type="submit" onClick={onUpdate}>
          Update
        </Button>
        <Button onClick={onDelete}>Delete</Button>
      </div>
    </ChangeWrapper>
  );
};

export default Actions;
