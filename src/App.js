import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./core/route";
import history from "./core/history";

function App() {
  return (
    <Router history={history} basename="https://mratri10.github.io/ajungan-web">
      <Routes />
    </Router>
  );
}

export default App;
