const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                demandOption: true, //  aqu+i estamos obligando a que la opción base sea introducida forzosamente

            })
            .option('l',{
                alias: 'listar',
                type: 'boolean',
                default: false
            })
            .check((argv, options) =>{
                if(isNaN(argv.base)){
                    throw 'La base debe ser un número'
                } else{
                    return true
                }
            })
            .argv; 

console.clear()

console.log( argv )

console.log('base: yargs', argv.base, argv.listar)


crearArchivo ( argv.base, argv.listar ) // muy importrante pasar los argumentos aqui
.then(nombreArchivo => console.log(nombreArchivo, 'creado') )
.catch(err => console.log(err))


/* 

const [,,arg3 = 'base=5'] = process.argv // aqui nestamos desestructurando de forma que le decimos a js que estamos pasando 3 argumentos, de los cuales el tercero es el numero 3
const [ ,base = 5] = arg3.split( '=' ) // aqui estmos desestructurando el valor que viene del arg3 y estamos eliminado el caracter =  */

//console.log(base)

/* const base = 7; */