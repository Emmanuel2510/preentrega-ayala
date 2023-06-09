import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    const imglogo = "../src/assets/buenquilate.png"
  return (
      <header className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link to={"/"}>
            <img src={imglogo} alt="Logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
              </button>
      <nav className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            Inicio
            </li>
          <li className="nav-item">
           <NavLink to={"/categoria/2"}> Ofertas </NavLink>
            </li>
          <li className="nav-item">
          <NavLink to={"/categoria/3"}> Productos </NavLink>
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