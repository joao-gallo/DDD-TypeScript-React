import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CadastroProduto = () => {
    const [inputs, setInputs] = useState({
        Codigo: "",
        Descricao: "",
        CodDeBarras: "",
        VlrDeVenda: 0.0,    
        PesoBruto: 0.0,
        PesoLiquido: 0.0,
    });
    const [err, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value })); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/api/auth/register", inputs);
            navigate("/produtos");
        } catch (err) {
            setError(err.response.data);
        }
    };

    return (
        <div className="auth">
            <h1>Cadastro de Produto</h1>
            <form>
                <input
                    required
                    type='number'
                    placeholder="Código"
                    name="Codigo"
                    onChange={handleChange}>
                </input>
                <textarea
                    required
                    type=""
                    placeholder="Descrição"
                    name="Descricao"
                    onChange={handleChange}
                />
                <input
                    required
                    type="text"
                    placeholder="Código De Barras"
                    name="CodDeBarras"
                    onChange={handleChange}
                />
                <input
                    required
                    type="number"
                    placeholder="Valor De Venda"
                    name="VlrDeVenda"
                    onChange={handleChange}
                />
                <input
                    required
                    type="number"
                    placeholder="Peso Bruto"
                    name="PesoBruto"
                    onChange={handleChange}
                />
                <input
                    required
                    type="number"
                    placeholder="Peso Líquido"
                    name="PesoLiquido"
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>Cadastrar Produto</button>
                {err && <p>{err}</p>}
                <span>
                    <Link to="/">Home</Link>
                </span>
            </form>
        </div>
    );
};

export default CadastroProduto;