import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

let id = 0;

const Todo = props => {
  <View>
    <input type="checkbox"/>
    <Button>delete</Button>
    <span>
      {props.todo.text}
    </span>
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
    const text = prompt("Todo text please")
    this.setState({
      todos: [...this.state.todos, {id: id++, text: text}],
    })
  }

  removeTodo(id){
    this.setState({
      todos: this.state.todo.filter(todo => todo.id !== id)
    })
  }
  render() {
    return (
      <View>
        <Text>
          <Button onPress = {() => this.addTodo}></Button>
          {this.state.todos.map(todo =>(
            <Todo 
              onDelete = {() => this.removeTodo(todo.id)} 
              todo= {todo}/>
          ))}
        </Text>
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
