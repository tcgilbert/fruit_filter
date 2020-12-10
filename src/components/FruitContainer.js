import React, { Component } from "react";
import List from "./List";
import Input from "./Input";

class FruitContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      // initialize the fruit list using the list passed from props
      fruitsToDisplay: this.props.fruits,
      //initialize filter value as empty string
      filterValue: "",
    };
  }

  handleFilterChange = (e) => {
    e.preventDefault();
    let filterValue = e.target.value;
    // remove the fruits that don't have filter value
    const filterFruitList = this.props.fruits.filter((fruit) => {
      return fruit.toLowerCase().includes(filterValue.toLowerCase());
    });

    this.setState({
      fruitsToDisplay: filterFruitList,
      filterValue,
    });
  };

  render() {
    return (
      <div>
        <Input
          value={this.state.filterValue}
          onChange={this.handleFilterChange}
        />
        <List fruits={this.state.fruitsToDisplay}/>
      </div>
    );
  }
}

export default FruitContainer;
