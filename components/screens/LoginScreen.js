import { Text, View, Image, TextInput, Modal } from 'react-native';
import { useEffect, useState } from "react";
import style_general from "../styles/style_general";
import style_loginscreen from '../styles/style_loginscreen';
import ButtonConfirm from '../general/ButtonConfirm';
import ModalView from '../general/ModalView';
import { colors } from '../styles/colors';
import { patterns } from '../general/regex_patterns';
import { APICalls } from '../general/APICalls';

export default function LoginScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const modal_message_noemail = "Este email ainda não está cadastrado. Você pode se cadastrar imediatamente."
  const modal_message_wrongpass = "Senha incorreta, por favor tente novamente."
  const modal_message_other = "Por favor, tente novamente mais tarde."

  const [email, onChangeEmail] = useState("");
  const [emailValid, setEmailValid] = useState(style_loginscreen.input_text_line);

  const [password, onChangePassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(style_loginscreen.input_text_line);

  const pushSignUp = () => {
    navigation.push('Sign Up');
  }

  const pushContentScreen = (token) => {
    navigation.push('Content', {accessToken: token});
  }

  const emailPattern = patterns.email_pattern;

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

    if (validateAllInputs()) {

      APICalls.Login(email, password).then((accessToken) => {
        pushContentScreen(accessToken);
        console.log(accessToken);
        onChangeEmail("");
        onChangePassword("");
      }).catch((error) => {
        setModalMessage(modal_message_other);
        setModalVisible(true);
        console.log(error);
      })

    }
  }

  return (
    <View style={style_loginscreen.container_screen}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}>
        <ModalView
          title="Algo deu errado"
          message={modalMessage}
          btn_message="Ok"
          btn_color={colors.red_deny}
          onpress={() => { setModalVisible(false) }} />
      </Modal>

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