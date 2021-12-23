import { useEffect, useState } from "react";
import api from "../../services/api";
import "./styles.css";
import { Header } from "../header";

export function Container({search}){
    const [users, setUsers] = useState([]);
    console.log(search);
    useEffect(()=>{

        async function loadUsers(){
            const response = await api.get(`https://api.github.com/users/Andersonsilvamota/repos`)
            setUsers(response.data)
        }

        loadUsers();
    },[])

    return (
        <div className="container">
            <div className="list-user">
                
            {users.map((user, key)=> (
               
                <div className="container">
                    
                    <div className="list-user" >
                        
                        <ul className="conteudo" key={key}>
                            <li><b>Nome:</b> {user.name}</li>
                            <li><b>Descrição:</b> {user.description}</li>
                            <li><b>Linguagem:</b> {user.language}</li>
                        </ul>
                       
                    </div>
                </div>
                
            ))}
          </div>
        </div>
      );
}