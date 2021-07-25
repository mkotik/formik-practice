import "./App.css";
import rocketImg from "./assets/rocket.png";
import Signup from "./components/SignUp";

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div
          className="col-md-7 mv-auto"
          style={{ width: "20rem", margin: "auto" }}
        >
          <img className="img-fluid w-100" src={rocketImg} />
        </div>
      </div>
    </div>
  );
}

export default App;
