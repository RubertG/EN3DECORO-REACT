import './style/normalize.css'
import './style/nav-footer.css'
import './style/seccion-inicio.css'
import './style/contacto.css'
import './style/section-productos.css'
import { RooterPrincipal } from './rooter/RooterPrincipal'
import { DataContext } from './context/DataContext'
// import { useLoadData } from './hooks/useLoadProduct'
import data from '../public/json/main.json'

function App() {

   // const { data } = useLoadData()

   return (
      <DataContext.Provider value={{ data }}>
         <RooterPrincipal />
      </DataContext.Provider>
   )
}

export default App
