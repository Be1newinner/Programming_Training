export default function Button({ title = "Click me  " }) {
  return (
    <button
      style={{
        padding: "20px 50px",
      }}
    >
      {title}
    </button>
  );
}
