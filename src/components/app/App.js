import React, { Component } from 'react';
import Footer from '../footer/footer';
import AddTodo from '../../containers/add_todo/add_todo';
import VisibleTodoList from '../../containers/visibleTodoList/visibleTodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
