import './src/assets/cadastro.scss';
import {iniciaEvento, URL_API_LIVROS, chamadaGET, construirTabelaComLivros} from './src/js/modulos';

iniciaEvento("oi", "click", imprimeLista)

async function imprimeLista(){
  const livros = await chamadaGET(URL_API_LIVROS)
  return construirTabelaComLivros(livros)
}



 
 