import { Text, View } from 'react-native';
import { useEffect, useState } from "react";

export default function ContentScreen({ route, navigation }) {

  const { accessToken } = route.params;

  return (
    <View>

      <Text onPress={() => { navigation.pop() }}>access token: {accessToken}</Text>

    </View>
  );
}