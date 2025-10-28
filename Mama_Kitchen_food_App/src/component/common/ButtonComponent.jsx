const ButtonComponent = ({onClick, label}) => {
    const buttonstyle ={
    marginLeft: '100px',
    padding: '1.3rem',
    border: '1px solid',
    bordercolor: '#b9b6b36b',
    borderRadius: '10px',
    fontsize: 'medium',
    cursor: 'pointer'
    };
  
    return(
        <button style={buttonstyle} onClick={onClick}>
            {label}
        </button>
    )
}

export default ButtonComponent;