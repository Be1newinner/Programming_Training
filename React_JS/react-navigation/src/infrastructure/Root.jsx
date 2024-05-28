import { Route, Routes } from "react-router-dom";

import HomePage from "../app/HomePage";
import SecondPage from "../app/SecondPage";
import NavPage from "../app/NavLink";

export default function Root() {
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/second" element={<SecondPage />} />
      <Route path="/second/:userId" element={<SecondPage />} />
      <Route path="/navlink" element={<NavPage />} />
    </Routes>
  );
}
