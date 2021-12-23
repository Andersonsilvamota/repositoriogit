import "./styles.css";

export function Header(){
    return(
        <div className="header">
            
            <div className="header-itens">
                https://github.com/
                <input className="input" type="search" placeholder="Digite o nome do repositório..."></input>
                <button className="btn" onClick="">Pesquisar</button>
            </div>
        </div>
    );
}