import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0);

    const addHandler = () => {
        setCount(count + 1);
    }

    const decrementHandler = () => {
        setCount(count - 1);
    }
    return (
        <div className="card-actions justify-end">
            <label for="custom-input-number" class="w-full text-white-700 text-sm font-semibold">Cantidad</label>
            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button onClick={decrementHandler} class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                    <span className="m-auto text-2xl font-thin">−</span>
                </button>
                <input  className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={count}></input>
                <button onClick={addHandler} class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                    <span className="m-auto text-2xl font-thin">+</span>
                </button>
            </div>
        </div>
    )
}

export default Counter