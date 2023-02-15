import { Section } from "../layout/Section";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export function Sections({ data }) {

   return (
      <>
         <Section
            title={data.primerTitulo}
            position="left">
            <div className="section-body">
               <motion.div
                  initial={{
                     opacity: 0,
                     y: -50,
                  }}
                  whileInView={{
                     opacity: 1,
                     y: 0,
                  }}
                  transition={{
                     type: "spring",
                     duration: .3,
                     stiffness: 100
                  }}
                  viewport={{
                     once: true,
                     margin: "0px 0px -200px 0px",
                  }}
                  className="container-img img-derecha">
                  <img
                     src={data.primerImagen}
                     alt={data.primerAltImagen} />
               </motion.div>
               <motion.div
                  className="container-desc"
                  initial={{
                     opacity: 0,
                     x: -50,
                  }}
                  whileInView={{
                     opacity: 1,
                     x: 0,
                  }}
                  transition={{
                     type: "spring",
                     duration: .3,
                     stiffness: 100
                  }}
                  viewport={{
                     once: true,
                     margin: "0px 0px -200px 0px",
                  }}>
                  <p>
                     <strong>{data.primerDescripcion.split(" ")[0]}</strong> {data.primerDescripcion.split(" ").slice(1).join(" ")}
                  </p>
                  <button className="btn-vermas">
                     <NavLink to="/jardineros">Ver más</NavLink>
                  </button>
               </motion.div>
            </div>
         </Section>
         <Section
            title={data.segundoTitulo}
            position="right">
            <div className="section-body">
               <motion.div
                  className="container-img"
                  initial={{
                     opacity: 0,
                     x: -50,
                  }}
                  whileInView={{
                     opacity: 1,
                     x: 0,
                  }}
                  transition={{
                     type: "spring",
                     duration: .3,
                     stiffness: 100
                  }}
                  viewport={{
                     once: true,
                     margin: "0px 0px -300px 0px",
                  }}>
                  <img src={data.segundaImagen} alt={data.segundoAltImagen} />
               </motion.div>
               <motion.div
                  className="container-desc desc-derecha"
                  initial={{
                     opacity: 0,
                     y: -50,
                  }}
                  whileInView={{
                     opacity: 1,
                     y: 0,
                  }}
                  transition={{
                     type: "spring",
                     duration: .3,
                     stiffness: 100
                  }}
                  viewport={{
                     once: true,
                     margin: "0px 0px -200px 0px",
                  }}>
                  <p>
                     {
                        data.segundaDescripcion
                     }
                  </p>
                  <button className="btn-vermas">
                     <NavLink to="/jardineros">Ver más</NavLink>
                  </button>
               </motion.div>
            </div>
         </Section>
      </>
   )
}