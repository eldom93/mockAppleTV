import React, { Component } from "react";
import "./App.css";
import Recommendations from "./components/recommendations";
import MyList from "./components/mylist";
import ListTitles from "./components/listTitles";
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
    fetch("http://localhost:3001/json")
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

  addTitleToList(title) {
    this.setState({
      myList: title,
    });
  }

  removeTitleFromList(title) {
    let { titles } = this.state;
    titles.splice(title, 1);
    this.setState({
      myList: title,
    });
  }
  render() {
    return (
      <div className="container">
        <h1 className="title">Apple TV+</h1>
        <hr />
        <h2 className="heading">My List</h2>
        <MyList onMouseOver={this.onMouseOver.bind(this)} onClick={this.removeTitleFromList.bind(this)}
/>
        <hr />
        <h2 className="heading">Recommendations</h2>
        <Recommendations onMouseOver={this.onMouseOver.bind(this)} onClick={this.addTitleToList.bind(this)} />

     
           
        
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
