import { Route, Routes } from "react-router-dom";

import HomePage from "../app/HomePage";
import SecondPage from "../app/SecondPage";

export default function Root() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/second" element={<SecondPage />} />
    </Routes>
  );
}
