import { motion } from 'framer-motion';

interface AnimatedCardProps {
  children: React.ReactNode;
  index: number;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, index }) => {
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={variants}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      style={{ margin: '0 15px' }}
    >
      {children}
    </motion.div>
  );
};
