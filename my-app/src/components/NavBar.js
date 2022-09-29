import logo from "../logo.svg"
import '../index.css';

export default function App() {
  return (
      <header className="header-flex">
        <img src={logo} alt="logo" className="img-logo"/>
        <h1 className="h1-header">REACT</h1>
        <div className="opciones">
          <span><a href="##" className="href-header">Información</a></span>
          <span><a href="##" className="href-header">Contacto</a></span>
        </div>
      </header>
  );
}
