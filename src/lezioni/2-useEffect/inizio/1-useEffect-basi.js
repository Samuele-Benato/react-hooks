import React, {useEffect} from "react";

const useEffectBasi = () => {
  const [value,setValue] = React.useState(0)
  const add = () => {
    setValue((oldValue) => oldValue + 1)
  }

  useEffect(()=>{
    if(value < 1){
      document.title = `Nessun Messaggio`
    }else{
      document.title = `value : ${value} `
    } 
  },[value])

  return (
    <div className="item shadow">
      <h4>Value : <span>{value}</span></h4>
      <button className="button" onClick={add}>
        +
      </button>
    </div>
  );
};

export default useEffectBasi;
