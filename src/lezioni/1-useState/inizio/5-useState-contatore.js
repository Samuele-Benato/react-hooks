import React, {useState} from "react";

const CounterComponent = () => {
  const [contatore, setContatore] = useState(0)

  const reset = () => {
    setContatore(0)
  }
  const add = () => {
    setContatore(oldValue => {
    return oldValue + 1
    })
  }
  return (
    <div className="bg-black rounded-3 shadow p-3 col-8 mx-auto">
      <h3 className="text-white">{contatore}</h3>
      <div className="text-center">
        <button onClick={()=> setContatore(contatore - 1)} className="button m-2">
          --
        </button>
        <button onClick={add} className="button m-2">
          +
        </button>
      </div>
      <button onClick={reset} className="button reset-button m-2">
        Reset
      </button>
    </div>
  );
};

export default CounterComponent;
