import React, { Component } from "react";
import "./App.css";
import ListTitles from "./components/listTitles";
import TVData from "./components/data";
import Title from "./components/title";

let clickedObj = {
  mynewlist: [
    {
      title: "Power",
      id: 7,
      img: "http://cdn1.nflximg.net/webp/7621/3787621.webp"
    }
  ]
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mylist: [],
      hover: false,
      title: "",
      mynewlist: []
    };

    this.addTitleToList = this.addTitleToList.bind(this);
    this.removeTitleFromList = this.removeTitleFromList.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
 //   this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3001/")
      .then(res => res.json())
      .then(json => {
        this.setState({ mylist: json });
      })
      .catch(console.log);
  }

  onMouseOver() {
    this.setState({ hover: !this.state.hover });
  }

  addTitleToList(title) {
    this.setState({
      mynewlist: [this.state.mynewlist,title]
    });
    //console.log(title);
  }

  removeTitleFromList(title) {
    //let { titles } = this.state;
    this.setState({
      mylist: title
    });
  }
  render() {
    console.log(this.state.mynewlist.length === 0);
    return (
      <div className="container">
        <h1 className="title">Apple TV+</h1>

        <hr />
        <h2 className="heading">My List</h2>

        <TVData
          removeTitleFromList={this.removeTitleFromList.bind(this)}
          onMouseOver={this.onMouseOver.bind(this)}
          title={this.state.title}
        />

        <hr />
        <h2 className="heading">Recommendations</h2>

        <TVData
          addTitleToList={this.addTitleToList.bind(this)}
          onMouseOver={this.onMouseOver.bind(this)}
          title={this.state.title}
        />
        <hr />

        <h2 className="heading">My List</h2>
        <ListTitles/>
        {this.state.mynewlist === 0 ? ('') : (
        <div className="row">
        {this.state.mynewlist.map(title => (<ol><li key={Math.random().toString()} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 card-body"><Title
                value={this.state.title}
                className="card card-title"
          title={title}></Title></li></ol>
          ))}
        </div>)}
      </div>
    );
  }
}

export default App;
/*
  handleClick(e) {
    e.preventDefault();
    let { item } = e.target.value;
    this.setState({
      mylist: this.state.mylist + item
    });
  }
  */