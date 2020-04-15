import React from "react";
import { uuid } from "uuidv4";

import Todo from "./Todo";
import AddTodo from "./AddTodo";

class Home extends React.Component {
  state = {
    todos: [
      { content: "Study Web development", id: uuid() },
      { content: "Study app development", id: uuid() },
      { content: "Do my street workout training", id: uuid() },
    ],
  };

  addTodo = (todo) => {
    todo.id = uuid();
    const todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id ? todo : null;
    });

    this.setState({
      todos,
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="center">Todo's</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default Home;
