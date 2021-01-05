import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"],
  }
  handleClick = () => {
    this.props.handleClick(this.props.idx)
  }


  render() {
    const { numberWords, locked, val, rolling } = this.props
    let classes = `Die fas fa-dice-${numberWords[val - 1]} fa-5x `;
    if (locked) classes += 'Die-locked '
    if (rolling) classes += 'Die-rolling'
    return (
      <i
        className={classes}
        onClick={this.handleClick}
      >

      </i>
    );
  }
}

export default Die;
<i className="fas fa-dice-six" />