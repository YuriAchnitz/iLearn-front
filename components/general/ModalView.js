import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import style_general from "../styles/style_general";

export default function ModalView(props) {
    const title = props.title;
    const message = props.message;
    const button_message = props.btn_message;
    const button_color = props.btn_color;

    return (
        <View style={style_general.container_fill}>
            <View style={style_general.container_modal}>
                <Text style={[style_general.text_big, style_general.text_bold]}>{title}</Text>
                <Text style={[style_general.text_normal]}>{message}</Text>
                <Pressable
                    style={[style_general.modal_button, { backgroundColor: button_color }]}
                    onPress={props.onpress}>
                    <Text style={[style_general.text_normal, style_general.text_bold, style_general.text_color_white]}>{button_message}</Text>
                </Pressable>
            </View>
        </View>
    );
}