import { useState } from "react";
import {
  Button,
  TextInput,
  View
} from "react-native";

import { addDoc, collection } from "firebase/firestore";

import { auth, db } from "../firebaseConfig";

export function CadastroAnuncioScreen() {

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");

  async function salvar() {

    const usuario = auth.currentUser;

    await addDoc(
      collection(db, "anuncios"),
      {
        titulo,
        descricao,
        preco,
        usuarioId: usuario.uid,
        usuarioNome: usuario.email,
        dataCriacao:
          new Date().toISOString(),
      }
    );

    alert("Anúncio cadastrado");
  }

  return (
    <View>

      <TextInput
        placeholder="Título"
        value={titulo}
        onChangeText={setTitulo}
      />

      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />

      <TextInput
        placeholder="Preço"
        value={preco}
        onChangeText={setPreco}
      />

      <Button
        title="Salvar"
        onPress={salvar}
      />

    </View>
  );
}