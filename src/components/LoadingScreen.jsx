import { motion } from 'framer-motion';
import logoImg from '../assets/f2c1c379-c95d-4626-919d-88c4132c3b87 (2).webp';

export default function LoadingScreen() {
  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] bg-blue-50 rounded-full blur-[100px]" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-10"
      >
        <motion.img 
          src={logoImg} 
          alt="A&N Gutters Logo" 
          className="h-28 md:h-36 lg:h-44 w-auto object-contain drop-shadow-xl"
          animate={{ 
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Minimalist Progress Bar */}
        <div className="w-56 h-1 bg-gray-100 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
