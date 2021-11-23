import React, { useState } from "react";
import styled from "styled-components";
import CanvasDraw from "react-canvas-draw";
import ColorPicker from "./ColorPicker";
import BrushSlider from "./BrushSlider";
import ColorSwatches from "./ColorSwatches";

function MainCanvas() {
  const [brushSize, setBrushSize] = useState(5);
  const [brushColor, setBrushColor] = useState("#FF0000");

  const updateCanvas = (canvasDraw) => (this.modify = canvasDraw);
  const canvasProperties = {
    brushColor: brushColor,
    brushRadius: brushSize,
    saveData: null,
    ref: updateCanvas
    // canvasHeight: "800"
  };
  const updateSize = (value) => {
    setBrushSize(value);
  };
  const handleColorChange = (color) => {
    setBrushColor(color.hexString);
  };

  const handleSwatchChange = (color) => {
    setBrushColor(color);
  };

  return (
    <Container>
      <CanvasDraw {...canvasProperties} />
      <ColorSwatches
        selectedColor={brushColor}
        selectColor={handleSwatchChange}
      />
      <ColorPicker color={brushColor} onColorChange={handleColorChange} />
      <BrushSlider updateAttribute={updateSize} />
      <button
        onClick={() => {
          this.modify.undo();
        }}
      >
        UNDO
      </button>
      <button
        onClick={() => {
          this.modify.clear();
        }}
      >
        CLEAR
      </button>
    </Container>
  );
}

export default MainCanvas;

const Container = styled.div`
  border: solid;
`;
