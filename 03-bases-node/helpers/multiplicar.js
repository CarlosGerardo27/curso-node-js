const fs = require('fs');
const colors = require('colors')

const cyan = colors.cyan
const brightBlue = colors.brightBlue
const green = colors.green
const brightYellow = colors.brightYellow

const  crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try{
        
        let salida = ''
        let consola = ''
        
        for(let i = 1; i <= hasta   ; i++){
            salida += `${ base } x ${ i } = ${ base * i } \n` ; 
            consola += `${brightYellow(base) } x ${brightBlue (i) } = ${green(base * i)} \n` ; 
        }
        
        if(listar){
            console.log('===========================.'.yellow)
            console.log(   'Tabla del: '.cyan, cyan(base)  )
            console.log('==========================='.yellow)
            console.log(consola)
        }
        

        
        
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida );

        
        return  `tabla-${base}.txt`
    } catch(error){
        throw error;
    }
}

module.exports = {
    crearArchivo
}


/* 
methood: fs.writeFile
 
fs.writeFile(`tabla-${ base }.txt`, salida , (err)=>{
    if (err) throw err;

    console.log("tabla-5.txt creada")
}) */