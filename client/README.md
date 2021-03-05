
# Conceptos

## Hooks de react

Para tener conceptos basicos de los hook de react, se tiene la documentacion de los hooks mas utilizados en 
 https://es.reactjs.org/docs/hooks-reference.html

# Instalaciones o paquetes necesarios

| Extension | Description    |
| -------- | -------- |
| react-router-dom  | para realizar al estructuracion de la rutas  |
| React-Strap  | Framework para estilos usandio bootstrap  |
| apexchart  | Creacion de Graficas   |
| react-feather  | Iconos   |
| jsdoc  | Documentacion automatica, mejor codigo   |
| react-toastify  | Notificaciones   |
| sweetalert2  | Alertas en Pantalla   |
| react-transition-group  | CSS transiciones   |
| react-switch-lang  | Traductor de idiomas basado en i18n... |

icofont: iconos (scss icoicon)
# Despliegue de aplicacion

 >> npm run build
 
 >> npm install -g serve
 >> serve -s build

# Navegadarores soportados

| Navegadores | Version igual o superior |
| ------------- | ------------- |
| Chrome  | > v  |
| Edge  | > v  |
| Safari  | > v  |
| Firefox  | > v  |
| Otros  | ---  |

# Tamanio de pantalla optimizados

| Pantalla | Ancho    |
| -------- | -------- |
| Desktop  | 1440px or 1440px  |
| Desktop  | 1200px   |
| Desktop  | 1024px   |
| Tablet  | 992px   |
| Tablet  | 768px   |
| Mobile  | 576px   |
| Mobile  | 360px   |


## Problemas al usar mongodb-compass en una nueva computadora

https://prnt.sc/w7hplm al crear un entorno en una nueva computadora me sale el siguiente error y sin poder conectarme, al igual que tambien el codigo https://prnt.sc/w7hq9b

RESOLVE .- La solucion esta en https://prnt.sc/w7hrdi o https://stackoverflow.com/questions/62342929/mongodb-atlas-connection-fails-with-error-mongoserverselectionerror-connection

### ayudas
> visualizar el proyecto en otro puerto
"start": "set PORT=3006 && react-scripts start",

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
