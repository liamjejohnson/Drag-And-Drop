import React, { Component } from "react";
import Droppable from "../Droppable";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
`;

const DroppableStyle = {
  backgroundColor: "darkblue",
  width: "100px",
  height: "100px",
  margin: "20px"
};

class Grid extends Component {
  render() {
    return (
      <Wrapper>
        <div className="row1">
          <Droppable id="drop1" style={DroppableStyle} />
          <Droppable id="drop2" style={DroppableStyle} />
          <Droppable id="drop3" style={DroppableStyle} />
        </div>
        <div className="row2">
          <Droppable id="drop4" style={DroppableStyle} />
          <Droppable id="drop5" style={DroppableStyle} />
          <Droppable id="drop6" style={DroppableStyle} />
        </div>
        <div className="row3">
          <Droppable id="drop7" style={DroppableStyle} />
          <Droppable id="drop8" style={DroppableStyle} />
          <Droppable id="drop9" style={DroppableStyle} />
        </div>
      </Wrapper>
    );
  }
}

export default Grid;
