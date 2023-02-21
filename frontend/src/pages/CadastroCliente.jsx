import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CadastroCliente = () => {
  const [inputs, setInputs] = useState({
    Nome: "",
    Fantasia: "",
    Documento: "",
    password: "",
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
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Cadastro de Cliente</h1>
      <form>
        <input
          required
          type="text"
          placeholder="Nome"
          name="name"
          onChange={handleChange}
        />
        <input
          required
          type="text"
          placeholder="Fantasia"
          name="Fantasia"
          onChange={handleChange}
        />
        <input
          required
          type="text"
          placeholder="Documento"
          name="Documento"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Senha"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Cadastrar</button>
        {err && <p>{err}</p>}
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default CadastroCliente;