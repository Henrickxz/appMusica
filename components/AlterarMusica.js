import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { firestore } from "../Firebase";
import { collection, doc, updateDoc } from "firebase/firestore";

export default function AlterarMusica({navigation, route}) {

    const id = route.params.id;

    const [nomeArtista, setNomeArtista] = useState(route.params.nomeArtista);
    const [nomeMusica, setNomeMusica] = useState(route.params.nomeMusica);


    async function alterarMusica(id, nomeArtista, nomeMusica) {
        try {
            await updateDoc(doc(collection(firestore, "tbmoeda"), id), {
                nomeArtista: nomeArtista,
                nomeMusica: nomeMusica,
            })
            Alert.alert("Aviso", "Musica Alterada com sucesso.")
            navigation.navigate("Home")
        }
        catch (error) {
            console.error("Erro ao alterar: ", error);
            Alert.alert("Erro", "Erro ao alterar. Por favor, tente novamente.");
        }
    }
        return (
            <View style={estilo.container}>
                <View>
                    <Text style={estilo.titulo}> Alterar Musica </Text>
                </View>
                <View>
                    <TextInput autoCapitalize='words' style={estilo.input} placeholder="Digite o nome do Artista" onChangeText={setNomeArtista} value={nomeArtista} />
                    <TextInput style={estilo.input} placeholder="Digite o nome da Musica" onChangeText={setNomeMusica} value={nomeMusica} />
                    <TouchableOpacity
                        style={estilo.btnenviar}
                        onPress={() => {
                            alterarMusica(id, nomeArtista, nomeMusica);
                        }}>
                        <Text style={estilo.btntxtenviar}> Alterar </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }


    const estilo = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        input: {
            marginVertical: 10,
            marginHorizontal: 10,
            backgroundColor: '#9ac234',
            paddingHorizontal: 20,
            paddingVertical: 10,
            fontSize: 15,
            borderRadius: 10,
        },
        btnenviar: {
            marginTop: 20,
        },
        btntxtenviar: {
            fontSize: 25,
        },
        titulo: {
            marginVertical: 40,
            fontSize: 25,
            textAlign: 'center',
        },
    });