import './style.scss'
import { iniciaEvento, URL_API_LIVROS, pegaInputCadastro, chamadaAPI } from './src/js/modulos'
import { urlAlphabet } from 'nanoid'

iniciaEvento("cadastrar", "click", iniciaCadastro)

function iniciaCadastro(){
  const titulo = pegaInputCadastro("titulo")
  const descricao = pegaInputCadastro("descricao")
  const cadastrou = chamadaAPI(URL_API_LIVROS, titulo, descricao)

 
}
