import {
  Button,
  Text,
  View
} from "react-native";

import { auth } from "../firebaseConfig";

import { logout } from "../services/AuthService";

export function ProfileScreen({
  navigation
}) {

  const usuario = auth.currentUser;

  if (!usuario) {

    return (
      <View>
        <Button
          title="Ir para Login"
          onPress={() =>
            navigation.navigate(
              "Login"
            )
          }
        />
      </View>
    );
  }

  return (
    <View>

      <Text>{usuario.email}</Text>

      <Button
        title="Anunciar novo item"
        onPress={() =>
          navigation.navigate(
            "CadastroAnuncio"
          )
        }
      />

      <Button
        title="Ver meus anúncios"
        onPress={() =>
          navigation.navigate(
            "MeusAnuncios"
          )
        }
      />

      <Button
        title="Logout"
        onPress={logout}
      />

    </View>
  );
}