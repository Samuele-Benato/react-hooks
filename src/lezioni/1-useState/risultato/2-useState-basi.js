import React, { useState } from "react";
//Gli Hook Devono Iniziare con use
//Il componente in cui lo usiamo deve avere la prima lettera maiuscola on iniziare con use
//Hooks devo essere chiamati all'interno del corpo del componente
//Hooks non possono essere chiamati in maniera condizionale

const UsoBase = () => {
  /**
   * @type {[String, Function]} titolo
   */
  const [titolo, setTitolo] = useState("Non toccarla");
  //   const value = useState()[0];
  //   const handler = useState()[1];
  //   console.log(value, handler);

  /**
   * Funzione che modifica il titolo al click
   * @returns {undefined}
   */
  const cambiaTitolo = () => {
    if (titolo === "Non toccarla") {
      setTitolo("Bro...");
    } else {
      setTitolo("Non toccarla");
    }
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-dark shadow my-3"
        onClick={cambiaTitolo}
      >
        Toccami 
      </button>
      <h2> {titolo}</h2>
    </>
  );
};

export default UsoBase;
