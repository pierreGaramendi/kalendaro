import React from "react";

interface CounterInputs {
  count: number;
  increment: () => void;
}

function Counter1({ count, increment }: CounterInputs) {
  return (
    <div>
      <button
        style={{ backgroundColor: "red", color: "white" }}
        onClick={increment}
      >
        {count}
      </button>
    </div>
  );
}
export { Counter1 };
