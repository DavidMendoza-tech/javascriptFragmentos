{
    /* pasando fragmento a insertar en html con una variable
      se ejecuta la funcion al iniciar la paguina con DOMContentLoaded
    
    */
   let a = 99;
   let b = [1,3,4,6];
   let c = [b.length];
   var elemento = document.getElementById("boton");
   var fragmentoHtml = `<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                ${c}
                <span class="visually-hidden">unread messages</span>`
   document.addEventListener("DOMContentLoaded",function(){
    elemento.insertAdjacentHTML("beforeend",fragmentoHtml);
   });

}
{
    /* Boton clikeado  
    Se ejecuta la funcion al realizar un 
    click en el boton
    
    */
    let a = document.getElementById("boton-click"); //identificamos el boton.
    let contador = 0; //creamos un contador y lo inicializamos en cero.
    let insertar = document.getElementById("cont-click");//localizamos el lugar donde hacer la insercion
    
    
    
    //console.log(a);
    
    
    // agregamos un evento de escucha a la variable 'a';
    a.addEventListener("click",function(){

        //-------------- primera forma
        /*let d = [contador++];
        console.log(d.length);
        */

        //---------------- segunda forma

        contador++;
        //console.log(contador);
        let htmlClick = `<span id="click" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      ${contador}
                      <i class="fa-solid fa-cart-shopping"></i>`;
        insertar.insertAdjacentHTML("beforeend",htmlClick);

    });
    



}