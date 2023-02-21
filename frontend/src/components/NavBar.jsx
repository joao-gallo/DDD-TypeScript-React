import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const NavBar = () => {
    // Chamo os elementos pelo contexto
    const { currentUser, logout } = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="container">
                <div>Usuário: {currentUser ? currentUser : 'Error'}</div>
                <div className="links">
                    <Link className="link" to="/">
                        <h6>Home</h6>
                    </Link>
                    {/* Se houver usuario, haverá um botao de logout, do contrario, teremos o botao de login */}
                    <span>{currentUser?.username}</span>
                    {currentUser ? (
                        <span onClick={logout}>Logout</span>
                    ) : (
                        <Link className="link" to="/login">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NavBar;