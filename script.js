var cachorros = [{ "nome": "Thor", "imagem": "dog1" }, { "nome": "Zeca", "imagem": "dog2" }, { "nome": "Zeus", "imagem": "dog3" }, { "nome": "Pingo", "imagem": "dog4" }];

var gatos = [{ "nome": "Dunga", "imagem": "cat1" }, { "nome": "Mika", "imagem": "cat2" }, { "nome": "Conan", "imagem": "cat3" }, { "nome": "Messi", "imagem": "cat4" }];

var select_animais = document.getElementById('select_animais');
var container = document.getElementById('container');
var p = document.getElementById('nome');

select_animais.addEventListener('input', listarAnimais);
container.addEventListener('mouseover', mostrarNome);
container.addEventListener('mouseout', limparNome);

function animal(animal_name) {
  for (let i = 0; i < animal_name.length; i++) {
    var imagem = document.createElement('img')
    imagem.src = 'img/' + animal_name[i].imagem + '.jpg';
    imagem.alt = animal_name[i].nome;
    container.append(imagem);
  }
}

function listarAnimais() {
  limparDivContainer();
  if (select_animais.value == "dog") {
    animal(cachorros);
  } else if (select_animais.value == "cat") {
    animal(gatos);
  }
}

function mostrarNome(e) {
  var nomeAnimal = e.target.alt;
  p.innerText = nomeAnimal;
}

function limparNome() {
  p.innerText = "";
}

function limparDivContainer() {
  var elemento = document.querySelector("#container");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}