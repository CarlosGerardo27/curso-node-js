const argv = require('yargs')
.option('b',{
    alias: 'base',
    type: 'number',
    demandOption: true, //  aqu+i estamos obligando a que la opción base sea introducida forzosamente
    describe: "es el número por el que se multiplicará"

})
.option('h',{
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: "es el limite hasta el cual se multiplicara"

})
.option('l',{
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'De incluirlo se imprimira en la consola el contenido de la multiplicación'
})
.check((argv, options) =>{
    if(isNaN(argv.base)){
        throw 'La base debe ser un número'
    } else{
        return true
    }
})
.argv; 

module.exports = argv