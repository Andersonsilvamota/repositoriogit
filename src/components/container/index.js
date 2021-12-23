import "./styles.css";

export function Container({ repos }) {
  return (
    <div className="container">
      <div className="list-user">
        {repos.map((res, key) => (
          <div className="container">
            <div className="list-user">
              <ul className="conteudo" key={key}>
                <li>
                  <b>Nome:</b> {res.name}
                </li>
                <li>
                  <b>Descrição:</b> {res.description}
                </li>
                <li>
                  <b>Linguagem:</b> {res.language}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}