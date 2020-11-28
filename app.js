const process=require('process')
const moduloTareas = require('./tareas')



let comando=process.argv[2]


switch (comando) {
    case "listar":
       let tareas=moduloTareas.leerjson()
   if (tareas.length===0){
console.log("listado vacio")

   }

   console.log("----------------------------")
   console.log("Este es tu listado de tareas")
   console.log("----------------------------")
        for (let i = 0; i < tareas.length; i++) {
            
            console.log("el titulo es : " +tareas[i].titulo+" : y se encuentra "+tareas[i].estado)
              
        }
        

        break;
        case "agregar":
   let titulo=process.argv[3]
   let estado=process.argv[4]
  var actualizacion= moduloTareas.escribirJSON(titulo,estado)
         moduloTareas.guardarJSON( actualizacion)
         console.log(actualizacion)
   break;
        
}