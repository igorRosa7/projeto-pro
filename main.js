import './src/assets/index.scss';
import {URL_API_LIVROS, chamadaGET, construirTabelaComLivros} from './src/js/moduloAPI';
import { iniciaEvento } from './src/js/moduloTela';

window.addEventListener("load", iniciarProcesso)
iniciaEvento("input-busca", "keyup", iniciarBusca)

let livros = []

function delay(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve()
       }, ms);


    })
}

async function iniciarProcesso(){
  document.getElementById("loading").style.display = "block"
  await delay(3000)
  livros = await chamadaGET(URL_API_LIVROS)
  construirTabelaComLivros(livros)
  document.getElementById("loading").style.display = "none"
    
}

function iniciarBusca(){
    const valorParaBuscar = document.getElementById("input-busca").value
    const livrosFiltrados = livros.filter((livro => livro.title.includes(valorParaBuscar)))
    construirTabelaComLivros(livrosFiltrados)
}




  








 
 