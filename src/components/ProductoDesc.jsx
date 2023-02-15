import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../context/DataContext'
import { useFilterProduct } from '../hooks/useFilterProduct'
import { Header } from './layout/Header'
import { Section } from './layout/Section'
import { Spinner } from './layout/Spinner'

export const ProductoDesc = () => {

   const { data } = useContext(DataContext)
   const idProducto = useParams().id
   const { first } = useFilterProduct(data, (p) => p.id === idProducto)

   return (
      <>
         {
            first ? (
               <>
                  <Header pageName={first.nombre} />
                  <Section
                     title={first.nombre}
                     classSection="section-derecha"
                     classTitle="section-title-left bg-left animar-bajando">
                     <div className="container-imgs">
                        {
                           first.img && (
                              first.img.map(url => {
                                 return (
                                    <div className="img" key={url}>
                                       <img src={url} alt={`${first.nombre} de tipo ${first.tipo} realizado por En3Decoro`} />
                                    </div>
                                 )
                              })
                           )
                        }
                     </div>
                     <div className='container-info'>
                        <h2>Descripción</h2>
                        <p>{first.descripcion}</p>
                        <p>
                           <strong>Colores:</strong> {first.colores}
                        </p>
                        <div className="info-footer">
                           <p>
                              Precio: <span>${first.precio}</span>
                           </p>
                           <div>
                              <a
                                 href={"https://wa.me/573132654198?text=Hola!%20Me%20interesa%20el%20" + first.nombre}
                                 target='_blank'>
                                 ¡Pedir ya!
                              </a>
                           </div>
                        </div>
                     </div>
                  </Section>
               </>
            ) : (
               <Spinner />
            )
         }
      </>
   )
}

