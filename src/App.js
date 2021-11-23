import "./styles.css";
import styled from "styled-components";
import MainCanvas from "./components/MainCanvas";

export default function App() {
  return (
    <Container className="App">
      <h1>Communfts</h1>
      <h2>How it works</h2>
      <div>
        - Create art with the community - Pick a trait - Draw your version &
        Submit - Submit it
      </div>
      <h2>Select a Trait</h2>
      <h2>Submit a Drawing</h2>
      <MainCanvas />
      <SaveButton>Save</SaveButton>
    </Container>
  );
}

const Container = styled.div`
  background-color: #d189eb;
  margin: 0;
  padding: 0;
`;

const SaveButton = styled.button`
  margin-top: 15px;
  padding: 3px 18px;
`;
