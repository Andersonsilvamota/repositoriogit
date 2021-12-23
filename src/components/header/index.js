import { useState, useEffect, useCallback } from "react";
import { Container } from "../container";
import api from "../../services/api";
import "./styles.css";

export function Header() {
  const [search, setSearch] = useState("");
  const [repos, setRepos] = useState([]);

  const loadRepos = useCallback(
    (search) => {
      if (search === undefined) {
        return
      } else {
        api
          .get(`/users/${search}/repos`)
          .then((res) => setRepos(res.data))
          .catch((err) => console.log(err));
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [search]
  );

  useEffect(() => {
    loadRepos();
  }, [loadRepos]);

  const submit = () => {
    loadRepos(search);
  };

  return (
    <>
      <div className="header">
        <div className="header-itens">
          <p className="baseurl">https://github.com/</p>
          <input
            placeholder="Digite o nome do usuário"
            value={search}
            className="input"
            type="search"
            onChange={(event) => setSearch(event.target.value)}
          ></input>
          <button type="submit" className="btn" onClick={submit}>
            Buscar
          </button>
        </div>
      </div>
      <Container repos={repos} />
    </>
  );
}
