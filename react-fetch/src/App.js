import React, { Component } from "react";
import "./App.css";
import ListTitles from "./components/listTitles";
import TVData from './components/data';
let clickedObj = {
  title:'Power', 
  id: 7, 
  img: "http://cdn1.nflximg.net/webp/7621/3787621.webp" 
};
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
    this.handleClick = this.handleClick.bind(this);
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
      mylist: title, img
    });
 console.log(this.state.myList)
  }
handleClick(e){
  e.preventDefault();
  let { item } = e.target.value;
  this.setState({
    mylist: this.state.mylist + item
  });
   
  console.log(this.state.mylist.length);
  console.log(e.target.value)
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
      
        <TVData onMouseOver={this.onMouseOver} />
 
        <hr />
        <h2 className="heading">Recommendations</h2>
        <TVData onMouseOver={this.onMouseOver.bind(this)} />
        <button value={clickedObj} onClick={this.handleClick}>

     {clickedObj.title}
       
        </button>
        <hr />
        <h2 className="heading">My List</h2>
        <ListTitles />
      
      </div>
    );
  }
}
export default App;