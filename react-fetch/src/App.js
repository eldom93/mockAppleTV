import React, { Component } from "react";
import "./App.css";
import ListTitles from "./components/listTitles";
import TVData from './components/data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mylist:[],
      hover: false
    };
   
    this.addTitleToList = this.addTitleToList.bind(this);
    this.removeTitleFromList = this.removeTitleFromList.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:3001/")
      .then(res => res.json())
      .then(json => {
        this.setState({ mylist: json });
        console.log(this.state.mylist);
      })
      .catch(console.log);
  }
  onMouseOver() {
    this.setState({ hover: !this.state.hover, });
  }

  addTitleToList(title, img) {
    this.setState({
      myList: title, img
    });
  }

  removeTitleFromList(title, img) {
    let { titles } = this.state;
    titles.splice(title, 1);
    this.setState({
      myList: title,img
    });
  }
  render() {
    return (
      <div className="container">
        <h1 className="title">Apple TV+</h1>

        <hr />
        <h2 className="heading">My List</h2>
        <TVData />
        <hr />
        <h2 className="heading">Recommendations</h2>
        <TVData />
        <button onMouseOver={this.onMouseOver.bind(this)} onClick={this.addTitleToList.bind(this)} />

     
           
        
        <hr />
        <h2 className="heading">My List</h2>
        <ListTitles />
      
      </div>
    );
  }
}
export default App;