import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      hover: false,
      todo: []
    }
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    }
 componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then((data) => {
        this.setState({ todos: data })
        console.log(this.state.todos)
      })
      .catch(console.log)
  }
  onMouseOver(){
    this.setState({hover: !this.state.hover});      
  }

addTodo(e){
let { todo, todos } = this.state;
e.preventDefault();
this.setState({
    todo: todo + e.target.value,
    todos: [...todos, todo]
})

}

removeTodo(todo){
let { todos } = this.state;
todos.splice(todo, 1);
this.setState({
  todo: '',
  todos: [...todos, todo]
})

}
  render() {
      let { todo, todos, hover } = this.state;
  
    return (
      <div className="container">
        <h1 className="title">Apple TV+</h1>
        <table><tr><td>{todo}</td></tr></table>
        <hr />
        <h2 className="heading">My List</h2>
  
        <div className={(this.state.todo == '') ? "row my-list" : "row my-list-display-block"}>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 card">
            <div className="card-body">
              <h5>{todo}</h5>
              <img
                  onMouseOver={this.onMouseOver.bind(this)}
                  className="tv-img"
                  width="100%"
                  height="100%"
                  src={logo}
                ></img>
                {hover ? (
                  <button
                    value={todo.title}
                    onClick={this.removeTodo.bind(undefined, todo)}
                    key={todo.id}
                    className="tv-btn"
                  >
                    Remove
                  </button>
                ) : (
                  <br />
                )}
            </div>
          </div>
        </div>

        <hr />
        <h2 className="heading">Recommendations</h2>
        <div className="row">
          {todos.map(todo => (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 card">
              <div className="card-body">
                <h5 className="card-title">{todo.title}</h5>
                <img
                  onMouseOver={this.onMouseOver.bind(this)}
                  className="tv-img"
                  width="100%"
                  height="100%"
                  src={logo}
                ></img>
                {this.state.hover ? (
                  <button
                    value={todo.title}
                    onClick={e => this.addTodo(e)}
                    className="tv-btn"
                  >
                    Add
                  </button>
                ) : (
                  <br />
                )}
              </div>
            </div>
          ))}
        </div>
        <hr />
        <h2 className="heading">My List</h2>
        <ol className="title-list">
          {todos.map(todo => (<li className="title-list-item">{todo.title}</li>))}
        </ol>
      </div>
    );
  }
}
export default App;