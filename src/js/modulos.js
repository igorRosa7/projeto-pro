export const URL_API_LIVROS = "https://api-aula.up.railway.app/livros"

export function iniciaEvento(element, event, callbackFunc){
    const cadastraLivro = document.getElementById(element)
    cadastraLivro.addEventListener(event,callbackFunc)
}


export function pegaInputCadastro(id){
    const resultado = document.getElementById(id).value
    return resultado
}


export async function chamadaAPI(url,titulo, descricao){
    const settings =  {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            title: titulo,
            description: descricao
        })
} 

    const response = await fetch(url,settings)
    const Response = response.json()
    return Response
    
}
