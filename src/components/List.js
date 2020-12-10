import React, { Component } from 'react';

class List extends Component {

  constructor(props) {
    super()
  }


  render() {
    const fruitItems = this.props.fruits.map((fruit, index) => {
      return <li key={index}>{fruit}</li>
    });
    
    return (
      <div>
        <ul>
          {fruitItems}
        </ul>
      </div>
    )
  }
}

export default List;