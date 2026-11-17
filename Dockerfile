# Imagen oficial de Node.js 22 en versión reducida (slim)
FROM node:22-slim
 
# Directorio de trabajo dentro del contenedor
WORKDIR /app
 
# Copiamos todo el proyecto al contenedor
COPY . .
 
# Instalamos las dependencias (esta API no tiene ninguna externa)
RUN npm install
 
# Documentamos que la aplicación escucha en el puerto 3000
EXPOSE 3000
 
# Arrancamos la aplicación con el script start de package.json
CMD ["npm", "start"]
