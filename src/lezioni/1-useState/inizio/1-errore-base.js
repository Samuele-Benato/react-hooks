import React from "react";
//Far vedere che il componente non si riaggiorna ma la variabile si
//Spiegare che cosa è un React Fragment e che è possibile abbreviarlo
const ErroreBase = () => {
  let title = 'Title';
  const changeTitle = () => {
    title = 'New Title';
  }
  return <>
    <h1>{title}</h1>
    <button type="button" className="btn btn-dark my-2" onClick={changeTitle}>
      ChangeTitle
    </button>
  </>
};

export default ErroreBase;
