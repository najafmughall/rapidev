import "./App.css";
import "./css/header.css";
import "./css/headlines.css";
import "./css/actions.css";
import "./css/board.css";
import "./css/posts.css";
import "./css/sentimental.css";
import "./css/time.css";
import "./css/target.css";
import "./css/alert.css";

import Header from "./components/Header";
import Container from "./components/container";

function App() {
  return (
    <div className="App">
      <Header />
      <Container />
    </div>
  );
}

export default App;
