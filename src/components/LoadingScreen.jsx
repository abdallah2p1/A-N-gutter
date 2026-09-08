import { motion } from 'framer-motion';
import logoImg from '../assets/Untitled design.png';

export default function LoadingScreen() {
  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-900 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] bg-blue-500/10 rounded-full blur-[100px]" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-10"
      >
        <motion.img 
          src={logoImg} 
          alt="A&N Gutters Logo" 
          className="h-20 md:h-28 w-auto object-contain drop-shadow-2xl"
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
        <div className="w-56 h-0.5 bg-slate-800 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 rounded-full"
            style={{ boxShadow: '0 0 10px rgba(96, 165, 250, 0.4)' }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
