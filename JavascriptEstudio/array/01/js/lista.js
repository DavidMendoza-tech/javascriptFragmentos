{
    let lista = ["Pera","Arroz","Cerveza"];
    let objetoHtml = document.querySelector('.card');
    let listasHtml = `<ul class="list-group list-group-flush">
              <li class="list-group-item">${lista[0]}</li>
              <li class="list-group-item">${lista[1]}</li>
              <li class="list-group-item">${lista[2]}</li>
            </ul>`;
    objetoHtml.insertAdjacentHTML("beforeend",listasHtml)
}
