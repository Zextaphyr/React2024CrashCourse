// React fun facts:
// uma aplicação introdutória de react para uma página simples de lista de fatos sobre react
//
import ReactLogo from '../assets/react.svg';
import "./style.css";
import {Fragment} from 'react'

export default function ReactFunFacts () {
  return <Fragment>
          <Header/>
          <MainContent/>
          <Footer/>
        </Fragment>
}

const Header = () => <header>
      <div className="title">
        <img src={ReactLogo} id="ReactLogo"/>
        <span>React Facts</span>
      </div>
      <nav>
        <ul>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>

const MainContent = () => <main>
      <h1>Reasons I am excited to keeping using React !</h1>
      <ol>
        <li>Was first released in 2013</li>
        <li>Criado por Jordan Walke</li>
        <li> Na verdade pagou minha viagem para europa haha</li>
      </ol>
    </main>   
 
const Footer = () => <footer>
      <small>
© 2024 Zextaphyr development. Todos os direitos reservados
      </small>      
    </footer>

