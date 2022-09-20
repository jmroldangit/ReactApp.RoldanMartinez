import React from 'react'
import Item from "../Item"


export default ItemDetail

const ItemDetail = ({ lista }) => {
    return (
        <div>
            {lista.map((product) => (
                <div key={product.id}>
                    <ItemDetail 
                    title={product.title} 
                    price={product.price} 
                    image={product.image} 
                    />
        </div>    ))};
        </div>
        
    );
};


