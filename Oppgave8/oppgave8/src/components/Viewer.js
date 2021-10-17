import { useState } from "react";
import ButtonClicked from "./ButtonClicked";

const Viewer = () => {

    const [inputFromChild, setInputFromChild] = useState('');
  

    return (
      <>

        <ButtonClicked callback={setInputFromChild}/>
        

        <h2>{inputFromChild}</h2>
        
      </>
    );
  };

  export default Viewer;