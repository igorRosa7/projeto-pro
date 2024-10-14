import './src/assets/cadastro.scss'
// import './src/assets/_cores.scss'
import { URL_API_LIVROS, chamadaPOST} from './src/js/moduloAPI'
import { iniciaEvento, pegaInputCadastro } from './src/js/moduloTela'

iniciaEvento("cadastrar", "click", iniciaCadastro)

async function iniciaCadastro(){
  const titulo = pegaInputCadastro("titulo")
  const descricao = pegaInputCadastro("descricao")
  if(titulo.length == 0 || descricao.length == 0){
        document.getElementById("resultado").style.display = "block"
        document.getElementById("resultado").style.backgroundColor = "red"
        document.getElementById("resultado").innerText = "Complete o formulário"

  }else{
  await chamadaPOST(URL_API_LIVROS, titulo, descricao)
  document.getElementById("resultado").style.display = "block"
  document.getElementById("resultado").style.backgroundColor = "#1AAE9F";
  document.getElementById("resultado").innerText = "SUCESSO!"
    }
  
}
