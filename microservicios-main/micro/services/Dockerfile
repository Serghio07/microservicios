FROM node:18

# Crear directorio de la app
WORKDIR /usr/src/app

# Copiar archivos
COPY package*.json ./
COPY . .

# Instalar dependencias
RUN npm install

# Exponer puerto
EXPOSE 3000

# Comando para ejecutar la app
CMD ["node", "servicio.js"]
