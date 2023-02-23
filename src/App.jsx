import './style/normalize.css'
import './style/nav-footer.css'
import './style/seccion-inicio.css'
import './style/contacto.css'
import './style/section-productos.css'
import { RooterPrincipal } from './rooter/RooterPrincipal'
import { DataContext } from './context/DataContext'
import { useLoadProduct } from './hooks/useLoadProduct'

const URL = "../json/main.json"

function App() {

   const { data } = useLoadProduct(URL)

   return (
      <DataContext.Provider value={{ data }}>
         <RooterPrincipal />
      </DataContext.Provider>
   )
}

export default App
