
## REFERENCIAS PARA POSTMAN

## GET /
```http
  GET /
```

#### Muestra todos los productos hasta el momento de PRODUCTS.JSON
##### Renderiza el Handlebars "home.handlebars"
## GET /realTimeProducts
```http
  GET /realTimeProducts
```
#### Vista de productos en tiempo real
##### Muestra el PRODUCTS.JSON actualizado, renderiza "realTimeProducts.handlebars"
## POST /realTimeProducts 
```http
  POST /realTimeProducts
```
#### Agrega productos en tiempo real
##### Renderiza el producto segun lo colocado en POSTMAN
## DELETE /realTimeProducts/${id} 
```http
  DELETE /realTimeProducts/29
```
#### Elimina productos en tiempo real
##### Renderiza PRODUCTS.JSON sin el producto con el ID elegido en POSTMAN 

