CREATE DATABASE db_clubedovinho;

USE db_clubedovinho;

CREATE TABLE tb_produto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    categoria VARCHAR(20) NOT NULL,
    valor DECIMAL NOT NULL
);

INSERT INTO tb_produto 
    (nome, categoria, valor)
VALUES
    ('Vinho Sao Braz', 'Vinho Suave', '10.89');

-- mysql command client: col123, 123456, 12345 --
-- 

INSERT INTO tb_produto (nome, categoria, valor) 
VALUES
('Cerveja Nordestina', 'Cerveja Pilsen', '4.50'),
('Refrigerante Cajuína', 'Bebida Não Alcoólica', '3.20'),
('Cachaça do Sertão', 'Destilado', '15.75'),
('Suco de Umbu', 'Bebida Natural', '5.00'),
('Água Mineral Cristalina', 'Água', '2.00'),
('Licor de Jenipapo', 'Licor Artesanal', '12.90'),
('Café Torrado Cariri', 'Café', '8.40'),
('Guaraná Jesus', 'Refrigerante', '4.10'),
('Chá de Ervas Mandacaru', 'Chá Natural', '6.30'),
('Vinho do Seridó', 'Vinho Suave', '11.99');
