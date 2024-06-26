function App() {
  return (
    <div>
      {/* {arrayData.map((item, index) => {
          return <Card title={item.title} />;
        })} */}

      <Card asdasdddsd={"Vijay"} bgColor="blue" />
      <Card asdasdddsd={"Ajay"} bgColor="pink" />
      <Card asdasdddsd={"Karan"} bgColor="red" />
    </div>
  );
}

export default App;

function Card({ bgColor, asdasdddsd }) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: 150,
        height: 200,
      }}
    >
      <p> {asdasdddsd}</p>
    </div>
  );
}
