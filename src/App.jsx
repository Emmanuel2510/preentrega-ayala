
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/NavBar/navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'


function App() {


  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Muchas Gracias"}/>
    </>
  )
}

export default App
