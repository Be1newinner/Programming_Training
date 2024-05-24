export default function FlexWithBasis_1() {
  const gap = 30;

  const style = {
    width: 250,
    height: 100,
    backgroundColor: "blue",
    //   border: "1px solid black",
    flexBasis: `calc(33.33% - ${gap}px)`,
  };

  return (
    <div
      style={{
        width: 800,
        height: 500,
        backgroundColor: "red",
        display: "flex",
        gap: gap,
        flexWrap: "wrap",
      }}
    >
      <div style={style}></div>
      <div style={style}></div>
      <div style={style}></div>
      <div style={style}></div>
    </div>
  );
}
