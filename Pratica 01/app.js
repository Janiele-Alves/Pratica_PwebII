const buscarGatinhos = (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.thecatapi.com/v1/images/search?limit=10');
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const cats = JSON.parse(xhr.responseText);
                cats.forEach(cat => {
                 
                    const divInfo = document.createElement('div');
                    const img = document.createElement('img');
                    const pId = document.createElement('p');
                    const pTipo = document.createElement('p');

                    img.src = cat.url;
                    pId.textContent = `ID: ${cat.id}`;
                    pTipo.textContent = `Tipo de Foto: ${cat.type}`;

                    divInfo.appendChild(pId);
                    divInfo.appendChild(pTipo);

                    divInfo.classList.add('info-container');
                  
                    document.querySelector("#gatinhos").appendChild(img);
                    document.querySelector("#gatinhos").appendChild(divInfo);
                });

            } else {
                alert('Erro na requisição');
            }
        }
    }
    xhr.send();
}
const btnMostrar = document.querySelector("#mostrarGatinhos");
btnMostrar.addEventListener("click", buscarGatinhos);