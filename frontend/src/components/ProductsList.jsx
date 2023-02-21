import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";

const ProductList = () => {
    const { products } = useContext(AuthContext);

    return (
        <h4>Lista de Produtos:{products}</h4>
    );
}

export default ProductList