import React, {useState, useEffect} from "react";

const CleanUp = () => {
  const [size, setSize] = useState(window.innerWidth)

  function windowSize(){
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize' , windowSize)

    return () => {
      window.removeEventListener('resize' , windowSize)
    }
  })
  return (
    <div className="container col-6 mx-auto bg-black shadow py-4 text-white rounded-3">
      <h1>{size}</h1>
    </div>
  );
};

export default CleanUp;
