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
        <hr />
        <h2 className="heading">My List</h2>
        <div className="row">
          {this.state.todos.map((todo) => (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 card">
              <div className="card-body">
                <h5 className="card-title">{todo.title}</h5>
                <img onMouseOver={this.onMouseOver.bind(this)} className="tv-img" width="100%" height="100%" src={logo}></img>
                {this.state.hover ? <button className="tv-btn">Remove</button> :  <br />} 
              </div>
            </div>
          ))}
 
        </div>
        <hr />

          <h2 className="heading">Recommendations</h2>
          <div className="row">
          {this.state.todos.map((todo) => (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 card">
              <div className="card-body">
                <h5 className="card-title">{todo.title}</h5>
                <img onMouseOver={this.onMouseOver.bind(this)} className="tv-img" width="100%" height="100%" src={logo}></img>
                {this.state.hover ? <button className="tv-btn">Add</button> : <br />} 
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default App;