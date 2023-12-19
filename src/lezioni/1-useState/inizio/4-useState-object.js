import React, {useState} from "react";

const StateObject = () => {
  const [person , setPerson]= useState({
    name: "Sam",
    age: 21,
    saluto: "Futtitinni",
  })
  const cambiaSaluto = () => {
    setPerson({
      ...person,
      age:22,
      saluto: "passati 365 gg in un click"
    })
  };

  return <div className="item shadow">
    <div className="text-left">
      <h5>{person.name}</h5>
      <h4>{person.age}</h4>
      <h6>{person.saluto}</h6>
    </div>
    <button className="button" onClick={cambiaSaluto}>
      cambia saluto
    </button>
  </div>;
};

export default StateObject;
