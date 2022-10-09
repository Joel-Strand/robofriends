import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox.js";
import { robots } from "./robots";
import "./cogs/app.css";

class App extends Component {
  constructor() {
    super(); // Must call super before referencing "this"
    this.state = { robots: [], searchField: "" };
  }

  componentDidMount() {
    this.setState({ robots: robots });
  }

  // Reference vid 301 for more info on arrow functions.
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
