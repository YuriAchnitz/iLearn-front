import { Text, Pressable } from 'react-native';
import style_general from '../styles/style_general';

export default function ButtonConfirm(props) {
    return (
        <Pressable style={style_general.button_confirm} onPress={props.onpress}>
            <Text style={[style_general.text_big, style_general.text_color_white, style_general.text_bold]}>{props.text}</Text>
        </Pressable>
    );
}