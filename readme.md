## plugins con npm

| plugin | description | example |
| --- | --- | --- |
| npm init -y | Aceptar todas las opciones | --- |
| express | framework de nodejs --> |  |
| nodemon | modo producion, autorecargable al realizar un cambio en el codigo --> | > npm i nodemon -g => nodemom index.js |
| dotenv | variables globales |  |
| express-validator | util para validar request o envio del cliente, es un middleware |  |
| mongoose | encriptacion de password |  |
| bcryptjs | encriptacion de password |  |
| jsonwebtoken | Autenticacion |  |
| cors | Sirve para restringir, es una capa de seguridad |  |
| jsdoc | Realizar documentacion |  |
| twilio | para SMS |  |

<!-- express-jwt  -->

## MIDDLEWARE
Middleware: acciones que se realizan antes de ejecutar la aplicacion.

### JWT
### CORS
### BCRYPTJS


# SERVICES or EXTENSIONS
## SMS
with Twilio(services)

TODO:  SMS como microservicio
## EMAIL
with nodemailer
alternative mailgun (services)

## NOTIFICATION PUSH (WEB)
TODO: api integrado vs librerias

### GRAPHICS GENERATE INFORMES
### Generate PDF
#### Puppeteer
[Puppeteer](https://pptr.dev/)

puppeteer.- no tiene soporte soporte para ff o safari, pero la documentacion parece ser mayor


Alternative [Playwright](https://playwright.dev/)

Playwright.- es nuevo pero tiene soporte para otros navegadores y es similar a puppeteer

# DATABASE
## MONGODB
    NoSql database
    
<!-- 
    ## Access MongoDB Compass

    db_user
    eChDA1TuMpkOQ7E3

    jasbel
    DB_CNN=mongodb+srv://db_user:eChDA1TuMpkOQ7E3@cluster0.4zpd7.mongodb.net/beta

    iiot
    DB_CNN=mongodb+srv://db_user:hJpmV5JhZA8CfcWt@cluster0.faehl.mongodb.net/beta
-->


# HELPERS
*************************************


## Problemas Entontrados y Solucionados

https://prnt.sc/w7hplm al crear un entorno en una nueva computadora me sale el siguiente error y sin poder conectarme, al igual que tambien el codigo https://prnt.sc/w7hq9b

RESOLVE .- La solucion esta en https://prnt.sc/w7hrdi o https://stackoverflow.com/questions/62342929/mongodb-atlas-connection-fails-with-error-mongoserverselectionerror-connection

## AWS S3
1. direction : sao paulo
1. search: s3
    1.1. crear bucket: name=> ptar
    1.1. Block all public access: false
1. search: iam
    1.1. iam > policies > create policy
    1.1. service: choose to s3
    1.1. actions > All S3 actions: true
    1.1. resource > object > any: true
    1.1. resource > bucket > add ARN > bucket name: ptar
    1.1. click "Review Policy"
        1.1.1. name: s3BucketAccessPtar
1. iam > users
    1.1. user name: user-ptar
    1.1. type access: acceso mediante programacion
    1.1. click => Attach existing policies directly
        1.1.1. search: s3BucketAccessPtar: true
    1.1. click => next
    1.1. click => next
    1.1. click => create user

    1.1. access key ID: AKIAULBXYXMSRKTBFKNM
    1.1. Secret access key: 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

1. conectar bucket S3 con ptar=back

## DB MongoDB
### Mongo DB Community
Tutorial practico para community mongoDB server
https://www.youtube.com/watch?v=lWMemPN9t6Q&ab_channel=Fazt

* DB .- recoleccion de datos
* Collecciones .- conjunto de documentos , o tablas para sql
* Documentos .- o datos por item, con sus propios atributos

Activar server 
```bash
    mongod
```
usar shell de base de datos de mongodb
```bash
    mongo #activar interfaz de mongo db
    show dbs #view dbs
    db  #ver base de daos actual
    db.help
    use webstore #crear o ingresar a base datos
    db.myCollection.insert({"name": "laptop"}) # crear una collection e insertar un documento
    db.dropDatabase() #eliminar la base de datos actual
    show collections #ver collection de la base d datos actual
    db.createCollection("newCollection") # crear una nueva coleccion: newCollection
    db.newCollection.drop() #Elimina la collection sugerida <newCollection>
    db.otherCollection.insert({{"name":"laptop","description":"", "price":99.9}) #insert un nuevo documento en la coleccion
    db.otherCollection.find().pretty() #buscar todos los datos de la coleccion y mostrar de forma ordenada
    db.otherCollection.findOne() #buscar el primer documento
    db.otherCollection.find({"name":"laptop"}) #busca todo los documentos con el atributo name="laptop"
    db.otherCollection.findOne({"name":"laptop"}) #busca el primer documento con el atributo name="laptop"
    db.otherCollection.findOne({"name":"laptop"},{"name": 1, "description":1,"price":0}) #busca el primer documento con el atributo name="laptop" y solo mostrara los atributos name y cescription, no mostrara price
    db.otherCollection.find({"name":"laptop"}).sort({name:1}) #busca todo los documentos con el atributo name="laptop" y los ordena alfabeticamente por su nombre
    db.otherCollection.find().limit(3) #busca los tres primero dicumentos
    db.otherCollection.find().forEach(name => console.log("su nombre es: " + name)) #imprime solo el atributo name de todos los documentos
    db.otherCollection.udpate({"name":"Asbel"},{"description":"mi descripcion"}) #Busca el documento con atributo nombre:Asbel y reemplaza todo el documento solo con description
    db.otherCollection.udpate({"name":"Asbel"},{ $set{"description":"mi descripcion"} }) #Busca el documento con atributo nombre:Asbel y agrega o modifica el atributo o propiedad
    db.otherCollection.udpate({"name":"Jhon"},{ $set{"description":"mi descripcion"} }, {upsert: true}) #Busca el documento con atributo nombre:Asbel y agrega o modifica el atributo o propiedad. En caso que no existira con upsert:true lo agregara
    db.otherCollection.udpate({"name":"laptop"},{ $inc{"price":0.1} }) #Busca el documento con atributo nombre:laptop en incrementa la propiedad price: 99.9+0.1
    db.otherCollection #
    db.otherCollection.udpate({"name":"laptop"},{ $rename{"price":"precio"} }) #Busca el documento con atributo nombre:laptop y cambia la propiedad price a precio
    db.otherCollection.remove() # remueve todos los documento de la collesion especifica
    db.otherCollection.remove({"name":"Asbel"}) # remueve el documento con la propiedad name=asbel
```
## Link para el modelado C4
https://app.diagrams.net/#G1vklAkbChXMxGoJrxeQyo8bE0Etl2z5nQ

### Versionamiento
nvm ...
node v14.15.4

 <!-- ssh -i "key-beta-v1.pem" ubuntu@ec2-3-21-127-239.us-east-2.compute.amazonaws.com -->

 ### manejo de server continuo 