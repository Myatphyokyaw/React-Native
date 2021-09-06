import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback, Keyboard, ScrollView, StatusBar
} from "react-native";

const Login = props => {
    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.root}>
            <StatusBar backgroundColor={'#D70F64'}/>
            <Image style={styles.img} source={require('../assets/login.png')}/>
            <View>
                <Text style={styles.header}>Login</Text>
                <Text style={styles.inputText}>UserName</Text>
                <TextInput style={styles.input}/>
                <Text style={styles.inputText2}>Password</Text>
                <TextInput style={styles.input} secureTextEntry={true}/>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <Text style={{textAlign: "center"}}>- - - - - OR - - - - -</Text>
                <TouchableOpacity style={styles.registerBtn}>
                    <Text style={styles.registerText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    </TouchableWithoutFeedback>

)
}


const styles = StyleSheet.create({


    root: {
        flex: 1,
        // paddingTop: 30,
        paddingHorizontal: 25,


    },
    img: {
        width: '100%',
        height: '40%',
        resizeMode: 'contain'
    },
    header: {
        textAlign: "center",
        fontSize: 30,
    },
    inputText: {
        marginBottom: 8,
        fontWeight: "bold"
    },
    inputText2: {
        marginVertical: 8,
        fontWeight: "bold"

    },
    input: {
        height: 45,
        borderColor: '#b9b0b0',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 13
    },
    loginBtn: {
        marginVertical: 20,
        backgroundColor: '#D70F64',
        height: 50,
        borderRadius: 30,
        justifyContent: "center"

    },
    loginText: {
        color: '#fff',
        textAlign: "center",
        fontSize: 20,
    },
    registerBtn: {
        marginVertical: 20,
        borderWidth: 1,
        borderColor: '#D70F64',
        height: 50,
        borderRadius: 30,
        justifyContent: "center"

    },
    registerText: {
        color: '#000000',
        textAlign: "center",
        fontSize: 20,

    },


})

export default Login;