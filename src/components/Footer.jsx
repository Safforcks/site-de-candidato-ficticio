import styles from "../styles/footer.module.css"

export default function FooterComponent(){

    const redes = [
        {
            icone: "https://img.icons8.com/?size=100&id=59813&format=png&color=FFFFFF", 
            link: "https://www.instagram.com/", 
            nome: "Instagram"
        },
        {
            icone: "https://img.icons8.com/?size=100&id=118466&format=png&color=FFFFFF", 
            link: "https://www.facebook.com/?locale=pt_BR", 
            nome: "Facebook"
        },
        {
            icone: "https://img.icons8.com/?size=100&id=62852&format=png&color=FFFFFF", 
            link: "https://youtube.com/", 
            nome: "Youtube"
        },
        {
            icone: "https://img.icons8.com/?size=100&id=01GWmP9aUoPj&format=png&color=FFFFFF", 
            link: "https://x.com/?lang=pt", 
            nome: "X"
        }
        
    ]

    return (
        <footer className={styles.container}>
            <div className={styles.card_1}>
                <div className={styles.icones}>
                    {redes.map((rede, index) => (
                        <a key={index} href={rede.link} target="_blank" rel="noopener noreferrer"
                        className={styles.links}
                        ><img src={rede.icone} alt={rede.nome} style={{width: "45px"}} />{rede.nome}</a>
                    ))}
                </div>
                <div className={styles.informacoes}>
                    <p className={styles.texto}><img src="https://img.icons8.com/?size=100&id=60688&format=png&color=FFFFFF" alt="email" className={styles.imagens_info} />  marcomadureira@gmail.com</p>
                    <p className={styles.texto}><img src="https://img.icons8.com/?size=100&id=78382&format=png&color=FFFFFF" alt="telefone" className={styles.imagens_info} /> (21) 9999-9999</p>
                    <p className={styles.texto}><img src="https://img.icons8.com/?size=100&id=59830&format=png&color=FFFFFF" alt="enderenço" className={styles.imagens_info} />  Rua Afonso Cavalcanti, 455 – Cidade Nova</p>
                </div>
            </div>
            <div className={styles.card_2} >
                <p className={styles.copyright}>Todos direitos reservados</p>
                <p className={styles.copyright}>© 2026 - Rainer Sacks</p>
            </div>
        </footer>
    )
}