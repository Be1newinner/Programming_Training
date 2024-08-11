import { Provider } from "react-redux";
import "./App.css";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Comp1 />
        <Comp2 />
        <Comp3 />
      </div>
    </Provider>
  );
}

export default App;
