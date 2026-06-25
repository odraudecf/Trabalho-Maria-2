
import { Button, FlatList, Text, View } from 'react-native';
import { AnuncioItem } from '../components/AnuncioItem';
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { db } from "../firebaseConfig";
import { logout } from '../services/AuthService';
import { styles } from '../styles';
import { Picker } from '@react-native-picker/picker';

export function HomeScreen({ navigation }) {
  const [anuncios, setAnuncios] = useState([]);
  const [usuarioFiltro, setUsuarioFiltro] = useState("Todos");

  const usuarios =
[
  "Todos",
  ...new Set(
    anuncios.map(
      a => a.usuarioNome
    )
  )
];

const anunciosFiltrados =
usuarioFiltro === "Todos"
  ? anuncios
  : anuncios.filter(
      a =>
        a.usuarioNome ===
        usuarioFiltro
    );

  useEffect( () => {
    const inscricao = onSnapshot(
      collection(db, "anuncios"), 
      (snapshot) => {
        const lista = [];
        
        snapshot.forEach( (doc) =>{
          lista.push( {
            id: doc.id,
            ...doc.data(),
          });
        });

        lista.sort(
          (a, b) =>
            new Date(b.dataCriacao) -
            new Date(a.dataCriacao)
        );
  
        setAnuncios(lista);
      }
    );
    return () => inscricao();
  } , []);

  async function sair(){
    console.log("Usuário saiu!");
    await logout();
  }

  return (
    <View>
      <Text>Tela Home</Text>

      <Picker
  selectedValue={
    usuarioFiltro
  }
  onValueChange={
    setUsuarioFiltro
  }
>
  {usuarios.map(usuario => (
    <Picker.Item
      key={usuario}
      label={usuario}
      value={usuario}
    />
  ))}

  <ListEmptyComponent>
  <Text>
    Nenhum anúncio encontrado
  </Text>
</ListEmptyComponent>

</Picker>

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
          <Text style={styles.subtitulo}>Nenhum anuncio encontrado</Text>
        }
       
      />

      <Button
        title="Ir para Tela Sobre"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  )
}