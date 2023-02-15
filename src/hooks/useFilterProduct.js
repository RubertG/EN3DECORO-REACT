import { useEffect, useState } from "react";

export function useFilterProduct(data, condicion, typeProduct = null) {

   const [result, setResult] = useState();
   const [first, setFirst] = useState()

   useEffect(() => {
      filterProducts(condicion)
   }, [typeProduct, data]);

   const filterProducts = (condicion) => {
      if (data) {
         const productFilter = data.pagProductos.productos.filter(condicion);
         setResult(productFilter);
         setFirst(productFilter[0])
      }
   }

   return {
      result,
      first,
      filterProducts,
      setResult,
      setFirst
   }
}