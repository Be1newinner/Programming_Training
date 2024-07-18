import { useState } from "react";
import S2Todo from "./sessions/S2_TODO";
import S1UseStateCounter from "./sessions/S1_UseState_Counter";

function App() {
  const [screen] = useState(2);

  return screen === 1 ? <S1UseStateCounter /> : <S2Todo />;
}

export default App;
