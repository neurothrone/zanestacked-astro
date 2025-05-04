import { useState } from "react";

import React from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
      className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md shadow-lg hover:shadow-primary-500/20 transition-all duration-200 flex items-center gap-2"
    >
      <span className="text-primary-200">Count:</span> {count}
    </button>
  );
};

export default Counter;
