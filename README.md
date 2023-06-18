configurações necessárias para inicias o projeto
ter instalado na maquina o node.js, git para clonar o projeto e um banco postgreSQL

criar 2 tabelas no banco de dados

CREATE TABLE public.cardapio (
id int4 NOT NULL GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE),
categoria varchar NOT NULL,
nome varchar NOT NULL,
valor int4 NOT NULL,
img varchar NULL,
acompanhamento varchar NULL
);

CREATE TABLE public.produtos (
id serial4 NOT NULL,
saldo int4 NULL,
preco numeric(10, 2) NULL,
CONSTRAINT produtos_pkey PRIMARY KEY (id)
);

apos criado as tabelas iniciar o projeto

npm run build
npm run start

link para projeto http://localhost:3000/
