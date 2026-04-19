import styles from "../styles/propostas.module.css"
import { Card, CardContent, CardMedia, Typography } from "@mui/material"

function Cards({icone, titulo, descricao, material}) {
    if (material) {
        return (
            <Card className={styles.card_a} style={{ backgroundColor: 'rgb(233, 225, 225)' }}>
                <CardMedia
                    component="img"
                    image={icone}
                    alt={titulo}
                    style={{width: "100px"}}
                />
                <CardContent style={{ padding: 0, textAlign: 'center' }}>
                    <Typography variant="h5" component="h2" style={{fontWeight: "bold"}} >
                        {titulo}
                    </Typography>
                    <Typography variant="body2" style={{fontSize: "17px"}} >
                        {descricao}
                    </Typography>
                </CardContent>
            </Card>
        )
    }

    return (
        <div className={styles.card_a}>
            <img className={styles.card_imagem_a} src={icone} alt={titulo} />
            <h2 className={styles.card_titulo_a}>{titulo}</h2>
            <p className={styles.card_descricao_a}>{descricao}</p>
        </div>
    )
}

export default function PropostasComponent(){

    const cards_a = [
        {
            icone: "https://img.icons8.com/?size=100&id=llNkUrYMOj2A&format=png&color=000000", 
            titulo: "Mobilidade urbana inteligente", 
            descricao: "Melhorar o transporte público com mais integração entre ônibus, metrô e VLT, tornando os deslocamentos mais rápidos e eficientes no dia a dia.",
            material: false
        },
        {
            icone: "https://img.icons8.com/?size=100&id=AXSzhThsghDU&format=png&color=000000", 
            titulo: "Segurança pública com tecnologia", 
            descricao: "Investir em câmeras inteligentes e monitoramento em tempo real para ajudar na prevenção de crimes e aumentar a sensação de segurança da população.",
            material: false
        },
        {
            icone: "https://img.icons8.com/?size=100&id=QzXmSAP6522k&format=png&color=000000",
            titulo: "Mais acesso à saúde", 
            descricao: "Ampliar o número de unidades de atendimento e diminuir o tempo de espera por consultas e exames.",
            material: false
        },
        {
            icone: "https://img.icons8.com/?size=100&id=vo1XcGH8QAag&format=png&color=000000", 
            titulo: "Educação melhor para todos", 
            descricao: "Fortalecer as escolas públicas com mais tecnologia e valorização dos professores, garantindo um ensino melhor para todos.",
            material: false
        },
        {
            icone: "https://img.icons8.com/?size=100&id=uKq70aYmEQbP&format=png&color=000000", 
            titulo: "Espaços públicos mais bem cuidados", 
            descricao: "Reformar praças, parques e áreas de lazer, criando ambientes mais agradáveis para convivência e bem-estar.",
            material: false
        },
        {
            icone: "https://img.icons8.com/?size=100&id=KvCG2Nnfdz1J&format=png&color=000000", 
            titulo: "Mais oportunidades de trabalho", 
            descricao: "Apoiar pequenas empresas e incentivar novos negócios, movimentando a economia local e gerando mais empregos.",
            material: false
        }    
    ]

    const cards_b = [
        "Mais ciclovias pela cidade", "Cidade mais sustentável", "Valorização da cultura local", "Iluminação pública mais moderna", "Turismo mais forte", "Serviços públicos mais digitais", "Apoio às comunidades", "Coleta de lixo mais eficiente"
    ]

    return (
        <div className={styles.container} id="propostas">
            <h1 className={styles.titulo} >Propostas</h1>
            <div className={styles.bloco_a}>
                {cards_a.map((card, index) => (
                    <Cards
                        key={index}
                        icone={card.icone}
                        titulo={card.titulo}
                        descricao={card.descricao}
                        material={card.material}
                    />
                ))}
            </div>
            <div className={styles.bloco_b}>
                {cards_b.map((card, index) => (
                    <div key={index} className={styles.card_b}>
                        <p className={styles.card_titulo_b}>{card}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}