import { useEffect, useState } from "react"

export function useLoadProduct(url) {
   const [data, setData] = useState()

   const conseguirDatos = async () => {
      try {
         const rta = await fetch(url)
         const data = await rta.json()
         setData(data)
      } catch (e) {
         console.log(e)
      }
   }

   useEffect(() => {
      conseguirDatos()
   }, [])

   return {
      data,
      setData
   }
} 