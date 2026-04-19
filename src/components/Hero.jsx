import styled from "styled-components";
import banner from "../imagens/banner.jpg";
import { Button } from "@mui/material";

const Secao = styled.section`
    width: 100%;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${banner});
    background-size: cover;
    background-position: center;
    padding: 60px 20px;
    padding-top: 100px;
    margin-top: 56px;
`
const Card = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    @media (min-width: 768px) {
        width: 400px; 
        flex-direction: row;   
    }
    @media (min-width: 992px) {
        width: 500px;
    }
    @media (min-width: 1100px) {
        width: 600px;
    }
`
const Slogan = styled.p`
    width: 100%;
    color: white;
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    text-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    letter-spacing: -0.5px;
    line-height: 1.3;
    animation: fadeInDown 0.8s ease;

    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @media (min-width: 1100px) {
        font-size: 42px;
    }
`

export default function HeroComponent(){
    
    return(
        <Secao>
            <Card>
            <Slogan>A prefeitura faz a cidade avançar</Slogan>
            <Button component="a" href="#propostas" variant="contained" color="success" style={{textAlign: "center"}}>Conheça as propostas</Button>
            </Card>
        </Secao>
    )
}