import { useState, useEffect } from "react";
import { Container } from "../container";
import "./styles.css";

export function Header(){
    const [search, setSearch] = useState("");
    const [newSearch, setNewSearch] = useState("");

    console.log(newSearch);

   
    function buscar(){
        setSearch(setNewSearch);
        

    }

    return(
        <>
            <div className="header">
                
                <div className="header-itens">
                    <p className="baseurl">https://github.com/</p>
                    <input onChange={(e) => setNewSearch(e.target.value)}
                            value={newSearch} 
                            className="input" 
                            type="search" 
                            placeholder="Digite o usuário...">
                        
                    </input>
                    <button type="submit" className="btn" onClick={buscar} >Buscar</button>
                </div>
            </div>
            <Container search={search}/>
        </>
    );
}