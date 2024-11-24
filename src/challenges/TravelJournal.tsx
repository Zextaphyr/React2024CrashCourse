import './TravelJournal.css'
import ReactLogo from '../assets/react.svg'

const data = [
  {
    img: "https://www.guiadasemana.com.br/contentFiles/image/opt_w720h445/2018/08/FEA/57772_shutterstock-216070774-dmitry-islentev-cristo-redentor.jpg",
    name: "Cristo Redentor",
    location: "Rio de Janeiro",

  }
]

export default function TravelJournal(){
  return (
   <header>
      <img src={ReactLogo} alt="" alt="React Logo as Travel Journal "/>
      <h1>My Travel Journal</h1>
    </header> 
    
  )
}

function Cartão({img, name, location, datas, desc}){
  return <article>
    <img src={img} alt="" />
    <div className="content">
      <span className="location">
        <span>{location}</span>
        <a href={`https://www.google.com.br/maps/place/${location.replaceAll(" ","+")}`}>Veja no google maps</a>
        <h3 className="name">{name}</h3>
        <span className="datas">
          <span className="de">{datas[0]}</span>
          <span className="ate">{datas[1]}</span>
        </span>
        <span className="desc">
          {desc}
        </span>
      </span>
    </div> 
  </article>

}
