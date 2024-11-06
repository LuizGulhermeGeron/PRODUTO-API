\c gabi;

create table produto(
	id serial primary key,
	descricao varchar not null,
	preco real not null,
	estoque int not null,
	data timestamp not null
);

insert into produto(descricao,preco,estoque,data) values
	('Pizza Calabresa 460g',20.45,2000,'2005-01-19'),
	('Pizza mussarela 440g',20.45,1000,'2005-01-19'),
	('Pizza Levíssimo e Brócolis 420g',19.79,500,'2005-01-19'),
	('Pizza de Frango com Catupiry 460g',19.79,100,'2005-01-19'),
	('Pizza de Lombo com Catupiry 460g',19.79,500,'2005-01-19')
;