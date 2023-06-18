/* eslint-disable @next/next/no-img-element */
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import IconButton from "@mui/material/IconButton";

function CardsProdutos(item: {
  img: string;
  nome: string;
  categoria: string;
  valor: number;
  acompanhamento: string;
}) {
  return (
    <ImageListItem
      sx={{
        margin: "10px",
        "&:hover": {
          "-moz-transform": "scale(1.1)",
          "-webkit-transform": "scale(1.1)",
          transform: "scale(1.1)",
        },
      }}
      key={item.img}
    >
      <img
        style={{ width: "248px", height: "210px" }}
        src={`${item.img}?w=248&fit=crop&auto=format`}
        srcSet={`${item.img}?w=180&fit=crop&auto=format&dpr=2 2x`}
        alt={item.nome}
      />
      <ImageListItemBar
        title={item.nome}
        subtitle={item.acompanhamento}
        sx={{ cursor: "pointer", background: "rgb(0 0 0 / 83%);" }}
        actionIcon={
          <IconButton
            sx={{
              color: "rgba(255, 255, 255, 0.54)",
            }}
            aria-label={`info about ${item.nome}`}
          >
            {item.valor.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </IconButton>
        }
      />
    </ImageListItem>
  );
}

export default CardsProdutos;
