CREATE TABLE Citas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_nombre VARCHAR(100) NOT NULL,
    cliente_telefono VARCHAR(15),
    servicio VARCHAR(100) NOT NULL,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    notas TEXT
);
