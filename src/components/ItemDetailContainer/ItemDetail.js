import React from 'react'


const ItemDetail = ({ item, onBack }) => {
    return (
        <div>
            <img width={"150px"} src={item.image} alt={item.title}/>
            <h2>{item.title}</h2> 
            <h3>{item.price}</h3>
            <button onClick={()=> onBack()}>Volver</button>
        </div>
      ) 
 
 };

 export default ItemDetail
