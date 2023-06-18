/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { useRouter } from "next/router";

function CadastroProduto() {
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [acompanhamento, setAcompanhamento] = useState("");
  const [img, setImg] = useState(
    "https://blog.coffeemais.com/wp-content/uploads/2022/01/para-que-serve-o-cafe-interna.jpg"
  );
  const [valor, setValor] = useState(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post("/api/salvaProduto", {
        nome,
        categoria,
        img,
        valor,
        acompanhamento,
      })
      .then(() => {
        alert("Produto cadastrado com sucesso!");
        window.location.reload();
      })
      .catch((err) => alert(err));
    console.log("Dados do formulário:", { nome, categoria, img, valor });
  };

  const categorias = [
    {
      value: "Pratos",
      label: "Pratos",
    },
    {
      value: "Bebida",
      label: "Bebida",
    },
  ];

  return (
    <main>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">
            <h2>Cadastro De produto</h2>
          </ListSubheader>
        </ImageListItem>
      </div>
      <div style={{ display: "flex" }}>
        <form
          name="productForm"
          id="productForm"
          onSubmit={handleSubmit}
          style={{
            padding: "30px",
            flexDirection: "column",
            display: "flex",
            gap: "15px",
            width: "70%",
          }}
        >
          <TextField
            label="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="acompanhamento "
            value={acompanhamento}
            onChange={(e) => setAcompanhamento(e.target.value)}
            fullWidth
            required
          />
          <TextField
            onClick={(e: any) => setCategoria(e.target.value)}
            label="Categoria"
            select
            value={categoria}
          >
            {categorias.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <TextField
            label="Imagem (URL)"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Valor"
            value={valor}
            onChange={(e) => setValor(+e.target.value)}
            fullWidth
            required
          />
        </form>
        <div style={{ width: "30%", padding: "50px 25px" }}>
          <ImageListItem
            sx={{
              margin: "10px",
              "&:hover": {
                "-moz-transform": "scale(1.1)",
                "-webkit-transform": "scale(1.1)",
                transform: "scale(1.1)",
              },
            }}
            key={img}
          >
            <img
              src={`${img}?w=248&fit=crop&auto=format`}
              srcSet={`${img}?w=180&fit=crop&auto=format&dpr=2 2x`}
              alt={nome}
            />
            <ImageListItemBar
              title={nome}
              subtitle={acompanhamento}
              sx={{ cursor: "pointer", background: "rgb(0 0 0 / 83%);" }}
              actionIcon={
                <IconButton
                  sx={{
                    color: "rgba(255, 255, 255, 0.54)",
                  }}
                  aria-label={`info about ${nome}`}
                >
                  {valor.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </IconButton>
              }
            />
          </ImageListItem>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          placeItems: "center",
          padding: "50px",
        }}
      >
        <Button
          type="submit"
          variant="contained"
          color="primary"
          form="productForm"
        >
          Cadastrar
        </Button>
      </div>
    </main>
  );
}

export default CadastroProduto;
