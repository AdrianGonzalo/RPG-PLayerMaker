## Arquitectuda Hexagonal

#### ...Logic.js

Interactua con la base de datos y devuelve los datos o errores sin HTTP

#### route.js

Maneja las peticiones HTTP, llama a ...Logic.js y responde con un Response.json()

## Estructura con varias bases de datos

#### MongoDB

Use `mongod` and `mongosh` in the terminal to open the DataBase

    Comandos Basicos de MongoDB

    • db : muestra la base de datos actual
    • show dbs : lista todas las bases de datos
    • db.dropDatabase() : elimina la base de datos actual
    • use ... : cambia o crea una base de datos

    Comandos para colecciones

    • show collections : lista todas las collecciones de la database actual
    • db.createCollection("usuarios") : crea una colección llamada "usuarios"
    • db.usuarios.drop() : elimina la colección "usuarios"

    Comandos para insertar documentos

    • db.usuarios.insertOne({ nombre: 'Juan', edad: 30}) : inserta un solo documento
    • db.usuarios.insertMany([
        { nombre: "Ana", edad: 25 },
        { nombre: "Luis", edad: 28 } ]) : inserta varios documentos

    Comandos para buscar documentos

    • db.usuarios.find() : lista todos los documentos de una coleccion
    • db.usuarios.find().pretty() : lista todos los documentos con formato legible
    • db.usuarios.find({ nombre: "Juan" }) : busca por un campo específico
    • db.usuarios.findOne({ edad: 30 }) : busca un solo documento

    Comandos para actualizar documentos

    • db.usuarios.updateOne({ nombre: "Juan" }, { $set: { edad: 31 } }) : actualiza un solo documento
    • db.usuarios.updateMany({ nombre: "Ana" }, { $set: { ciudad: "Madrid" } }) : actualiza multiples documentos
    • db.usuarios.replaceOne({ nombre: "Luis" }, { nombre: "Luis", edad: 25 }) : reemplaza un documento completo

    Comandos para eliminar documentos

    • db.usuarios.deleteOne({ nombre: "Juan" }) : elimina un solo documento
    • db.usuarios.deleteMany({ edad: { $gt: 40 } }) : elimina usuarios con edad mayor a 40

#### MongoDB with Mongoose

In the future

#### Sql

In the future

## Start Debugger Backend without attach

#### Debugger in Chrome

#### Debugger in VsCode

## Start Debugger Backend with attach

#### Debugger in Chrome

#### Debugger in VsCode
