import { Text, View, Image, TextInput } from 'react-native';
import { useEffect, useState } from "react";
import style_general from "../styles/style_general";
import style_loginscreen from '../styles/style_loginscreen';
import ButtonConfirm from '../buttons/ButtonConfirm';
import { colors } from '../styles/colors';

export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = useState("");
  const [emailValid, setEmailValid] = useState(style_loginscreen.input_text_line);

  const [password, onChangePassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(style_loginscreen.input_text_line);

  const pushSignUp = () => {
    navigation.push('Sign Up');
  }

  const pushContentScreen = () => {
    navigation.push('Content');
  }

  const emailPattern = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");

  const validateInput = (input, regexp, minLenght) => {
    if (input.length < minLenght)
      return false;

    if (!regexp.test(input))
      return false;

    return true;
  }

  const validatePassowrd = () => {
    if (password.length <= 0)
      return false;
    else
      return true;
  }

  const validateAllInputs = () => {
    if (!validateInput(email, emailPattern, 5))
      return false;
    if (!validatePassowrd())
      return false;

    return true;
  }

  const submit = () => {
    console.log('email: ' + email);
    console.log('password: ' + password);
    if (!validateInput(email, emailPattern, 5)) {
      setEmailValid(style_loginscreen.input_text_wrong)
    } else {
      setEmailValid(style_loginscreen.input_text_line)
    }

    if (!validatePassowrd()) {
      setPasswordValid(style_loginscreen.input_text_wrong);
    } else {
      setPasswordValid(style_loginscreen.input_text_line);
    }

    if (validateAllInputs() && email == "admin@admin.com") {
      //if (confirmAllInputs()) {
      pushContentScreen();
      onChangeEmail("");
      onChangePassword("");
    }
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
          style={[emailValid, style_general.text_normal]}
          placeholder='email'
          placeholderTextColor={colors.gray_placeholder}
          value={email}
          onChangeText={onChangeEmail}
        />

        <TextInput
          style={[passwordValid, style_general.text_normal]}
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