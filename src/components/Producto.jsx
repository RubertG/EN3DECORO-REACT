import { useContext } from "react";
import { Header } from "./layout/Header";
import { CaractGenerales } from "./productos/CaractGenerales";
import { Section } from "./layout/Section";
import { ListaProductos } from "./productos/ListaProductos";
import { DataContext } from "../context/DataContext";
import { Spinner } from "./layout/Spinner";
import { useFilterProduct } from "../hooks/useFilterProduct"

export const Producto = ({ typeProduct = "jardineros" }) => {

   const { data } = useContext(DataContext)
   const nameProduct = typeProduct[0].toUpperCase() + typeProduct.slice(1).toLocaleLowerCase();
   const { result } = useFilterProduct(
      {
         data,
         condicion: (product) => product.tipo === typeProduct.toLowerCase(),
         nameProduct
      }
   )

   return (
      <>
         {
            result ? (
               <>
                  <Header pageName={"Productos / " + nameProduct} />
                  <Section title={nameProduct} position="left">
                     <ListaProductos listProduct={result} />
                     <CaractGenerales />
                  </Section>
               </>
            ) : (
               <Spinner />
            )
         }
      </>
   );
};
