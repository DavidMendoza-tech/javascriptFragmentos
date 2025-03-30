{

    let urlatributo = document.getElementById("home");
   // urlatributo.setAttribute('href','home.html');
    urlatributo.addEventListener("click",function(){
        urlatributo.setAttribute('href','home.html');
        setTimeout(quitarUrl,200);


    });
    function quitarUrl(){
        urlatributo.removeAttribute('href','home.html');
        
    }



}