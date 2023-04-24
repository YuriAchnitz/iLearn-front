import { StyleSheet } from 'react-native';

export default StyleSheet.create(
    {
        container_screen: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            gap: '10%',
            padding: 20,
            paddingVertical: 40,
        },

        container_login_options: {
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
        },

        logo: {
            width: '85%',
            height: undefined,
            aspectRatio: 956 / 251,
        },

        text_title:{
            fontSize: 30,
            textAlign: 'center',
        },
    }
);