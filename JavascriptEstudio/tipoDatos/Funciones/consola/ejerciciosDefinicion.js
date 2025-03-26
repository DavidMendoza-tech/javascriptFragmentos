{
// mostrar sumas de dos numeros llamada desde una funcion
//pasando argunmentos con un dato de retorno

let miFuncion = function(a,b){
    let suma = a + b;
    return suma;
}
    console.log(miFuncion(2,5));
}

{
    let miFuncion1 = function (a,b,c){
        let x = a*b+c;
        return x;
    }
    console.log(miFuncion1(3,5,6));
}
{
    let potencia = function(base, exponente){
        let resultado = 1;
       for (let index = 0; index < exponente; index++) {
        resultado = resultado * base; 
        
       }
       return resultado;
    }
    console.log(potencia(2,5))
}
{
    function hola(){
        console.log("hola") ;
    }
    hola();
}