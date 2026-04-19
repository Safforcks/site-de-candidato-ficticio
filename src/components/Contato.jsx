import { useState } from "react";
import styles from "../styles/contato.module.css"
import { TextField, Button } from '@mui/material';

export default function ContatoComponent(){

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [erro, setErro] = useState(
        {nome: false, email: false, mensagem: false}
    )
    const [sucesso, setSucesso] = useState(false)

    const submit = (e) => {
        e.preventDefault()

        const erros = {
            nome: !nome.trim(),
            email: !email.trim(),
            mensagem: !mensagem.trim()
        }

        const temErro = Object.values(erros).some(Boolean)

        if (temErro) {
            setSucesso(false)
            setErro(erros)
        } else {
            setSucesso(true)
            setErro({nome: false, email: false, mensagem: false})
            setNome("")
            setEmail("")
            setMensagem("")
        }
    }

    return(
        <div className={styles.container} id="contato">
            <form className={`${styles.formulario} ${sucesso ? styles.formulario_sucesso : ""}`} onSubmit={submit}>
                <h1 className={styles.titulo}>Contato</h1>
                {sucesso && (
                    <div className={styles.mensagem_sucesso}>
                        Mensagem enviada com sucesso!
                    </div>
                )}
                <TextField 
                label="Nome" 
                variant="outlined" 
                type="text" 
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                error={erro.nome}
                />
                <TextField 
                label="Email" 
                variant="outlined" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={erro.email}
                />
                <TextField
                label="Mensagem"
                multiline
                rows={8}
                variant="outlined"
                type="text"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}                
                error={erro.mensagem}
                />
                <Button type="submit" variant="outlined" color="primary" >
                Enviar
                </Button>
            </form>
        </div>
    )
}