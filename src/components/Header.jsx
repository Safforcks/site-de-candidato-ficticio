import { useState } from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';

const Header = styled.header`
    width: min(100%, 2000px);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
    background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
    color: white;
    position: fixed;
    top: 0;
    z-index: 1000;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(10px);
`
const Menu = styled(FiMenu)`   
    color: white;
    font-size: 28px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1);
        color: #888;
    }

    @media (min-width: 768px) {
        display: none;
    }
`
const Title = styled.p`
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.5px;
    color: white;
    margin: 0;
`
const Nav = styled.nav`
    width: 100%;
    display: ${props => props.abrirMenu ? "flex" : "none"};
    flex-direction: column;
    position: absolute;
    padding: 10px 15px;
    gap: 15px;
    top: 54px;
    left: 0;
    background: linear-gradient(135deg, #1a1a1a 0%);
    z-index: 1000;

    @media (min-width: 768px) {
        width: auto;
        display: flex;
        flex-direction: row;
        position: static;
        background: none;
    }
`
const Link = styled.a`
    color: white;
    text-decoration: none;

`

export default function HeaderComponent(){
    const [abrirMenu, setAbrirMenu] = useState(false)

    const links = [
        {href: "#biografia", nome: "Biografia"},
        {href: "#propostas", nome: "Propostas"},
        {href: "#agenda", nome: "Agenda"},
        {href: "#videos", nome: "Vídeos"},
        {href: "#contato", nome: "Contato"}
    ]

    return(
        <Header>
            <Menu  onClick={() => setAbrirMenu(!abrirMenu)} />
            <Title>Marco Madureira</Title>
                <Nav abrirMenu={abrirMenu}>
                    {links.map((link, index) => (
                        <Link key={index} href={link.href}>{link.nome}</Link>
                    ))}
                </Nav>
        </Header>
    )
}