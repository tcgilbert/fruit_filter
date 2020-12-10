import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <label htmlFor="fruit-filter">Filter these fruits: </label>
        <input
          type="text"
          id="fruit-filter"
          onChange={this.props.onChange}
          value={this.props.value}
        />
      </div>
    );
  }
}

export default Input;
