import React from "react";
import { Button, TextField } from "@material-ui/core";

function DadosUsuario({ aoEnviar }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        aoEnviar();
      }}
    >
      <TextField
        id="email"
        label="Email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      
      <TextField
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
