import { Button, Text, View } from 'react-native';

export function AboutScreen({navigation}){
  return (
    <View>
      <Text>Tela Sobre</Text>
      <Button
        title="Ir para Tela Home"
        onPress={ () => navigation.goBack() }
      />
    </View>
  )
}
