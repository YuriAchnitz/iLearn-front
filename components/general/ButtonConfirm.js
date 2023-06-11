import { Text, Pressable } from 'react-native';
import { useState } from "react";
import style_general from '../styles/style_general';

export default function ButtonConfirm(props) {
    props.disabled

    //const [button_style, setButtonStyle] = useState(style_general.button_confirm)
    let button_style = style_general.button_confirm

    if (props.disabled) {
        button_style = style_general.button_confirm_disabled
    } else {
        button_style = style_general.button_confirm
    }

    return (
        <Pressable style={button_style} onPress={props.onpress} disabled={props.disabled}>
            <Text style={[style_general.text_big, style_general.text_color_white, style_general.text_bold]}>{props.text}</Text>
        </Pressable>
    );
}