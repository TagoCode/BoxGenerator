import React, {useState} from 'react'

const BoxForm = ({boxes, setBoxes}) => {
    const [color,setColor]=useState('blue');

    const colorHandler = e => {
        setColor(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();
        setBoxes([...boxes,{
            color: color
        }])
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="choose a color" onChange={colorHandler}/>
                <button onSubmit={submitHandler}>Create a box</button>
            </form>
        </div>
    )
}

export default BoxForm
