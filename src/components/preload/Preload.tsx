import React from 'react'
import "./Preload.scss";
import { motion } from "framer-motion";
function Preload() {
    return (
        <motion.div initial={{ height: '100%' }}
        animate={{ height: 0 }}
        transition={{ ease: "easeOut", duration: 3 }} className='preload-container'>
            
        </motion.div>
    )
}

export default Preload
