export default interface ListaUtenti {
    listaDati: Array<{
        id: number
        nome: string
        cognome: string
        sesso: string
    }>
}