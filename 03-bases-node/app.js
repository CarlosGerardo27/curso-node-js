const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')



console.log('base: yargs', argv.base, argv.listar)

console.clear()
crearArchivo ( argv.base, argv.listar, argv.h ) // muy importrante pasar los argumentos aqui
.then(nombreArchivo => console.log(nombreArchivo, 'creado') )
.catch(err => console.log(err))


/* 

const [,,arg3 = 'base=5'] = process.argv // aqui nestamos desestructurando de forma que le decimos a js que estamos pasando 3 argumentos, de los cuales el tercero es el numero 3
const [ ,base = 5] = arg3.split( '=' ) // aqui estmos desestructurando el valor que viene del arg3 y estamos eliminado el caracter =  */

//console.log(base)

/* const base = 7; */