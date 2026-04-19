import styles from "../styles/biografia.module.css"

export default function BiografiaComponent(){

    const imagem = "https://cm.be.uw.edu/wp-content/uploads/sites/6/2015/11/placeholder.jpg"

    const textos = [
        "Marco Madureira construiu sua trajetória com base no trabalho próximo das pessoas e no compromisso com o desenvolvimento do Rio de Janeiro. Nascido e criado na cidade, sempre esteve envolvido com a realidade local, acompanhando de perto os desafios da população e participando ativamente de iniciativas comunitárias. Sua vivência no dia a dia fez com que desenvolvesse um olhar prático e responsável sobre o que precisa ser melhorado.", 
        "Ao longo dos anos, Marco se dedicou a projetos voltados para infraestrutura urbana, mobilidade e valorização dos serviços públicos, sempre buscando soluções que realmente façam diferença na vida das pessoas. Seu trabalho é marcado pela escuta ativa, pelo diálogo e pela busca por resultados concretos, sem promessas vazias.", 
        "Na vida pessoal, é reconhecido pela postura simples, acessível e pelo respeito com todos. Acredita que uma gestão pública eficiente começa com planejamento, transparência e compromisso com a população.", 
        "Com essa visão, Marco Madureira segue com o propósito de fazer o Rio de Janeiro avançar de forma sustentável, garantindo mais oportunidades, qualidade de vida e um futuro melhor para todos."
    ]

    return (
        <div className={styles.container} id='biografia'>
            <h1 className={styles.titulo}>Biografia</h1>
            <div className={styles.card}>
                <img src={imagem} alt="Marco Madureira" className={styles.imagem_candidato} />
                <div className={styles.card_textos}>
                    {textos.map((texto, index) => (
                        <p key={index} className={styles.texto_candidato}>{texto}</p>
                    ))}
                </div>
            </div>
        </div>
        
    )
}