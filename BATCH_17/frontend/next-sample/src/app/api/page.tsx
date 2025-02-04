"use client";

import { useEffect, useState } from "react";

export default function API() {
  const [products, setProducts] = useState([]);

  async function getAllProducts() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const resp = await response.json();
      console.table(resp);
      setProducts(resp);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <h1>API</h1>
      {products.length > 0 ? (
        <ul>
          {products.map((items) => {
            return (
              <li key={items?.id}>
                {items?.id} . {items?.title}
              </li>
            );
          })}
        </ul>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export function Spinner() {
  return (
    <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
      <div className="p-4 bg-gradient-to-tr animate-spin from-green-500 to-blue-500 via-purple-500 rounded-full">
        <div className="bg-white rounded-full">
          <div className="w-24 h-24 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

// Hooks]
//  State Management
// 1. useState
// 2. useEffect
// 3. useRef
// 4. useReducer
// 5. useContext

// Memorizitaion
// 6. useCallback
// 7. useMemo
// 8. memo

// Frameworks
// 1. Axios
// 2. Redux
// 3. MobX
// 4. Saga
// 5. Material UI KIT
// 6. ShedCN UI KIT
// 7. React Icons
