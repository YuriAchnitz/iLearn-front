import { Text, View } from 'react-native';
import { useEffect, useState } from "react";
import { APICalls } from '../../general/APICalls';
import style_contentscreen from '../../styles/style_contentscreen';
import style_general from '../../styles/style_general';

export default function ContentScreen({ route, navigation }) {

  const [studentName, setStudentName] = useState("")
  const [studentEmail, setStudentEmail] = useState("")
  const [studentPhone, setStudentPhone] = useState("")

  const { accessToken, studentId } = route.params;
  APICalls.GetStudent(studentId, accessToken).then((data) => {
    setStudentName(data.name)
    setStudentEmail(data.email)
    setStudentPhone(data.phone)
    console.log(data)
  }).catch((error) => {
    console.log(error);
  })

  return (
    <View style={style_contentscreen.container_general}>

      <Text style={style_general.text_big} onPress={() => { navigation.pop() }}>Nome: {studentName}</Text>
      <Text style={style_general.text_big} onPress={() => { navigation.pop() }}>Email: {studentEmail}</Text>
      <Text style={style_general.text_big} onPress={() => { navigation.pop() }}>Telefone: {studentPhone}</Text>

    </View>
  );
}