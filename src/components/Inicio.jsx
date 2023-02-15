import { useContext } from "react";
import { Header } from "./layout/Header";
import { Contacto } from "./inicio/Contacto";
import { DataContext } from "../context/DataContext";
import { Sections } from "./inicio/Sections";
import { Spinner } from "./layout/Spinner";

export const Inicio = ({ header }) => {

   const { data } = useContext(DataContext)

   return (
      <>
         {
            data ? (
               <>
                  <Header pageName={header} />
                  <Sections data={data.pagInicio.principal} />
                  <Contacto data={data.pagInicio.contacto} />
               </>
            ) : (
               <Spinner />
            )
         }
      </>
   );
};
