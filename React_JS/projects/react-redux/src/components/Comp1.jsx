import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Comp1() {
  const counterData = useSelector((state) => state.rootReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(counterData);
  }, [counterData]);

  return (
    <div>
      <h2>Comp1</h2>
    </div>
  );
}
