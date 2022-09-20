import React from 'react'
import data from "../mockData";
import { useEffect, useState } from "react";
import { CartWidget } from "../CartWidget";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import ItemCount from "../Item/ItemCount";

export const ItemDetailContainer = ({item, onBack}) => {
    return (
        <ItemDetail item={item} onBack={onBack}/>
    )
}







