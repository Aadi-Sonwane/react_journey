import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About"/>
      <div className="container my-3">
        <TextForm heading=" Enter ur text "/>

      </div>
      <div className="container">
        <h1>Dark Mode</h1>
        <About/> 
      </div>
    </>
  );
}

export default App;
