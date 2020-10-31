import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import Search from "./components/Search/Search";
import React, { Component } from 'react';
import Axios from "axios";

class App extends Component {
  state = {
    search: [],
  };

  componentDidMount(){
    this.getSearch();
  }

getSearch = () => {
  Axios.get("https://randomuser.me/api/?results=20&nat=us").then((res) => {
    this.setState({
      search: res.data.results
    });
  });
};

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header />
        <Search />
        <br />
        <Table searchData={this.state.search}/>
      </div>
    );
  }
}

export default App;
