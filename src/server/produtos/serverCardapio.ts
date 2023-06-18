import clientePostgre from "@/server/db/postgres";

export interface iserverCardapio {
  img: string;
  nome: string;
  categoria: string;
  valor: number;
  acompanhamento: string;
}

async function serverCardapio(): Promise<iserverCardapio[]> {
  const res = await clientePostgre.query("SELECT * from cardapio", []);
  return res.rows;
}

export default serverCardapio;
