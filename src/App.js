// App.js
import React from "react";
import styled from "styled-components";
import Timer from "./Timer";
import Sound from "./Sound";

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

function App() {
  return (
    <AppContainer>
      <h1 className="text-4xl mb-4">Welcome to Dota Timer App</h1>
      <Timer expiryTimestamp={1630000000000} />
      <Sound />
    </AppContainer>
  );
}

export default App;
