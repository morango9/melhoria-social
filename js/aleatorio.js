const nomes = ["Fernanda" , "Giuliana", "Maria Eduarda" , "Marcelo" , "Amanda" , "Gustavo" , "Adrieli"];

export function aleatorio (lista){
    const posicao = Math.floor(math.random()* lista.length);
    return lista[posicao];
}

export const nome= aleatorio(nomes);