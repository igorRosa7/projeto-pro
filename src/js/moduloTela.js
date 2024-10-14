export function iniciaEvento(element, event, callbackFunc) {
    const cadastraLivro = document.getElementById(element)
    cadastraLivro.addEventListener(event, callbackFunc)
}

export function pegaInputCadastro(id) {
    const resultado = document.getElementById(id).value
    return resultado
}
