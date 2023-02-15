import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Section({ children, title, position }) {
   return (
      <>
         {position === "left" ? (
            <section className="section-izquierda">
               <motion.h2
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
                  }}
                  className="section-title-left bg-left"
               >
                  {title}
               </motion.h2>
               {children}
            </section>
         ) : (
            <section className="section-derecha">
               <motion.h2
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
                  className="section-title-right bg-right"
               >
                  {title}
               </motion.h2>
               {children}
            </section>
         )}
      </>
   );
}
