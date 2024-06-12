import { useState } from "react";

export default function Transform() {
  const [image, setImage] = useState("");

  async function fetchData() {
    try {
      const data = await fetch("https://dog.ceo/api/breeds/image/random");
      const response = await data.json();

      if (response.status === "success") {
        setImage(response.message);
      }

      console.log(response);
    } 
    catch (error) {
      console.log(error);
    }
    // finally {
    //   console.log("LEGTH");
    // }
  }

  fetchData();

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
      {image}
      <img src={image} height={500} width={500} />
      <p> Test</p>
    </div>
  );
}
