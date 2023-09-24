import Header from "./components/Header/Header";
import "./App.css";
import { Toaster } from "react-hot-toast";
import LocationList from "./components/LocationList/LocationList";
function App() {
  return (
    <div>
      <Toaster />
      <Header />
      <LocationList/>
    </div>
  );
}

export default App;
