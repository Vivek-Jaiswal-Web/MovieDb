import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="App-Body">
        <Navbar />
        <Outlet /> {/* This renders the child route components */}
      </div>
    </>
  );
}

export default App;
