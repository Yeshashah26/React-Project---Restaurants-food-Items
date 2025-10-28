const ButtonComponent = ({onClick, label}) => {
    const buttonstyle ={
    // marginLeft: '100px',
    padding: '0.7rem',
    border: '1px solid',
    borderColor: '#b9b6b36b',
    borderRadius: '1.5rem',
    fontSize: 'medium',
    fontFamily: 'Franklin Gothic Medium ',
    cursor: 'pointer'
    };
  
    return(
        <button className="text-lg font-bold cursor-pointer min-w-20 min-h-5 m-4 pl-5 pr-5 p-3 border border-gray-300 rounded-2xl rounded-full hover:bg-yellow-500 transition-colors duration-200 " onClick={onClick}>
            {label}
        </button>
    )
}

export default ButtonComponent;