/*
Definicion de Funciones
*/
{
    let  definicion = function(x){ //ingreso de parametros
        return x * x ;
    }    
    console.log(definicion(12));

}
{
    let hola = function(){
        return "hola mundo";
    }
    console.log(hola())
}
{
    let cadena = function (){
       return "hola mundo dos";
    }
    console.log(cadena());
}
{
    let variable = function(){
        let a = "Uno";
        console.log(a);
    }
    variable();
}
{
    // Accediendo desde fuera una variable

    let variableGlobal = 10;
    function mostar (){
        variableGlobal = 30;
        console.log(variableGlobal);
    }
    console.log("Llamada desde la variable",variableGlobal);
    //guardar la funcion en una variable
    let variable = mostar;
    console.log("Lamada desde una variable almacenado una funcion",variable());
    mostar();
    console.log("Llamada desde una funcion",variableGlobal);
}