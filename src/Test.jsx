import React from 'react';
import { motion } from 'framer-motion';

function Test() {
  const items = ['item1', 'item2', 'item3', 'item4'];

  const itemVariants = {
    visible: { opacity: 1, x: 100 ,
        transition: { staggerChildren: 5 }
    },
    hidden: { opacity: 0 },
  };

  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={itemVariants}>
        {items.map((item) => (
          <motion.li variants={itemVariants} key={item}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Test;
