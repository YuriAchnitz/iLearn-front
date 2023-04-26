import { StyleSheet } from 'react-native';
import { colors } from './colors';

export default StyleSheet.create(
    {
        container_general: {
            padding: 20,
        },

        text_small: {
            fontSize: 16,
        },

        text_normal: {
            fontSize: 20,
        },

        text_big: {
            fontSize: 24,
        },

        text_bigger: {
            fontSize: 40,
        },

        text_bold: {
            fontWeight: 'bold',
        },

        text_underline: {
            textDecorationLine: 'underline',
        },

        text_color_white: {
            color: colors.white_simple,
        },

        text_color_link: {
            color: colors.blue_link,
        },

        text_color_purple: {
            color: colors.purple_main,
        },

        input_text_line: {
            width: '75%',
            padding: 7,
            paddingHorizontal: 10,
            borderRadius: 15,
            backgroundColor: colors.purple_accent,
        },

        button_confirm: {
            width: 'auto',
            padding: 10,
            paddingHorizontal: 15,
            borderRadius: 15,
            backgroundColor: colors.green_confirm,
        },

        image: {
            height: 'auto',
            width: 'auto',
        }
    }
);