import React, {useState} from "react";


const ItemCount = () => {
 
    const [items, setItems] = useState(0)
    const [stock, setStock] = useState(10)

    const sumar = () => {
      
      if(stock === 0 ) {
        alert ("Se alcanzó el máximo")
      } else{
        setItems(items + 1)
        setStock(stock - 1)
      }
             
    }
    const restar = () => {
      if(items === 0 ) {
        alert("no se pueden introducir valores negativos")
      }
      else{
        setItems(items - 1)
        setStock(stock + 1)
      }
    }
    
  return (
    <>
    <div>Tengo {items} items.</div>
    <div>Stock {stock}</div>
    <button onClick={sumar}>sumar</button>
    <button onClick={restar}>restar</button>
    </>
    
  )
  }
export default ItemCount