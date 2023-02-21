import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

// Criando Context

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('Nome')) || null
    );

    // usando axios pra fazer post no backend

    const register = async (inputs) => {
        const res = await axios.post('http://localhost:8800/api/auth/register', inputs)
    }

    const login = async (inputs) => {
        const res = await axios.post('http://localhost:8800/api/auth/login', inputs)
        setCurrentUser(res.data)
    }

    const logout = async (inputs) => {
        await axios.post('http://localhost:8800/api/auth/logout')
        setCurrentUser(null)
    }

// Aqui estou usando useEffect para que o localstorage esteja com o usuario corrente sempre setado
    useEffect(() => {
        localStorage.setItem('Nome', JSON.stringify(currentUser))
    }, [currentUser])

// Faço o retorno dos componentes com o contexto atualizado
    return(
        <AuthContext.Provider value={{currentUser, register, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}