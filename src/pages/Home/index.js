import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import style from "./Home.module.css";
import {
  adicionarProduto,
  atualizarProduto,
  removerProduto,
} from '../../reducers';


import { useDispatch, useSelector } from 'react-redux';
import { useState} from "react";

function Home() {
  const dispatch = useDispatch();
const produtos = useSelector(state => state.produtos.list);
  
  const [id, setid] = useState(null);
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');

  const salvar = () => {
    if (nome && valor) {
      const produto = {
        id: id,
        nomeProduto: nome,
        valor: parseFloat(valor),
      };

      if (id) {
        dispatch(atualizarProduto(produto));
        alert("Produto atualizado com sucesso!");
      } else {
        dispatch(adicionarProduto(produto));
        alert("Produto adicionado com sucesso!");
      }

      cancelar();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const cancelar = () => {
    setNome('');
    setValor('');
    setid(null);
  };

  const editar = (produto) => {
    setid(produto.id);
    setNome(produto.nomeProduto);
    setValor(produto.valor);
  };

  const excluir = (id) => {
    dispatch(removerProduto(id));
  };

  return (
    <div>
      <Header />
      <Container>
        <div className={style.card}>
            <div className={style.lineInput}>
              <label>Nome</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome do Produto"
              />
            </div>
            <div className={style.lineInput}>
              <label>Valor</label>
              <input
                type="number"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                placeholder="Valor do Produto"
              />
            </div>
            <button onClick={salvar}>{id ? 'Atualizar' : 'Salvar'}</button>
            <button onClick={cancelar}>Cancelar</button>
            
            {/* Listagem */}
            <div className={style.outro}>
            <h2>Produtos Cadastrados</h2>
            <ul>
              {produtos.map((p) => (
                <li key={p.id}>
                  {p.id} {p.nomeProduto} - R$ {p.valor.toFixed(2)}
                  <button onClick={() => editar(p)}>Editar</button>
                  <button onClick={() => excluir(p.id)}>Excluir</button>
                </li>
              ))}
            </ul>
          </div>
          </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;