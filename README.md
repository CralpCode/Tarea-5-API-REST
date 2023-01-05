# Tarea-5-API-REST
## Despiegue de la página
<img src = "./src/assets/apiRest.png" width = "500px">
Para deplegar la página use railway.app aqui esta el link para acceder a la misma.

Link : [APIREST](https://tarea-5-api-rest-production.up.railway.app/ "Tarea-5")

## Tests para probar la Api
### Ruta principal
 GET http://localhost:3000/

### Ruta ping
 GET http://localhost:3000/ping

### Ruta para obtener lista de todos los lenguajes
 GET http://localhost:3000/api/lenguajes

### Ruta para obtener un lenguaje
Añadir algun valor existente en la lista /1, /2, /3 , etc....

GET http://localhost:3000/api/lenguajes/1

### Crear un nuevo lenguaje
 POST http://localhost:3000/api/lenguajes Content-Type: application/json 
 
{
  "name" : "C",
  "year" : 1997
}

### Actualizar algun lenguaje
 PATCH http://localhost:3000/api/lenguajes/7 Content-Type: application/json 
 
{
  "name" : "nuevo lenguaje",
  "year" : 2008
}

### Ruta para borrar algun lenguaje
DELETE http://localhost:3000/api/lenguajes/3
