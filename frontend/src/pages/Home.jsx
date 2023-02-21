import { Link } from "react-router-dom";
import NavBar from '../components/NavBar'

const Home = () => {
  
  return (
    <div className="home">
      <h1><Link to="/produtos">Lista de produtos</Link></h1>
      <h1><Link to="/cadastroprodutos">Cadastro de produtos</Link></h1>
      <h3>
        Produtos cadastrados: <NavBar></NavBar>
      </h3>
    </div>
  );
};

export default Home;