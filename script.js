// Escreva um programa em javascript para simular um baralho de cartas. 
// O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e 
// as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. 
// Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. 
// Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. 
// O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

const cards = []
let options 
do {
    options = prompt(`
    Qunatidade de cartas no baralho: ${cards.length}
    1 - Adicionar uma carta
    2 - Puxar uma carta
    3 - Sair`)

    switch (options) {
        case '1':
            const nameCard = prompt("insira o nome da carta:")
            cards.unshift(nameCard)
            break
        case '2':
            if (cards.length > 0){
                const remCard = cards.shift()
                alert(`Você puxou a carta ${remCard}`)
            }else{
                alert("Não há cartas")
            }
            break
        case '3':
            alert("Saindo...")
            break
        default:
            alert("Opção inválida. Tente novamente.")
    }
}while(options !== "3")