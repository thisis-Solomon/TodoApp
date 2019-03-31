import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, ScrollView} from 'react-native';

let id = 0;

const Todo = props => {
  <View>
    <Button onPress = {props.onDelete} title = "delete"/>
    <Text>
      {props.todo.text}
    </Text>
  </View>
}

export default class App extends Component{
  constructor(){
    super()
    this.state = {
      todos: [],
    }
  }

  addTodo(){
    id++
    const text = `TO-DO # ${id}`
    this.setState({
      todos: [
        ...this.state.todos, {id: id, text: text, checked: false}
      ],
    })
  }

  removeTodo(id){
    this.setState({
      todos: this.state.todo.filter(todo => todo.id !== id)
    })
  }

  toggleTodo(id){
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo
        return{
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        }

      })
    });
  }
  render() {
    return (
      <View>
        <Text>Todo count: {this.state.todos.length}</Text>
        <Text>Unchecked todo count: {this.state.todos.filter(todo=>  !todo.checked.length)}</Text>
        <ScrollView>
          <Button onPress = {() => this.addTodo} title = "Add To-do"/>
          {this.state.todos.map(todo =>(
            <Todo 
              onToggle = {() => this.toggleTodo(todo.id)}
              onDelete = {() => this.removeTodo(todo.id)} 
              todo= {todo}/>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
