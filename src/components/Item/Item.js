import ItemCount from "./ItemCount";


const Item = ({title, price, image}) => {
    const stock = 10
  return (
    <div>
        <ItemCount stock={stock}/>
        <img width={"150px"} src={image} alt={title}/>
        <h2>{title}</h2> 
        <h3>{price}</h3>
    </div>
  )
};

export default Item;
