import { Link } from "react-router-dom";
import FlexWithBasis1 from "../../Sessions/FlexWithBasis_1";

export default function HomePage() {
  return (
    <div>
      <FlexWithBasis1 />

      <a href="/second"> Second Page </a>
      <br />
      <Link to="/second"> Second Page </Link>
    </div>
  );
}

// function HomePage() {
//     return (
//       <div>
//         <h1>HOmePage</h1>
//       </div>
//     );
//   }

//   export default HomePage;
