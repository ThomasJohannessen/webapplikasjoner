import { useState } from "react";

const Component = () => {
    const [state, setState] = useState(0);

    function handleClick() {
      setState(state + 1)
    }
  
    return (
      <>
        <button onClick={handleClick} > Click to increase counter </button>
        <h1>{state}</h1>
      </>
    );
  };

  export default Component;