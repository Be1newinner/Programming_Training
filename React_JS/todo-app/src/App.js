import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [arrayData, setArrayData] = useState([
    {
      title: "Vijay0",
    },
    {
      title: "Vijay1",
    },
    {
      title: "Vijay2",
    },
    {
      title: "Vijay3",
    },  
  ]);

  function AddData() {
    console.log("hi");

    // Step 1
    const array2 = [...arrayData];

    // step 2
    array2.push({
      title: inputValue,
    });

    // step 3
    setArrayData(array2);

    console.log(arrayData);
  }

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type your title"
      />

      {arrayData.map((item, index) => {
        return (
          <div key={index}>
            <p> {item.title}</p>
          </div>
        );
      })}

      <button onClick={AddData}>Add Item</button>
    </div>
  );
}

export default App;
