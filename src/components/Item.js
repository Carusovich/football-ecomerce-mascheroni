import React from 'react'
import Counter from './Counter'

function Item(props) {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={props.url} alt={props.alt} /></figure>
            <div class="card-body">
                <h2 class="card-title">{props.productName}</h2>
                <p></p>
                <div class="card-actions justify-end">

                </div>
                <div class>
                    <Counter />
                    <br />
                    <button class="btn btn-primary">Comprar ahora</button>
                </div>
            </div>
        </div>
    )
}

export default Item