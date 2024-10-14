import './src/assets/cadastro.scss'
import { URL_API_LIVROS, chamadaPOST} from './src/js/moduloAPI'
import { iniciaEvento, pegaInputCadastro } from './src/js/moduloTela'

iniciaEvento("cadastrar", "click", iniciaCadastro)

async function iniciaCadastro(){
  const titulo = pegaInputCadastro("titulo")
  const descricao = pegaInputCadastro("descricao")
  const cadastrou = chamadaPOST(URL_API_LIVROS, titulo, descricao)
}
