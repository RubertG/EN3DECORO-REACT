export function CardProducto({ producto }) {

   const altImg = `${producto.nombre} de tipo ${producto.tipo} realizado por En3Decoro`

   return (
      <>
         <div className="card-img">
            <img src={producto.img[0]} alt={altImg} />
         </div>
         <div className="card-body">
            <h4>{producto.nombre}</h4>
            <p>{producto.colores}</p>
         </div>
         <div className="card-footer">
            <p>
               Precio: <span>${producto.precio}</span>
            </p>
         </div>
      </>
   )
}