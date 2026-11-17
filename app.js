// API de estado de Distribuciones Mediterráneo S.L.
const http = require('http');
const os = require('os');
 
const PUERTO = 3000;
 
const servidor = http.createServer((peticion, respuesta) => {
  if (peticion.url === '/') {
    // Ruta raíz: mensaje de bienvenida
    respuesta.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    respuesta.end('Bienvenido a la API de estado de Distribuciones Mediterráneo S.L. - Mark Torralba');
  } else if (peticion.url === '/estado') {
    // Ruta /estado: información del servicio en formato JSON
    const estado = {
      servicio: 'api-estado-mediterraneo',
      hostname: os.hostname(),
      uptime_segundos: Math.round(process.uptime()),
      fecha: new Date().toISOString()
    };
    respuesta.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    respuesta.end(JSON.stringify(estado));
  } else {
    // Cualquier otra ruta: error 404
    respuesta.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
    respuesta.end(JSON.stringify({ error: 'Ruta no encontrada' }));
  }
});
 
servidor.listen(PUERTO, '0.0.0.0', () => {
  console.log('API de estado escuchando en el puerto ' + PUERTO);
});
