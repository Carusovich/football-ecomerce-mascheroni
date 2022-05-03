import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail';

const listProducts = [
    {
        name: 'Camisetas',
        price: 70,
        imageUrl: "",
        stock: 7,
        id: 1,
    },
    {
        name: 'Calzado',
        price: 40,
        imageUrl: "",
        stock: 10,
        id: 2,
    },
    {
        name: 'Accesorio',
        price: 19,
        imageUrl: "",
        stock: 6,
        id: 3,
    },
];

const promesa = new Promise((resp) => {
    resp(listProducts)
}, 2000)

const getItem = () => {
    return promesa
}

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const { prodId } = useParams()

    useEffect(() => {
        if (prodId === undefined) {
            getItem().then((resp) => setItem(resp))
        } else {
            getItem().then((resp) => setItem(resp[prodId]))
        }
    }, [prodId])

    return (
        <div>
            {<ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer;



