import React,{useState} from 'react'


const ItemCount = ({stock}) => {
 
    const [items, setItems] = useState(0)

    const sumar = () => items < stock ? setItems(items + 1) : alert("Se alcanzó el máximo")
    const restar = () => items > 0 ? setItems(items - 1) : alert("no se pueden introducir valores negativos")
    
  return (
    <>
    <div>Tengo{items} items.</div>
    <div>Stock{stock}</div>
    <button onClick={sumar}>sumar</button>
    <button onClick={restar}>restar</button>
    </>
    
  )
  }
export default ItemCount