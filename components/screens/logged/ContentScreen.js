import { Text, View} from 'react-native';
import { useEffect, useState } from "react";

export default function ContentScreen({ navigation }) {

  return (
    <View>

      <Text onPress={() => { navigation.pop() }}>this is the content screen</Text>

    </View>
  );
}