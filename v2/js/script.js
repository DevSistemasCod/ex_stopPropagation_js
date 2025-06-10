function configurar() {
  let caixa = document.getElementById('caixa');
  let adicionarBtn = document.getElementById('adicionarBtn');
  let editarBtn = document.getElementById('editarBtn');
  let removerBtn = document.getElementById('removerBtn');
  //document.querySelectorAll('.botao'): Retorna uma NodeList com os elementos 
  // do DOM que possuem a classe CSS .botao. 
  // Uma NodeList é uma coleção de nós (elementos DOM) semelhante a um array, 
  // mas não é um array verdadeiro. 
  // Ela tem algumas limitações em comparação com arrays.
  //O operador de espalhamento (spread operator) [...NodeList] é usado 
  // para converter a NodeList em um array real do JavaScript.
  let botoes = [...document.querySelectorAll('.botao')];

  //prettier-ignore
  if ((caixa instanceof HTMLDivElement) && (adicionarBtn instanceof HTMLButtonElement)
  && (editarBtn instanceof HTMLButtonElement)  && (removerBtn instanceof HTMLButtonElement)) {
    caixa.addEventListener('click', () => {
      caixa.style.backgroundColor = 'green';
    });

    //método map está sendo usado para iterar sobre cada elemento do array botoes
    botoes.map((evento) =>{
      evento.addEventListener('click', (event) =>{
        event.stopPropagation();
      })
    })
  }
}

document.addEventListener('DOMContentLoaded', configurar);
