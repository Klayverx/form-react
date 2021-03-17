import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from "@material-ui/core"
import 'fontsource-roboto';

import { validarCPF, validarSenha } from "./models/cadastro"

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Fomulário de cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validacoes={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }} />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados)
}

export default App;
