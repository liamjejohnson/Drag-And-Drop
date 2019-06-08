import React, { Component } from "react";
import Droppable from "../Droppable";
import Draggable from "../Draggable";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 500%;
  padding: 20px;
  display: flex;
`;

const Item = styled.div`
  padding: 8px;
  color: darkblue;
  background-color: white;
  border-radius: 3px;
`;

const DroppableStyle = {
  backgroundColor: "darkblue",
  width: "250px",
  height: "400px",
  margin: "32px"
};

class Talentpool extends Component {
  render() {
    return (
      <Wrapper>
        <Droppable id="dr1" style={DroppableStyle}>
          <Draggable id="item1" style={{ margin: "8px" }}>
            <Item>Some Text</Item>
          </Draggable>
          <Draggable id="item2" style={{ margin: "8px" }}>
            <Item>Some Text</Item>
          </Draggable>
          <Draggable id="item3" style={{ margin: "8px" }}>
            <Item>Some Text</Item>
          </Draggable>
          <Draggable id="item4" style={{ margin: "8px" }}>
            <Item>Some Text</Item>
          </Draggable>
          <Draggable id="item5" style={{ margin: "8px" }}>
            <Item>Some Text</Item>
          </Draggable>
        </Droppable>
      </Wrapper>
    );
  }
}

export default Talentpool;
