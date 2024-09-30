import React,{ useEffect, useState } from "react";
import { View,Text,StyleSheet,FlatList, TouchableOpacity,Alert } from "react-native";
import { firestore } from "../Firebase"; 
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore"; 

export default function Home({navigation}) {
           
    const [musicas, setMusicas] = useState([]);

    async function deleteMusica(id) {
        try{
            await deleteDoc(doc(firestore,'tbmusica',id));
            Alert.alert("A Musica foi deletada.")
        }catch(error){
            console.error("Erro ao deletar.", error)
        }
    }
       
    useEffect(()=>{
        const unsubcribe = onSnapshot(collection(firestore,'tbmusica'),(querySnapshot)=>{
            const lista = [];
            querySnapshot.forEach((doc)=>{
                lista.push({...doc.data(), id: doc.id});
            });
            setMusicas(lista);
        });
        return () => unsubcribe();
    },[]);

    return(
        <View style={estilo.container}>
            <View>
                <Text style={estilo.titulo} >Suas Musicas</Text>
            </View>
            <FlatList 
                data={musicas}
                renderItem={({item})=>{
                    return(
                        <View style={estilo.musicas}>
                            <TouchableOpacity onPress={()=>navigation.navigate("Alterar",{
                                id: item.id,
                                nomeArtista: item.nomeArtita,
                                nomeMusica: item.nomeMusica,
                            })}>
                                <View style={estilo.itens}>
                                    <Text> Nome do Artista: <Text>{item.nomeArtista}</Text></Text>
                                    <Text> Nome da Musica: <Text>{item.nomeMusica}</Text></Text>
                                </View>
                            </TouchableOpacity>
                            <View style={estilo.botaodeletar}>
                                <TouchableOpacity onPress={()=>{deleteMusica(item.id)}}>
                                <Text>X</Text>
                                </TouchableOpacity>    
                            </View>    
                        </View>    
                    );
                }}
            />
            <TouchableOpacity onPress={()=> navigation.navigate("Cadastrar")}>
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212', 
        padding: 20,
    },
    titulo: {
        marginTop: 50,
        fontSize: 32,
        color: '#ffffff', 
        fontWeight: 'bold',
        textAlign: 'center',
    },
    musicas: {
        marginVertical: 10,
        backgroundColor: 'white', 
        borderRadius: 8,
        padding: 15,
        elevation: 3, 
    },
    itens: {
        marginVertical: 5,
    },
    textArtist: {
        fontSize: 16,
        color: '#b3b3b3', 
    },
    textMusica: {
        fontSize: 20,
        color: '#ffffff', 
        fontWeight: 'bold',
    },
    botaodeletar: {
        alignItems: 'flex-end',
    },
    deleteButton: {
        backgroundColor: '#e63946', 
        borderRadius: 50,
        padding: 5,
        marginTop: 10,
    },
    deleteButtonText: {
        color: '#ffffff', 
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: '#1DB954', 
        borderRadius: 50,
        position: 'absolute',
        right: 20,
        bottom: 40,
        justifyContent: "center",
        alignItems: "center",
        width: 60,
        height: 60,
        elevation: 5,
    },
    addButtonText: {
        color: '#ffffff',
        fontSize: 30,
    },
});