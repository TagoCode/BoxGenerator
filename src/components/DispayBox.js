import React, {useState} from 'react'

const DispayBox = (props) => {
    return (
        <div>
            {props.boxes.map((box,i)=>
            <div key={i} style={{height: '100px', width: '100px', display: 'inline-block', backgroundColor: box.color, border: '1px solid black'}}>
            </div>
            )}
        </div>
    )
}

export default DispayBox
