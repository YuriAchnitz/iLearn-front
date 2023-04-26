import { Text, View, Image, TextInput } from 'react-native';
import { useEffect, useState } from "react";
import style_general from "../styles/style_general";
import style_loginscreen from '../styles/style_loginscreen';
import ButtonConfirm from '../buttons/ButtonConfirm';
import { colors } from '../styles/colors';

export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const pushSignUp = () => {
    navigation.push('Sign Up');
  }

  const submit = () => {
    console.log('email: ' + email);
    console.log('password: ' + password);
  }

  return (
    <View style={style_loginscreen.container_screen}>
      <Image
        style={style_loginscreen.logo}
        source={require('../../assets/ilearn-logo.png')}
      />

      <Text style={style_loginscreen.text_title}>Olá, este é o iLearn.</Text>

      <View style={style_loginscreen.container_login_options}>
        <Text style={style_general.text_normal}>Entre com sua conta</Text>

        <TextInput
          style={[style_general.input_text_line, style_general.text_normal]}
          placeholder='email'
          placeholderTextColor={colors.gray_placeholder}
          value={email}
          onChangeText={onChangeEmail}
        />

        <TextInput
          style={[style_general.input_text_line, style_general.text_normal]}
          placeholder='senha'
          placeholderTextColor={colors.gray_placeholder}
          value={password}
          onChangeText={onChangePassword}
          secureTextEntry={true}
        />

        <ButtonConfirm text={'Entrar'} onpress={submit} />
      </View>

      <Text style={[style_general.text_small, { marginTop: 'auto', marginBottom: '10%' }]}>
        Não tem conta? <Text onPress={pushSignUp} style={[style_general.text_underline, style_general.text_color_link]}>Cadastre-se</Text>
      </Text>
    </View>
  );
}