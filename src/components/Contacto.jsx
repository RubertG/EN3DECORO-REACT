import React from 'react'
import { Header } from './layout/Header'
import { motion } from 'framer-motion'

export const Contacto = ({ header }) => {
   return (
      <>
         <Header pageName={header} />
         <div className="container-cards">
            <motion.div
               className="card-contacto"
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
                  stiffness: 50
               }}
               viewport={{
                  once: true,
                  margin: "0px 0px -100px 0px",
               }}>
               <div className="card-img">
                  <img src="/img/icons8-gmail-logo-144.webp" alt="Icono de Gmail" />
               </div>
               <div className="card-header">
                  <h2>Email</h2>
               </div>
               <div className="card-body">
                  <p>en3decoro@gmail.com</p>
                  <button className="btn-vermas"><a href="mailto:en3decoro@gmail.com">Contactar</a></button>
               </div>
            </motion.div>

            <motion.div
               className="card-contacto"
               initial={{
                  opacity: 0,
                  y: 50,
               }}
               whileInView={{
                  opacity: 1,
                  y: 0,
               }}
               transition={{
                  type: "spring",
                  duration: .3,
                  stiffness: 50
               }}
               viewport={{
                  once: true,
                  margin: "0px 0px -100px 0px",
               }}>
               <div className="card-img">
                  <img src="/img/icono-telefono.webp" alt="Icono de telefono" />
               </div>
               <div className="card-header">
                  <h2>Telefono</h2>
               </div>
               <div className="card-body">
                  <p>+57 3132654198</p>
                  <button className="btn-vermas"><a
                     href="https://wa.me/573132654198?text=Hola!%20Vengo%20de%20la%20pagina%20web%20de%20En3decoro%20y%20me%20interesa%20uno%20de%20tus%20productos">Contactar</a></button>
               </div>
            </motion.div>

            <motion.div
               className="card-contacto"
               initial={{
                  opacity: 0,
                  x: 50,
               }}
               whileInView={{
                  opacity: 1,
                  x: 0,
               }}
               transition={{
                  type: "spring",
                  duration: .3,
                  stiffness: 50
               }}
               viewport={{
                  once: true,
                  margin: "0px 0px -100px 0px",
               }}>
               <div className="card-img">
                  <img src="/img/instagram-color-icon.webp" alt="Icono de Instagram" />
               </div>
               <div className="card-header">
                  <h2>Instagram</h2>
               </div>
               <div className="card-body">
                  <p>@en3decoro</p>
                  <button className="btn-vermas"><a href="https://www.instagram.com/en3decoro">Contactar</a></button>
               </div>
            </motion.div>
         </div>
      </>
   )
}
