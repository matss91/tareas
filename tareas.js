let fs=require('fs')

let moduloTareas={
    archivo:'./tareas.json',
leerjson: function (){
let listaDeTareas=fs.readFileSync(moduloTareas.archivo,'utf-8')
return JSON.parse(listaDeTareas)
},



escribirJSON:function(titulo,estado){
let nuevaTarea={
titulo:titulo,
estado:estado,
}

let tareasAnteriores=moduloTareas.leerjson();
tareasAnteriores.push(nuevaTarea)
return tareasAnteriores
},
guardarJSON: function(info){

let nuevoJSON=JSON.stringify(info)
fs.writeFileSync(moduloTareas.archivo,nuevoJSON,'utf-8')


}
}
module.exports=moduloTareas

