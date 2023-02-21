import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import CadastroProdutos from './pages/CadastroProdutos'
import ListaProdutos from './pages/ListaProdutos'
import CadastroCliente from "./pages/CadastroCliente";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import './style.scss'

const Layout = () => {
  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ]
  },
  {
    path: "/register",
    element: <CadastroCliente />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/produtos",
    element: <ListaProdutos />,
  },
  {
    path: "/cadastroprodutos",
    element: <CadastroProdutos />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
