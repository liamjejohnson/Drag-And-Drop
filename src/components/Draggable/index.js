import React, { Component } from "react";
import PropTypes from "prop-types";
// import css from "./Draggable.module.css";

export default class Draggable extends Component {
  drag = event => {
    event.dataTransfer.setData("transfer", event.target.id);
  };

  noAllowDrop = event => {
    event.stopPropagation();
  };

  render() {
    return (
      <div
        // className={css.box}
        id={this.props.id}
        draggable="true"
        onDragStart={this.drag}
        onDragOver={this.noAllowDrop}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    );
  }
}

Draggable.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};
