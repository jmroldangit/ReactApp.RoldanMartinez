import data from "../mockData";
import { useEffect, useState } from "react";
import { CartWidget } from "../CartWidget";
import ItemList from "../ItemListContainer/ItemList";
import ItemCount from "../Item/ItemCount";


export default function ItemListContainer(props) {


    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProducts
        .then((response) => {
            setProductList(response);
        })
        .catch((error) =>
        console.log(error));

    }, []);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });

    return (
        <>
       
            <ItemList lista={productList} />
            
            <ul>
                <li className="active">
                    <a href="pricing">Pricing</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <CartWidget>Carrito</CartWidget>
                </li>

            </ul>
        </>
    )
}


