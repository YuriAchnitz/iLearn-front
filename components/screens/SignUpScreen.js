import { Text, View, Image, TextInput, Pressable } from 'react-native';
import { useEffect, useState } from "react";
import style_general from "../styles/style_general";
import style_signupscreen from '../styles/style_signupscreen';
import ButtonConfirm from '../buttons/ButtonConfirm';
import { colors } from '../styles/colors';

export default function SignUpScreen({ navigation }) {
  const [name, onChangeName] = useState("");
  const [phone, onChangePhone] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const submit = () => {
    console.log('name: ' + name);
    console.log('phone: ' + phone);
    console.log('email: ' + email);
    console.log('password: ' + password);
  }

  return (
    <View style={style_signupscreen.container_screen}>

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
            style={[style_signupscreen.input_text_line, style_general.text_normal]}
            placeholder='nome'
            placeholderTextColor={colors.gray_placeholder}
            value={name}
            onChangeText={onChangeName}
          />
        </View>

        <View style={style_signupscreen.container_input_group}>
          <Text style={style_general.text_normal}>Telefone:</Text>
          <TextInput
            style={[style_signupscreen.input_text_line, style_general.text_normal]}
            placeholder='telefone'
            placeholderTextColor={colors.gray_placeholder}
            value={phone}
            onChangeText={onChangePhone}
          />
        </View>

        <View style={style_signupscreen.container_input_group}>
          <Text style={style_general.text_normal}>Email:</Text>
          <TextInput
            style={[style_signupscreen.input_text_line, style_general.text_normal]}
            placeholder='email'
            placeholderTextColor={colors.gray_placeholder}
            value={email}
            onChangeText={onChangeEmail}
          />
        </View>

        <View style={style_signupscreen.container_input_group}>
          <Text style={style_general.text_normal}>Senha:</Text>
          <TextInput
            style={[style_signupscreen.input_text_line, style_general.text_normal]}
            placeholder='senha'
            placeholderTextColor={colors.gray_placeholder}
            value={password}
            onChangeText={onChangePassword}
            secureTextEntry={true}
          />
        </View>

      </View>

      <ButtonConfirm text='Cadastrar' onpress={submit} />
    </View>
  );
}