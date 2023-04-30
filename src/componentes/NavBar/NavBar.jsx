import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    const imglogo = "../src/assets/buenquilate.png"
  return (
      <header className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <img className='imglogo' src={imglogo} alt="Logo" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
              </button>
      <nav className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            Inicio
            </li>
          <li className="nav-item">
           Ofertas
            </li>
          <li className="nav-item">
            Productos
            </li>
          <li className="nav-item">
            Consultas
            </li>
          </ul>
        </nav>

          <CartWidget />
        </div>
    </header>
    ) 
}

export default NavBar;