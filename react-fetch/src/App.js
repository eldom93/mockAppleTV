import React, { Component } from "react";
import "./App.css";
import Recommendations from "./components/recommendations";
import MyList from "./components/mylist";
import ListTitles from "./components/listTitles";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      hover: false,
      todo: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:3001/json")
      .then(res => res.json())
      .then(json => {
        this.setState({ todos: json });
        console.log(this.state.todos);
      })
      .catch(console.log);
  }
  onMouseOver() {
    this.setState({ hover: !this.state.hover });
  }

  addTodo(e) {
    let { todo, todos } = this.state;
    this.setState({
      todo: todo + e.target.value,
      todos: [...todos, todo]
    });
  }

  removeTodo(todo) {
    let { todos } = this.state;
    todos.splice(todo, 1);
    this.setState({
      todo: "",
      todos: [...todos, todo]
    });
  }
  render() {
    let { todo, todos, hover } = this.state;

    return (
      <div className="container">
        <h1 className="title">Apple TV+</h1>
        <hr />
        <h2 className="heading">My List</h2>
        <MyList />
        <hr />
        <h2 className="heading">Recommendations</h2>
        <Recommendations />
        <hr />
        <h2 className="heading">My List</h2>
        <ListTitles />
      
      </div>
    );
  }
}
export default App; /*  <img
onMouseOver={props.onMouseOver}
className="tv-img"
width="100%"
height="100%"
src={props.img}
></img>
{props.hover ? (
<button
  value={props}
  onClick={props.removeTodo}
  key={props.id}
  className="tv-btn"
>
  Remove
</button>
) : (
<br />
)}   <img
            className="col-xs-12 col-sm-6 col-md-4 col-lg-3 tv-img"
            src={props.img}
          />
          <div className="card-body">
            {props.hover ? (
              <button value={props.id} className="tv-btn">
                Add
              </button>
            ) : (
              <br />
            )}*/
