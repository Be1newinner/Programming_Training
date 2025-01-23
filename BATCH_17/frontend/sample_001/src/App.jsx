// 

import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="parent">
      <Card
        title="Apple Watch 1.0"
        price="30000"
        description="This is apple watch"
      />
      <Card
        title="Apple Watch 2.0"
        price="40000"
        description="This is apple watch"
      />
      <Card
        title="Apple Watch 3.0"
        price="50000"
        description="This is apple watch"
      />
      <Card
        title="Apple Watch 4.0"
        price="60000"
        description="This is apple watch"
      />
      <Card
        title="Apple Watch 5.0"
        price="70000"
        description="This is apple watch"
      />
      <Card
        title="Apple Watch 1.0"
        price="80000"
        description="This is apple watch"
      />
    </div>
  );
}

export default App;
