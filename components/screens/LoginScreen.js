import { Text, View, Image, TextInput } from 'react-native';
import style_general from "../styles/style_general";
import style_loginscreen from '../styles/style_loginscreen';
import ButtonConfirm from '../buttons/ButtonConfirm';

export default function LoginScreen({ navigation }) {
  const pushSignUp = () => {
    navigation.push('Sign Up');
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
          placeholderTextColor={'#6D6D6D'}
        />

        <TextInput
          style={[style_general.input_text_line, style_general.text_normal]}
          placeholder='senha'
          placeholderTextColor={'#6D6D6D'}
        />

        <ButtonConfirm text={'Entrar'} onpress={() => { console.log("função entrar") }} />
      </View>

      <Text style={[style_general.text_small, { marginTop: 'auto', marginBottom: '10%' }]}>
        Não tem conta? <Text onPress={pushSignUp} style={[style_general.text_underline, style_general.text_color_link]}>Cadastre-se</Text>
      </Text>
    </View>
  );
}