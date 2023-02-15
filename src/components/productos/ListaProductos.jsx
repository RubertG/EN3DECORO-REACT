import { NavLink } from "react-router-dom";
import { CardProducto } from "./CardProducto";

export function ListaProductos({ listProduct }) {

   return (
      <div className="container-productos">
         {listProduct.map((producto) => {
            return (
               <NavLink
                  to={"/" + producto.tipo + "/" + producto.id}
                  className="card"
                  key={producto.id}
               >
                  <CardProducto producto={producto} />
               </NavLink>
            );
         })}
      </div>
   )
}