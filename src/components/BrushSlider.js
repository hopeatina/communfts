import React from "react";
import styled from "styled-components";
import { Slider, RangeSlider } from "rsuite";

function BrushSlider(props) {
  const updateValue = (value) => {
    props.updateAttribute(value);
  };
  return (
    <Container>
      <input
        min="1"
        max="50"
        type="range"
        onChange={(event) => {
          updateValue(event.target.value);
        }}
        defaultValue="3"
      />
      <TextBox></TextBox>
    </Container>
  );
}

export default BrushSlider;

const Container = styled.div`
  display: flex;
  border: 2px;
  border-color: #000;
  padding: 20px;
`;

const TextBox = styled.div`
  width: 40px;
  height: 20px;
  background-color: #fff;
`;
