import React, { Component } from "react";
import Form from "../Form";
import Tarefas from "../Tarefas";
import * as S from './style.js'


//Componente com estado
class Main extends Component {

// Segunda forma mais curta
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1, // Esse indice -1 quando estou criando uma nova tarefa, se for diferente de -1 estou editando uma tarefa existente
  };

  // Aqui vou pegar as informações pra jogar em LocalStorage
  componentDidUpdate(prevProps, prevState){
    const { tarefas } = this.state;
    if (tarefas === prevState.tarefas) return
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  // Aqui vou guardar de fato as informações no LocalStorage
  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'))
    if (!tarefas) return // Senao existirem tarefas, nao faço nada e retorno
    this.setState({ tarefas }); // se existe, vou setar o estado
  }



  // Aqui eu estou armazenando o valor do input do usuario e estou mudando o estado da variável
  handleChange = (evento) => {
    this.setState({
      novaTarefa: evento.target.value,
    })
  }


  handleSubmit = (evento) => {
    evento.preventDefault();
    const { tarefas, index } = this.state;
    let {novaTarefa} = this.state;
    novaTarefa = novaTarefa.trim(); // trim elimina espaço no inicio e no fim

    if(tarefas.indexOf(novaTarefa) !== -1) return; //Aqui só estou checkando se ja existe uma tarefa igual

    const novasTarefas = [...tarefas];

    if (index === -1){ // Nessa parte eu estou criando uma nova tarefa
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: "", // Aqui estou limpando o input
      })
    } else { //aqui é quando estou editando uma tarefa
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
        novaTarefa: "", // Aqui estou limpando o input
      })
    }

  }


  handleDelete = (evento, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1)

    this.setState({
      tarefas: [...novasTarefas],
    })
  }


  handleEdit = (evento, index) => {
    const { tarefas } = this.state;

    this.setState({
      index: index,
      novaTarefa: tarefas[index],
    })
  }


  render(){

    const { novaTarefa, tarefas } = this.state;

    return (

      <S.Main>
        <S.Titulo>Lista de tarefas</S.Titulo>

        <Form
          handleSubmit = {this.handleSubmit}
          handleChange = {this.handleChange}
          novaTarefa = {novaTarefa}
        />

        <Tarefas
          handleEdit = {this.handleEdit}
          handleDelete = {this.handleDelete}
          tarefas = {tarefas}
        />
      </S.Main>

  )}
}

export default Main
