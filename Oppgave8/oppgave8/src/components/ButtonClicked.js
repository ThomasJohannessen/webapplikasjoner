const ButtonClicked = ({callback}) => {

    function handleClick(event) {
        callback(event.target.value);
      }

    return(
        <>
        <button onClick={handleClick} value={"Dette er tekst fra Viewer som vises etter trykk på knapp 1"}> Button 1 </button>
        <button onClick={handleClick} value={"Dette er tekst fra Viewer som vises etter trykk på knapp 2"}> Button 2 </button>
        </>
    )
}

export default ButtonClicked;