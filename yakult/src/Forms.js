import './App.css';
import React from "react";
import { useNavigate } from "react-router-dom";

export const Forms = () => {
    const navigate = useNavigate();
    
    return (
        <div>    
            <button className="boton-home" onClick={()=>navigate("/")}>Home</button>        
            <h2>Aqui va el forms</h2>
        </div>
    );
};