const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarDadosGlobais(){
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-texto')
    //paragrafo.innerHTML = Você sabia que o mundo tem ${dados.total_pessoas_mundo}
}
visualizarDadosGlobais()