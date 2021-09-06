import React from "react";
import {CheckBox, TextInput, View, StyleSheet, Text, Button, TouchableOpacity, FlatList} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return {...state, list: action.payload}
        case 'TEXT':
            return {...state, text: action.payload}
        case 'DELETE':
            return {list: state.list.filter((el) => action.payload !== el.id)}
        case 'DONE':
            return {
                list: state.list.map(el => {

                    if (action.payload === el.id) {
                        el.done = !el.done
                    }
                    return el
                })
            }
    }
}
const ToDo = props => {


    const [state, dispatch] = useReducer(reducer, {list: [], text: ""});

    const add = () => {

        if (state.text) {
            dispatch({
                type: "ADD", payload: [...state.list, {
                    value: state.text,
                    id: state.list.length + 1,
                    key:new Date().toISOString(),
                    done: false,
                }]
            })
            dispatch({type: "TEXT", payload: state.text = ""})

        } else {
            alert("Sorry ပဲ့သားရီးကုန်အောင်ဖြည့်")
        }

    }
    const del = (id) => {

        dispatch({type: 'DELETE', payload: id})

    }
    const isDone = (id) => {
        dispatch({type: 'DONE', payload: id})
    }

    return (
        <View style={styles.root}>
            <StatusBar backgroundColor='#d70f64'/>
            <Text style={styles.header}>TO DO APP</Text>
            <View style={styles.inputForm}>
                <TextInput value={state.text} onChangeText={value => dispatch({type: "TEXT", payload: value})}
                           style={styles.input}></TextInput>
                <TouchableOpacity onPress={add} style={styles.btn}>
                    <Text style={styles.btnText}>ADD</Text>
                </TouchableOpacity>
            </View>
            <FlatList style={styles.listContainer} data={state.list} renderItem={({item}) => <View style={styles.list}>
                <CheckBox tintColors={{true: '#ffffff', false: 'black'}} onValueChange={isDone.bind(this, item.id)}
                          value={item.done}/>
                <TouchableOpacity onPress={isDone.bind(this, item.id)} style={styles.doneBox}>
                    <Text style={[styles.listText, item.done ? styles.cross : ""]}>{item.value}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={del.bind(this, item.id)} style={styles.editBtn}>
                    <Text style={styles.editText}>🖍</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={del.bind(this, item.id)} style={styles.delBtn}>
                    <Text style={styles.delText}>X</Text>
                </TouchableOpacity>
            </View>} keyExtractor={(item) => item.id.toString()}/>

        </View>
    )

}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    header: {
        color:'#d70f64',
        fontSize: 30,
        marginBottom: 20,
        textAlign: "center"
    },
    inputForm: {
        flexDirection: "row"
    },
    input: {
        flex: 1,
        height: 50,
        borderColor: '#d70f64',
        borderWidth: 2,
        borderRadius: 8,
        marginEnd: 10,
        paddingHorizontal: 10

    },
    btn: {
        backgroundColor: '#d70f64',
        padding: 15,
        borderRadius: 8,
    },
    btnText: {
        color: '#fff'
    },
    listContainer: {
        marginVertical: 15,

    },
    list: {
        alignItems: "center",
        height: 50,
        backgroundColor: '#d70f64',
        marginTop: 8,
        paddingHorizontal: 10,
        borderRadius: 8,
        flexDirection: "row"
    },
    listText: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 3,


    },
    doneBox: {
        flex: 1,
    },
    editBtn: {
        width: 30,
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginEnd:5,

    },
    editText: {
        color: '#d70f64',
        fontSize: 20,
        fontWeight: "bold"
    },
    delBtn: {
        width: 30,
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"

    },
    delText: {
        color: '#d70f64',
        fontSize: 20,
        fontWeight: "bold"
    },

    cross: {
        textDecorationLine: "line-through",
    }


})

export default ToDo