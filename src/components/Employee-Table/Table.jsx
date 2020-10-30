import React, { Component } from "react";
import API from "./utils/API"

class Table extends Component {
  state = {
    search: "",
    results: [],
  };

  componentDidMount() {
    this.searchEmployee();
  }

  searchEmployee = query => {
      API.search(query)
      .then(res => this.setState({ results: res.data.data}))
      .catch(err => console.log(err))
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
 
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.search);
  };
  render() {
    return (
      <form className="form-inline my-2 my-lg-0 mx-auto text center">
        <input
          name="search"
          onChange={this.handleInputChange}
          value={this.state.results}
          type="text"
          placeholder="Search Employee"
          id="search"
        />
        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Table;
