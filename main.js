import './src/assets/index.scss'
import { iniciaEvento, URL_API_LIVROS, pegaInputCadastro, chamadaAPI} from './src/js/modulos'

iniciaEvento("cadastrar", "click", iniciaCadastro)

async function iniciaCadastro(){
  const titulo = pegaInputCadastro("titulo")
  const descricao = pegaInputCadastro("descricao")
  const cadastrou = chamadaAPI(URL_API_LIVROS, titulo, descricao)
}
