import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        aoEnviar({ email, senha });
      }}
    >
      <TextField
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        id="email"
        label="Email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={senha}
        onChange={(e) => {
          setSenha(e.target.value);
        }}
        id="senha"
        label="Senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
