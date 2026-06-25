
import { Button, FlatList, Text, View } from 'react-native';
import { AnuncioItem } from '../components/AnuncioItem';
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { db } from "../firebaseConfig";
import { logout } from '../services/AuthService';
import { styles } from '../styles';

export function HomeScreen({ navigation }) {
  const [anuncios, setAnuncios] = useState([]);

  useEffect(() => {

  const usuario = auth.currentUser;

  const inscricao = onSnapshot(
    collection(db, "anuncios"),
    (snapshot) => {

      const lista = [];

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      const meusAnuncios = lista.filter(
        anuncio => anuncio.usuarioId === usuario.uid
      );

      meusAnuncios.sort(
        (a, b) =>
          new Date(b.dataCriacao) -
          new Date(a.dataCriacao)
      );

      setAnuncios(meusAnuncios);
    }
  );

  return () => inscricao();

}, []);

  async function sair(){
    console.log("Usuário saiu!");
    await logout();
  }

  return (
    <View>
      <Text>Tela Home</Text>
      <View>
        <Text>Usuário Logado </Text>
        <Button
          title="Sair"
          onPress={sair}
        />
      </View>

      <Button
        title="Cadastrar Anuncio"
        onPress={() => navigation.navigate("CadastroPizza")}
      />

      <FlatList
        style={{flex: 1}}
        data={anuncios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AnuncioItem
            anuncio={item}
            onPress={ () =>
          navigation.navigate("Detail", {anuncio: item})}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.subtitulo}>Nenhum anuncio encontrada</Text>
        }
       
      />

      <Button
        title="Ir para Tela Sobre"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  )
}