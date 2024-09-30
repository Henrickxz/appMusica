import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home  from './Home';
import Cad  from './CadastrarMusica';
import Alt  from './AlterarMusica';


const Stack = createStackNavigator();

export default function Rotas() {
    return(
        <Stack.Navigator>
            <Stack.Screen  name="Home" component={Home}  />
            <Stack.Screen  name="Cadastrar" component={Cad}  />
            <Stack.Screen  name="Alterar" component={Alt}  />
        </Stack.Navigator>
    );
}