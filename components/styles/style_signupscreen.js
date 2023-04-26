import { StyleSheet } from 'react-native';
import { colors } from './colors';

export default StyleSheet.create(
    {
        container_screen: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            gap: '5%',
            padding: 20,
        },

        container_header: {
            width: '100%',
            height: '7%',
            flexDirection: 'row',
            alignItems: 'center',
        },

        container_input: {
            width: '80%',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 15,
        },

        container_input_group: {
            width: '100%',
            flexDirection: 'column',
            gap: 10,
        },

        input_text_line: {
            width: '100%',
            padding: 7,
            paddingHorizontal: 10,
            borderRadius: 15,
            backgroundColor: colors.purple_accent,
        },

        arrow: {
            width: undefined,
            height: '100%',
            aspectRatio: 1 / 1,
        },

        icon: {
            width: undefined,
            height: '100%',
            aspectRatio: 281 / 251,
        },
    }
);