export default function Transform() {
  return (
    <div
      style={{
        backgroundColor: "orange",
        width: 150,
        height: 200,

        // 2D Transformation
        // transform: "translateX(0px)",
        // transform: "rotate(30deg)",
        // transform: "translateX(50px) rotate(30deg)",
        // transform: "scaleX(2)",
        // transform: "skew(50deg, 50deg)",
        // transform: "skewX(50deg)",
        // transform: "skewY(50deg)",

        // 3D Transformation
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <p> Test</p>
    </div>
  );
}
