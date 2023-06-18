import clientePostgre from "@/server/db/postgres";
import type { NextApiRequest, NextApiResponse } from "next";
import Error from "next/error";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { img, nome, categoria, valor, acompanhamento } = req.body;
    const resposta = await clientePostgre.query(
      `INSERT INTO cardapio (categoria, nome, valor, img, acompanhamento) VALUES($1, $2, $3, $4, $5)`,
      [categoria, nome, valor, img, acompanhamento]
    );
    res.status(201).json([]);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}
