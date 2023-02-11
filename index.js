import React from "react"
import ReactDOM from "react-dom/client"

import boxes from "./boxes"
import Box from "./Box"

function Page(){
    const [square,setSquare] = React.useState(boxes)
   
    function toggle(id){
        setSquare(prevSquare => {
            return prevSquare.map((arrayItem) => {
                // console.log(`running ${arrayItem.id}`)
                return arrayItem.id === id ? {...arrayItem, on: !arrayItem.on} : arrayItem
            }) 
        })
    }
   
    const boxElements = square.map(item => (
            <Box 
                key={item.id} 
                on={item.on} 
                toggle={()=>toggle(item.id)} 
            />
        ))
    return (
        <main>
            <h1>Boxes will go here</h1>
            {boxElements}
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Page />)
