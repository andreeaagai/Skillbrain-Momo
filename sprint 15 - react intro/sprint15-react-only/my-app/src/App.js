import "./App.css";
import Frame from "./Frame.js";

function App() {
  return (
    <div>
      <article className="App-header">
        <h1>Task Manager</h1>
      </article>
      <div className="container">
        <div className="frame-container">
          <Frame></Frame>
          <Frame></Frame>
          <Frame></Frame>
          <Frame></Frame>
          <Frame></Frame>
          <Frame></Frame>
          <Frame></Frame>
        </div>
      </div>
    </div>
  );
}

export default App;
