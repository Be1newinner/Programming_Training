import { View } from "react-native";
import VijayButton, { Button2, Button3 } from "../components/Button1";
import Sum from "../service/functions";

function App() {
  return (
    <View>
      <VijayButton title={1} />
      <VijayButton title={3} />
      <Button2 title={3} />
      <Button3 title={3} onPress={() => Sum(7, 18)} />
    </View>
  );
}

export default App;
