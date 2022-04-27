import { useEffect, useState } from "react";
import Item from "./Item";
import '../styles/ItemList.css';
const productList = [
    {
      name: 'Camisetas',
      price: 70,
      imageUrl:"",        
      stock: 7,
      id: 1,
    },
    {
      name: 'Calzado',
      price: 40,
      imageUrl:"",
      stock: 10,
      id: 2,
    },
    {
      name: 'Accesorio',
      price: 19,
      imageUrl:"",
      stock: 6,
      id: 3,
    },
  ];
const ItemList = () => {
   const [items, setItems] = useState([]);
  
   const getItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(items);
      }, 2000);
    });
  
   
    const getItemsfromSource = async () => {
      try {
        const result = await productList;
        setItems(result);
      } catch (error) {
        console.log(error);
        alert('No podemos mostrar los productos en este momento');
      }
    };
  useEffect(() => {
        getItemsfromSource();
    }, []); 
  
    return (
      <div className="product-list-container">
        {
         productList.length ? ( 
             <>
              {
                productList.map((product) => {
                 return (
                    <div key={product.id}>
                      <Item
                        productName={product.name}
                        url={product.imageUrl}
                        alt={product.alt}
                        price={product.price}
                        stock={product.stock}
                        id={product.id}
                        
                      />
                    </div>
                    
                  );
                })
              }
            </>
          ) : (
            <p>Cargando productos...</p>
          ) 
        }
      </div>
    );
  };
  
  export default ItemList;
  