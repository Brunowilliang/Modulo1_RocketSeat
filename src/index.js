import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import Todo from './components/Todo';
import { wrap } from 'module';

const todos = [
  'Fazer Café',
  'Estudar o GoNative'
];

export default class App extends Component {
  state = {
    usuario: 'Diego',
    todos: [
      {id: 0, text: 'Fazer Café' },
      {id: 1, text: 'Estudar GoNative'}
    ],
  };

  addTodo = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        {id: Math.random(), text: 'Novo todo' },
      ],
     });
  }

  render() {
    return (
     // <View style={styles.container}>
      //  <Text>{this.state.usuario}</Text>
     //   {this.state.todos.map(todo => (<Todo key={todo.id} title={todo.text} />))}
     //   <Button title="Adicionar Todo" onPress={this.addTodo} />
     // </View>

     <View style={styles.container}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#333',
  },

  box: {
    width: 100,
    height: 100,
    backgroundColor: '#f00',
    margin: 20,
  },
});
