import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailScreen } from '../screens/DetailScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { CadastroAnuncioScreen } from
'../screens/CadastroAnuncioScreen';

import { MeusAnunciosScreen } from
'../screens/MeusAnunciosScreen';

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CadastroAnuncio"
        component={CadastroAnuncioScreen}
      />
      <Stack.Screen
        name="MeusAnuncios"
        component={MeusAnunciosScreen}
      />
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{ title: "Lista de Pizzas" }}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}
