import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';
import { firestore } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";

export default function CadastrarMusica({navigation}) {

    const [nomeArtista, setNomeArtista] = useState(null);
    const [nomeMusica, setNomeMusica] = useState(null);

    async function addMusica() {
        try {
            const docRef = await addDoc(collection(firestore, 'tbmusica'), {
                nomeArtista: nomeArtista,
                nomeMusica: nomeMusica,
            });
            console.log("Cadastrado com ID: ", docRef.id);
            Alert.alert("Cadastro", "Musica cadastrada com sucesso")
            navigation.navigate("Home");
        } catch (error) {
            console.error("Erro ao cadastrar: ", error);
            Alert.alert("Erro", "Erro ao cadastrar . Por favor, tente novamente.");
        }
    }

    return (
        <View style={estilo.container}>
            <View>
                <Text style={estilo.titulo}> Cadastre uma nova Musica</Text>
            </View>
            <TextInput autoCapitalize='words' style={estilo.input} placeholder="Digite o nome do Artista " onChangeText={setNomeArtista} value={nomeArtista} />
            <TextInput style={estilo.input} placeholder="Digite o nome da Musica" onChangeText={setNomeMusica} value={nomeMusica} />

            <TouchableOpacity
                style={estilo.btnenviar}
                onPress={() => {
                    addMusica();
                }}>
                <Text style={estilo.btntxtenviar}> Enviar </Text>
            </TouchableOpacity>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212', // Dark background
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        marginVertical: 10,
        backgroundColor: '#1e1e1e', // Darker input field
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 16,
        borderRadius: 8,
        color: '#ffffff', // White text for input
    },
    btnenviar: {
        marginTop: 20,
        backgroundColor: '#1DB954', // Spotify green
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        elevation: 3, // Add shadow for elevation
    },
    btntxtenviar: {
        fontSize: 18,
        color: '#ffffff', // White text for button
        fontWeight: 'bold',
    },
    titulo: {
        marginBottom: 40,
        fontSize: 28,
        color: '#ffffff', // White title text
        textAlign: 'center',
        fontWeight: 'bold',
    },
});