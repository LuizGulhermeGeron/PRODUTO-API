\c gabi;

create table produto(
	id serial primary key,
	nome varchar not null,
	descricao varchar,
	preco real not null,
	estoque int not null,
	data timestamp not null
);

insert into produto(nome,preco,estoque,data) values
	('Gabi 1',64.81,19,'2005-01-19'),
	('Gabi 2',64.81,19,'2005-01-19'),
	('Gabi 3',64.81,19,'2005-01-19'),
	('Gabi 4',64.81,19,'2005-01-19'),
	('Gabi 5',64.81,19,'2005-01-19')
;