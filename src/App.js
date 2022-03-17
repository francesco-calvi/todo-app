import React from "react";
import Form from "./Form";
import "./App.css";

const Todo = (props) => {
  return (
    <div
      style={{
        textDecoration: props.todo.completed ? "line-through" : "",
        color: props.todo.completed ? "lightgray" : "inherit",
        opacity: props.todo.completed ? "0.7" : "1",
      }}
      className="todo"
    >
      {props.todo.name}
      <div className="buttons">
        <button
          className="btn complete-btn"
          onClick={() => {
            props.complete(props.index);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 172 172"
          >
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#fff">
                <path d="M138.18229,37.84896l-73.68229,73.68229l-30.68229,-30.68229l-10.30208,10.30208l35.83333,35.83333l5.15104,4.92708l5.15104,-4.92708l78.83333,-78.83333z"></path>
              </g>
            </g>
          </svg>
        </button>
        <button
          className="btn delete-btn"
          onClick={() => {
            props.delete(props.index);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 172 172"
          >
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#fff">
                <path d="M40.90039,30.76628l-10.13411,10.13411l45.09961,45.09961l-45.09961,45.09961l10.13411,10.13411l45.09961,-45.09961l45.09961,45.09961l10.13411,-10.13411l-45.09961,-45.09961l45.09961,-45.09961l-10.13411,-10.13411l-45.09961,45.09961z"></path>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

class App extends React.Component {
  state = {
    todos: [],
  };

  addTodo = (todo) => {
    const newTodos = [...this.state.todos, { name: todo }];
    this.setState({
      todos: newTodos,
    });
  };

  completeTodo = (index) => {
    const newTodos = [...this.state.todos];
    newTodos[index].completed = true;
    this.setState({
      todos: newTodos,
    });
  };

  deleteTodo = (index) => {
    const newTodos = [...this.state.todos];
    newTodos.splice(index, 1);
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <div className="app">
        <div className="todo-list">
          {this.state.todos.map((item, index) => {
            return (
              <Todo
                key={index}
                todo={item}
                index={index}
                complete={this.completeTodo}
                delete={this.deleteTodo}
              />
            );
          })}
          <Form submit={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;
