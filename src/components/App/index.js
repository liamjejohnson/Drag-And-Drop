import React, { Component } from "react";
import styled from "styled-components";
import Grid from "../Grid";
import Talentpool from "../Talentpool";
// import DndTest from "../Dndtest";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  render() {
    return (
      <AppWrapper>
        <Container>
          <Talentpool />
          <Grid />
        </Container>
      </AppWrapper>
    );
  }
}
