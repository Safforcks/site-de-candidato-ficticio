import styles from "../styles/agenda.module.css"

function Evento({data, local, evento, destaque}) {
    const [dia, mes, ano] = data.split("/")
    const nova_data = new Date(ano, mes - 1, dia)
    const hoje = new Date(2026, 4 - 1, 20) // 20/04/2026 - é só um teste, não data de hoje
    const diferenca  = nova_data - hoje 
    const dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24))
    const data_formatada = nova_data.toLocaleDateString("pt-BR")

        return (
            <div className={ destaque ? styles.card_proximo : styles.card}>
                <h3>{local}</h3>
                <p className={destaque ? styles.texto_proximo : styles.texto}>Tipo de evento: {evento}</p>
                <p className={destaque ? styles.texto_proximo : styles.texto}>{data_formatada} | <span>{dias === 1 ? `Falta ${dias} dia` : `Faltam ${dias} dias`}</span> </p>
                {destaque && <p className={styles.texto_proximo}>Próximo evento</p> }
            </div>
        )
}


export default function AgendaComponent(){
    
    const eventos = [
        {data: "23/05/2026", local: "Praia de Copacabana", tipo: "Caminhada"},
        {data: "25/04/2026", local: "Câmara Municipal do Rio de Janeiro", tipo: "Debate"},
        {data: "18/05/2026", local: "Associação de Moradores da Tijuca", tipo: "Reunião comunitária"},
        {data: "30/04/2026", local: "Parque do Flamengo", tipo: "Ação voluntária de limpeza"},
        {data: "21/04/2026", local: "Praça XV de Novembro", tipo: "Evento cultural"},
        {data: "28/05/2026", local: "Centro Cultural Banco do Brasil", tipo: "Encontro com a população"}
    ]

    const hoje = new Date(2026, 4 - 1, 20) // 20/04/2026 - é só um teste, não data de hoje
    const futuros = eventos.filter((evento) => {
        const [dia, mes, ano] = evento.data.split("/")
        const data_evento = new Date(ano, mes - 1, dia)
        return data_evento >= hoje
    })

    const proximo_evento = futuros.sort((a, b) => {
        const [dia_a, mes_a, ano_a] = a.data.split("/")
        const [dia_b, mes_b, ano_b] = b.data.split("/")
        const data_a = new Date(ano_a, mes_a - 1, dia_a)
        const data_b = new Date(ano_b, mes_b - 1, dia_b)
        return data_a - data_b
    })[0]

        return (
            <div className={styles.container} id="agenda">
                <h1 className={styles.titulo} >Eventos de campanha</h1>
                {eventos.map((evento, index) => (
                    <Evento 
                        key={index}
                        data={evento.data} 
                        local={evento.local} 
                        evento={evento.tipo} 
                        destaque={
                        proximo_evento &&
                        evento.data === proximo_evento.data 
                    }
                        />
                ))} 
            </div>
        )
    }

    
