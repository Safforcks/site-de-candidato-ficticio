
import HeaderComponent from './components/Header'
import HeroComponent from './components/Hero'
import BiografiaComponent from './components/Biografia'
import PropostasComponent from './components/Propostas'
import AgendaComponent from './components/Agenda'
import VideoComponent from './components/Videos'
import ContatoComponent from './components/Contato'
import FooterComponent from './components/Footer'

export default function App() {
  return(
    <div>
      <HeaderComponent />
      <HeroComponent />
      <BiografiaComponent/>
      <PropostasComponent/>
      <AgendaComponent/>
      <VideoComponent/>
      <ContatoComponent/>
      <FooterComponent/>
    </div>
  )
}
