import React from 'react'
import data from "../mockData";
import { useEffect, useState } from "react";
import { CartWidget } from "../CartWidget";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import ItemCount from "../Item/ItemCount";

export const ItemDetailContainer = () => {
    return (
      <div>ItemDetailContainer</div>
    )

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
       
            <ItemDetail lista={productList} />
            
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







