import { Alert, Button, Text, View } from "react-native";

export function AnuncioItem({ anuncio }) {
  return (
    <View
      style={{
        borderWidth: 1,
        margin: 10,
        padding: 10,
        borderRadius: 8,
      }}
    >
      <Text>{anuncio.titulo}</Text>

      <Text>
        R$ {Number(anuncio.preco).toFixed(2)}
      </Text>

      <Text>
        Publicado por: {anuncio.usuarioNome}
      </Text>

      <Text>
        {new Date(
          anuncio.dataCriacao
        ).toLocaleString()}
      </Text>

      <Text numberOfLines={3}>
        {anuncio.descricao}
      </Text>

      <Button
        title="Comprar"
        onPress={() =>
          Alert.alert(
            "Tente novamente mais tarde"
          )
        }
      />
    </View>
  );
}