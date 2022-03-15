import { Outlet, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div>
      <h1>Navbar</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/firstlink">Link_A</Link> |{" "}
        <Link to="/secondlink">Link_B</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
