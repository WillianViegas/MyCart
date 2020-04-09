var containerElement = document.querySelector('#app');
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var compras = JSON.parse(localStorage.getItem('compras')) || [];

  function renderizarCompras(){
    //cria a div com o estilo COMO LISTA

    listElement.innerHTML = '';

    for(compra of compras){
      var boxElement = document.createElement('li');
    //boxElement.style.width = '90%';
   // boxElement.style.height = '150px';
    boxElement.style.border = '5px solid black';
    boxElement.style.borderRadius = '5%';
    boxElement.style.backgroundColor = 'gold';
    boxElement.style.display = 'block';
    boxElement.style.marginTop = 20;
    boxElement.style.overflow = 'hidden';
    boxElement.style.textAlign = 'center';

    
    //adicionando imagem
   /* var imgElement = document.createElement('img');
    imgElement.setAttribute('src', 'calmaPatron.jpg');
    imgElement.style.width = '20%';
    imgElement.style.height = 'auto';
    imgElement.style.border ='5px solid black';
    
    //inserindo imagem na div
    boxElement.appendChild(imgElement);*/
    
    //inserindo o link que foi recebido
    var linkElement = document.createElement('a');
    linkElement.setAttribute('href',compra);
    
    //estilo do link
    var textElement = document.createTextNode(compra);
    linkElement.appendChild(textElement);
    linkElement.style.color = 'black';
    //linkElement.style.border = '5px solid black';
    linkElement.style.padding = '5px';
    boxElement.appendChild(linkElement);
    
    //botão fechar

    var closeElement = document.createElement('a');

    closeElement.setAttribute('href', '#');

    //verifica a posição do todo na lista
    var pos = compras.indexOf(compras);

    closeElement.setAttribute('onclick', 'deletaCompra('+pos+')');

    boxElement.appendChild(closeElement);
    
    //adiciona ela na div app
    listElement.appendChild(boxElement);
    containerElement.appendChild(listElement);
    }
    }

renderizarCompras();


function addCompra(){
  var compraText = inputElement.value;
  console.log(compraText);

  compras.push(compraText);
  inputElement.value = '';
  renderizarCompras();
  saveToStorage();
}


function deletaCompra(pos){
  compras.splice(pos, 1);
  renderizarCompras();
  saveToStorage();
}

function saveToStorage(){

  localStorage.setItem('compras', JSON.stringify(compras));
}


function Nova(){
  window.open("compras.html","Carrinho",windowFeatures);
  }
  