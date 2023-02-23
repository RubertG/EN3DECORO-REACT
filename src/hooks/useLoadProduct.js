import { useEffect, useState } from "react"

const URL_DATA = "../json/main.json"

export function useLoadData() {
   const [data, setData] = useState()

   const conseguirDatos = async () => {
      console.log("hola")
      try {
         const rta = await fetch(URL_DATA)
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
      conseguirDatos
   }
} 