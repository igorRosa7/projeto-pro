import './src/assets/index.scss';
import {URL_API_LIVROS, chamadaGET, construirTabelaComLivros} from './src/js/moduloAPI';
import { iniciaEvento } from './src/js/moduloTela';

window.addEventListener("load", iniciarProcesso)
iniciaEvento("input-busca", "keyup", iniciarBusca)

let livros = []
console.log("contexto global!")

async function iniciarProcesso(){
    console.log("inciando processo!")
    livros = await chamadaGET(URL_API_LIVROS)
    construirTabelaComLivros(livros)
    
}

function iniciarBusca(){
    console.log("iniciarbusca")
    const valorParaBuscar = document.getElementById("input-busca").value
    const livrosFiltrados = livros.filter((livro => livro.title.includes(valorParaBuscar)))
    construirTabelaComLivros(livrosFiltrados)
}




  








 
 