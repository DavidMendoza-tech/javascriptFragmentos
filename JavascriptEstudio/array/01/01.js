{
    let valorInput = document.querySelector(".dato-envio");
    let inputRespuesta = document.querySelector(".respuesta");
    let btnEnvio = document.querySelector(".btnEnvio");
    let estructuraHtml = ` <div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Ingrese texto!</strong>.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`;
    let estructuraHtmlyes = `<div class="alert alert-success d-flex align-items-center" role="alert">
                               <strong>Registro exitoso!</strong>.
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>   
                            </div>
                            `;
    let listaItem = document.querySelector(".item-agregar");
    
    
    let arrayDatos = [];
    let texto = /^[A-Za-záéíóúÁÉÍÓÚñÑ]+$/;  // Solo letras y caracteres acentuados
   
    // creando un evento clcik
    
    btnEnvio.addEventListener("click",function(){ 

        // 1 validar campo vacio

        let valorCapturado = valorInput.value;
        if (valorCapturado === "" || !texto.test(valorCapturado)) {
            //alert("Ingrese datos");
            inputRespuesta.insertAdjacentHTML("beforeend",estructuraHtml);
           
        } else {
            // 2 console.log(valorInput.value);
        arrayDatos.push(valorCapturado);
       // console.log(arrayDatos);
        inputRespuesta.insertAdjacentHTML("beforeend",estructuraHtmlyes);
        let agregadoItem; 
        for (let i = 0; i < arrayDatos.length; i++) {
            const element = arrayDatos[i];
            agregadoItem =  ` <li class="list-group-item">${element}</li>`;
        }
        listaItem.insertAdjacentHTML("beforeend",agregadoItem);   
        document.querySelector(".dato-envio").value = "" ;    

        }
       
              
        
       // 3 agregar a los campos html


      

    });
   
}