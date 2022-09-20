import ItemCount from "./ItemCount";


const Item = ({title, price, image}) => {

  return (
    <div>
        <ItemCount/>
        <img width={"150px"} src={image} alt={title}/>
        <h2>{title}</h2> 
        <h3>{price}</h3>
        <hr></hr>
    </div>
  )
};

export default Item;
