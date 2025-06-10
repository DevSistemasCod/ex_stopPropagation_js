function configurar() {
  let caixa = document.getElementById('caixa');
  let meuBotao = document.getElementById('meuBotao');

  //prettier-ignore
  if ((caixa instanceof HTMLDivElement) && (meuBotao instanceof HTMLButtonElement)) {
    caixa.addEventListener('click', () => {
      caixa.style.backgroundColor = 'green';
    });

    meuBotao.addEventListener('click', (evento) => {
      evento.stopPropagation();
      console.log("O botão foi pressionado!")
    });
  }
}

document.addEventListener('DOMContentLoaded', configurar);
