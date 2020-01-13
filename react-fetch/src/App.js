import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
class App extends Component {
  state = {
    todos: [],
    hover: false
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
  render() {
    return (
      <div className="container">
        <h1 className="title">Apple TV</h1>
        <div className="col-xs-12">
          <h2>My List</h2>
          {this.state.todos.map((todo) => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{todo.title}</h5>
                <img onMouseOver={this.onMouseOver.bind(this)} className="tv-img" width="300px" height="100%" src={logo}></img>
                {this.state.hover ? <button className="tv-remove-btn">Remove</button> : ''} 
                
              </div>
            </div>
          ))}
        </div>
        <div className="col-xs-12">
          <h2>Recommendations</h2>
          {this.state.todos.map((todo) => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{todo.title}</h5>
                <img onMouseOver={this.onMouseOver.bind(this)} className="tv-img" width="300px" height="100%" src={logo}></img>
                {this.state.hover ? <button className="tv-remove-btn">Add</button> : ''} 
                
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default App;