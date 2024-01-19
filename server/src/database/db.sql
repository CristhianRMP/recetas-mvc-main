SELECT * FROM alimentos.receta
DROP TABLE alimentos.receta
CREATE TABLE IF NOT EXISTS alimentos.receta(
	id_receta SERIAL NOT NULL PRIMARY KEY,
	str_receta_nombre VARCHAR UNIQUE,
	str_autor_nombre VARCHAR,
	str_autor_telefono VARCHAR,
	str_autor_correo VARCHAR,
    str_receta_image VARCHAR,
    str_receta_preparacion VARCHAR,
    str_receta_dificultad VARCHAR
);

INSERT INTO alimentos.receta(
	str_receta_nombre,
	str_autor_nombre,
	str_autor_telefono,
	str_autor_correo,
    str_receta_image,
    str_receta_preparacion,
    str_receta_dificultad
)
VALUES
('Papas con cuero', 'Daniel Tene :)', '♥0968857043♥', 'tenedaniel22@gmail.com', 'body:[♣☻☺♦•◘○◙]', 'Colocar todo xd', 'Fácil'),
('Yapingacho', 'Rubén Valencia', '0978458520', 'rubenvalencia@gmail.com', '98qweq87we', 'Colocar en la olla', 'Medio'),
('Encebollado', 'Kevin Espinoza', '0985745877', 'kevinespinoza@gmail.com', 'qwe87qwe98q7we', 'Colocar todo :)', 'Difícil');


----------------------------------INGRESAR SIN URL DE LA IMAGEN-------------------------------------
SELECT * FROM alimentos.receta
DROP TABLE alimentos.receta
CREATE TABLE IF NOT EXISTS alimentos.receta(
	id_receta SERIAL NOT NULL PRIMARY KEY,
	str_receta_nombre VARCHAR,
	str_autor_nombre VARCHAR,
	str_autor_telefono VARCHAR,
	str_autor_correo VARCHAR,
    str_receta_image VARCHAR,
    str_receta_preparacion VARCHAR,
    str_receta_dificultad VARCHAR
);

INSERT INTO alimentos.receta(
	str_receta_nombre,
	str_autor_nombre,
	str_autor_telefono,
	str_autor_correo,
    str_receta_preparacion,
    str_receta_dificultad,
	str_receta_image
)
VALUES
('Papas con cuero', 'Daniel Tene :)', '0968857043', 'tenedaniel22@gmail.com', 'Colocar todo xd', 'Fácil',
'https://canalcocina.es/medias/publicuploads/2014/05/11/131080/t9kcuz3g3953ml7gbtm1.jpg'
),
('Yapingacho', 'Rubén Valencia', '0978458520', 'rubenvalencia@gmail.com', 'Colocar en la olla', 'Medio',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKYaCUtySIj5B2wOobV3rIJHhfoc4GlbNVfw&usqp=CAU'
),
('Encebollado', 'Kevin Espinoza', '0985745877', 'kevinespinoza@gmail.com', 'Colocar todo :)', 'Difícil',
'https://marcellos.com.ec/wp-content/uploads/2022/10/Encebollado_Mostaza-870x635.png'
);


SELECT * FROM alimentos.usuario
DROP TABLE alimentos.usuario
CREATE TABLE IF NOT EXISTS alimentos.usuario(
	id_usuario SERIAL NOT NULL PRIMARY KEY,
    str_nombre VARCHAR,
    str_apellido VARCHAR,
    str_email VARCHAR,
    str_password VARCHAR,
    str_telefono VARCHAR
);

INSERT INTO  alimentos.usuario(
	str_nombre,
    str_password,
)
VALUES
('admin', 'admin23');