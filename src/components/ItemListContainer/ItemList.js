import Item from "../Item/Item";

const ItemList = ({ lista, onItemClick }) => {
    return (
        <div>
            {lista.map((product) => (
                <div style={{cursor:"pointer"}} key={product.id} onClick={()=> onItemClick(product)}>
                    <Item 
                    title={product.title} 
                    price={product.price} 
                    image={product.image} 
                    />
        </div>    ))};
        </div>
        
    );
};

export default ItemList
