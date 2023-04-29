import { Text, View, Image, TextInput, Pressable, Modal, ScrollView } from 'react-native';
import { useEffect, useState } from "react";
import style_general from "../styles/style_general";
import style_signupscreen from '../styles/style_signupscreen';
import ButtonConfirm from '../buttons/ButtonConfirm';
import ModalView from '../misc/ModalView';
import { colors } from '../styles/colors';

export default function SignUpScreen({ navigation }) {
  const [modalError, setModalError] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);

  const [name, onChangeName] = useState("");
  const [nameValid, setNameValid] = useState(style_signupscreen.input_text_line);

  const [phone, onChangePhone] = useState("");
  const [phoneValid, setPhoneValid] = useState(style_signupscreen.input_text_line);

  const [email, onChangeEmail] = useState("");
  const [emailValid, setEmailValid] = useState(style_signupscreen.input_text_line);

  const [password, onChangePassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(style_signupscreen.input_text_line);

  const [passwordConfirm, onChangePasswordConfirm] = useState("");
  const [passwordConfirmValid, setPasswordConfirmValid] = useState(style_signupscreen.input_text_line);

  const submit = () => {
    console.log('name: ' + name);
    console.log('phone: ' + phone);
    console.log('email: ' + email);
    console.log('password: ' + password);

    console.log('name validation: ' + validateInput(name, namePattern, 3))

    console.log('email validation: ' + validateInput(email, emailPattern, 5))

    console.log('password validation: ' + validateInput(password, passwordPattern, 8))

    console.log('phone validation: ' + validateInput(phone, phonePattern, 11))

    if (validateAllInputs()) {
      if (name == 'admin')
        setModalSuccess(true);
      else
        setModalError(true);
    }
  }

  const emailPattern = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
  const namePattern = new RegExp("");
  const passwordPattern = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
  const phonePattern = new RegExp("^(\()?[1-9]{2}(\))? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$");

  const validateAllInputs = () => {
    let valid = true;

    if (!validateInput(name, namePattern, 3)) {
      setNameValid(style_signupscreen.input_text_wrong);
      valid = false;
    }
    else
      setNameValid(style_signupscreen.input_text_line);

    if (!validateInput(email, emailPattern, 5)) {
      setEmailValid(style_signupscreen.input_text_wrong)
      valid = false;
    }
    else
      setEmailValid(style_signupscreen.input_text_line);

    if (!validateInput(phone, phonePattern, 11)) {
      setPhoneValid(style_signupscreen.input_text_wrong)
      valid = false;
    }
    else
      setPhoneValid(style_signupscreen.input_text_line);

    if (!validateInput(password, passwordPattern, 8)) {
      setPasswordValid(style_signupscreen.input_text_wrong)
      valid = false;
    }
    else
      setPasswordValid(style_signupscreen.input_text_line);

    if (!validateConfirmPassword()) {
      setPasswordConfirmValid(style_signupscreen.input_text_wrong)
      valid = false;
    }
    else
      setPasswordConfirmValid(style_signupscreen.input_text_line);

    return valid;
  }

  const validateConfirmPassword = () => {
    return (password === passwordConfirm);
  }

  const validateInput = (input, regexp, minLenght) => {
    if (input.length < minLenght)
      return false;

    if (!regexp.test(input))
      return false;

    return true;
  }

  return (
    <ScrollView style={{flex: 1}}>
      <View style={style_signupscreen.container_screen}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalError}
        >
          <ModalView
            title="Algo deu errado"
            message="Por favor, tente novamente mais tarde"
            btn_message="Ok"
            btn_color={colors.red_deny}
            onpress={() => { setModalError(false) }} />
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalSuccess}
        >
          <ModalView
            title="Sucesso"
            message="Seu cadastro foi um sucesso. Aproveite o iLearn!"
            btn_message="Ok"
            btn_color={colors.green_confirm}
            onpress={() => { setModalSuccess(false), navigation.pop() }} />
        </Modal>

        <View style={style_signupscreen.container_header}>
          <Pressable style={[style_signupscreen.arrow, { marginRight: '5%' }]} onPress={() => { navigation.pop() }}>
            <Image
              style={style_signupscreen.arrow}
              source={require('../../assets/arrow-return.png')}
            />
          </Pressable>
          <Image
            style={[style_signupscreen.icon, { marginRight: '2%' }]}
            source={require('../../assets/ilearn-icon.png')}
          />
          <Text style={[style_general.text_bigger, style_general.text_bold, style_general.text_color_purple]}>Cadastro</Text>
        </View>

        <Text style={[style_general.text_big, { textAlign: 'center' }]}>Por favor, insira suas informações</Text>


        <View style={style_signupscreen.container_input}>
          <View style={style_signupscreen.container_input_group}>
            <Text style={style_general.text_normal}>Nome:</Text>
            <TextInput
              style={[nameValid, style_general.text_normal]}
              placeholder='nome'
              placeholderTextColor={colors.gray_placeholder}
              inputMode='text'
              value={name}
              maxLength={48}
              onChangeText={onChangeName}
              onEndEditing={() => {
                if (!validateInput(name, namePattern, 3))
                  setNameValid(style_signupscreen.input_text_wrong)
                else
                  setNameValid(style_signupscreen.input_text_line)
              }}
            />
          </View>

          <View style={style_signupscreen.container_input_group}>
            <Text style={style_general.text_normal}>Telefone:</Text>
            <TextInput
              style={[phoneValid, style_general.text_normal]}
              placeholder='xx xxxxx-xxxx'
              placeholderTextColor={colors.gray_placeholder}
              inputMode='tel'
              value={phone}
              maxLength={16}
              onChangeText={onChangePhone}
            />
          </View>

          <View style={style_signupscreen.container_input_group}>
            <Text style={style_general.text_normal}>Email:</Text>
            <TextInput
              style={[emailValid, style_general.text_normal]}
              placeholder='email@dominio.com'
              placeholderTextColor={colors.gray_placeholder}
              inputMode='email'
              value={email}
              maxLength={48}
              onChangeText={onChangeEmail}
            />
          </View>

          <View style={style_signupscreen.container_input_group}>
            <Text style={style_general.text_normal}>Senha:</Text>
            <Text style={[style_general.text_small, style_general.text_color_gray]}>Deve conter ao menos 8 digitos, uma letra maiúscula, um número e um digito especial</Text>
            <TextInput
              style={[passwordValid, style_general.text_normal]}
              placeholder='senha'
              placeholderTextColor={colors.gray_placeholder}
              value={password}
              maxLength={32}
              onChangeText={onChangePassword}
              secureTextEntry={true}
            />
          </View>

          <View style={style_signupscreen.container_input_group}>
            <Text style={style_general.text_normal}>Confirmar senha:</Text>
            <TextInput
              style={[passwordConfirmValid, style_general.text_normal]}
              placeholder='senha'
              placeholderTextColor={colors.gray_placeholder}
              value={passwordConfirm}
              maxLength={32}
              onChangeText={onChangePasswordConfirm}
              secureTextEntry={true}
            />
          </View>

        </View>

        <ButtonConfirm text='Cadastrar' onpress={submit} />
      </View>
    </ScrollView>
  );
}