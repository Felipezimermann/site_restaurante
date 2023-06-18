import { Client } from "pg";
const clientePostgre = new Client({
  host: "localhost",
  password: "mypassword",
  user: "myuser",
  database: "mydatabase",
});

clientePostgre.connect();

export default clientePostgre;
