import Card from "../components/Card";

function ListPages() {
  const data = Array.from({
    length: 5000,
  });

  return (
    <div className="parent">
      {data.map((_, index) => (
        <Card
          key={index}
          title={"Apple Watch " + (index + 1)}
          price="30000"
          description="This is apple watch"
        />
      ))}
    </div>
  );
}

export default ListPages;
