/*
Crear una funcion anidada, que enliste un menu de ingredientes para un restaurante
donde la cantidad de ingredientes varien en funcion de los
clientes que tengan 

*/
const comenzales = function(cantComenzales){
    let menuIngredientes = function (cantidad,descrip,nombre){
        let cantIngtredientes = cantComenzales*cantidad;
        if (cantIngtredientes > 1) {
            descrip += "s";
        }
        console.log(`${cantIngtredientes} ${descrip} ${nombre}`);
    }
    menuIngredientes(0.25,"honza","sal")
}
console.log(comenzales(5))