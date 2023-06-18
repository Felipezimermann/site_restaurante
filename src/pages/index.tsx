/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";

import { GetServerSideProps } from "next";
import serverCardapio, {
  iserverCardapio,
} from "../server/produtos/serverCardapio";
import CardsProdutos from "@/components/cards/CardsProdutos";

interface HomeProps {
  cardapio?: iserverCardapio[];
}

export default function Home(props: HomeProps) {
  const { cardapio } = props as { cardapio: iserverCardapio[] };
  const bebidas = cardapio.filter((item) => item.categoria === "Bebida");
  const procoes = cardapio.filter((item) => item.categoria === "Porcoes");
  const pratos = cardapio.filter((item) => item.categoria === "Prato");

  return (
    <main style={{ padding: "10px 10px", marginBottom: "130px" }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Segunda a sexta</ListSubheader>
      </ImageListItem>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">
            <h2>Bebidas</h2>
          </ListSubheader>
        </ImageListItem>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "10px 10px",
        }}
      >
        {bebidas?.map((item, index) => (
          <CardsProdutos
            categoria={item.categoria}
            img={item.img}
            nome={item.nome}
            valor={item.valor}
            key={index}
            acompanhamento={item.acompanhamento}
          />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">
            <h2>Pratos</h2>
          </ListSubheader>
        </ImageListItem>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "10px 10px",
        }}
      >
        {pratos?.map((item, index) => (
          <CardsProdutos
            categoria={item.categoria}
            img={item.img}
            nome={item.nome}
            valor={item.valor}
            key={index}
            acompanhamento={item.acompanhamento}
          />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">
            <h2>Porcões</h2>
          </ListSubheader>
        </ImageListItem>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "10px 10px",
        }}
      >
        {procoes?.map((item, index) => (
          <CardsProdutos
            categoria={item.categoria}
            img={item.img}
            nome={item.nome}
            valor={item.valor}
            key={index}
            acompanhamento={item.acompanhamento}
          />
        ))}
      </div>
    </main>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: { cardapio: await serverCardapio() },
  };
}
