import React from 'react'
import Box from '@material-ui/core/Box'

const ItemDetail = ({ item }) => {
    
    return (
        <Box
            display="flex"
            justifyContent="center"
            margin="auto"
            flexWrap="wrap"
        >
            <Box flexDirection="colum" marginTop="60px">
                <h2>{item.name}</h2>
                <img src={item.img} alt="img" width="350" />
            </Box>
            <Box paddingTop={10} margin={5}>
                <div style={{ fontWeight: 'bold' }}>{item.description}</div>
                <p>precio: $ {Intl.NumberFormat().format(item.price)}</p>
                <p>stock: {item.stock}</p>
            </Box>
        </Box>
    )
}

export default ItemDetail
