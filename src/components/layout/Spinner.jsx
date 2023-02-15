import { motion } from "framer-motion"

export function Spinner() {
   return (
      <div className="container-loader">
         <motion.div
            animate={{
               scale: [1, 2, 2, 1],
               rotate: [0, 0, 270, 0],
               borderRadius: ["20%", "30%", "50%", "20%"],
            }}
            transition={{
               duration: 2,
               times: [0, 0.4, 0.6, 0.9],
               repeat: Infinity,
               repeatDelay: 0.4,
            }}>
         </motion.div>
      </div>
   )
}