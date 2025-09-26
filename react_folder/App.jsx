import Component from "./Component.jsx"

function App(props) {
    return( 
        <div>
        <h1>** React Concepts **</h1>
        <h2>Props : {props.name}</h2><hr></hr>
         { <Component />}
        </div>
    )
}

export default App;