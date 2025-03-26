{
    const humus = function(factor){//primera funcion, con un solo parametro
        const ingredientes = function(cantidad, unidad, nombre){
            let cantidadIngrediente = cantidad * factor;
            if (cantidadIngrediente > 1) {
                    unidad += "s";
                
            }
            console.log(`${cantidadIngrediente} ${unidad} ${nombre}`)
        };
        ingredientes(1, "lata", "garbanzos");
        ingredientes(0.25, "taza", "tahini");
        ingredientes(0.25, "taza", "jugo de limón");
        ingredientes(1, "clavo", "ajo");
        ingredientes(2, "cucharada", "aceite de oliva");
        ingredientes(0.5, "cucharadita", "comino");
    };
    console.log(humus(5));
};
// Alcane anidado
// crear una lista de ingredientes, y la cantidad dependera del numero de comensales
