import { Button, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { styles } from '../styles';

export function DetailScreen({ route, navigation }) {
  const { pizza } = route.params;

  return (
    <View>
      <Text>Tela de detalhes da Pizza</Text>

      <View style={styles.fundo}>
        <Card style={styles.card}>
          <Text style={styles.nome}> {pizza.nome} </Text>
          <Text style={styles.preco}> {pizza.preco} </Text>
          <Text style={styles.descricao}>{pizza.ingredientes}</Text>
        </Card>
      </View>

      <Button
        title="Ir para Tela Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}
