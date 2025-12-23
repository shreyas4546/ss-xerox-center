import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { ArrowDown } from 'lucide-react';

const PaperScene = React.lazy(() => import('./PaperScene'));

const TypewriterText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: delay 
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.04
      }
    }
  };

  const charVariants = {
    hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 90,
      },
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span 
          key={i} 
          variants={wordVariants}
          className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0"
          aria-hidden="true"
        >
          {word.split("").map((char, j) => (
            <motion.span 
              key={j} 
              variants={charVariants} 
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Hero: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };

  return (
    <section className="relative pt-32 pb-12 md:pt-48 md:pb-24 px-6 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left z-20">
            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] font-serif font-medium text-slate-900 tracking-tight mb-8">
                <div className="block">
                  <TypewriterText text="Turn Print Work" delay={0.1} />
                </div>
                <div className="block mt-2 sm:mt-0">
                  <TypewriterText text="Into Profit." delay={0.8} className="italic text-slate-400" />
                </div>
            </h1>

            <motion.p 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: 1.2, duration: 0.8 }}
                variants={fadeInUp}
                className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10 font-light"
            >
                Professional grade xerography and bespoke design for modern business.
                Upload your files, get instant pricing, and let us handle the craft.
            </motion.p>

            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: 1.4, duration: 0.8 }}
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
                <Button 
                    className="w-full sm:w-auto h-16 text-lg px-12 hover:shadow-2xl hover:shadow-slate-900/40"
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    Upload & Get a Quote
                </Button>
                <button className="px-8 py-4 text-sm font-semibold text-slate-900 border-b border-slate-300 hover:border-slate-900 transition-colors">
                    How it works
                </button>
            </motion.div>
            
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeInUp}
               transition={{ delay: 1.6, duration: 1 }}
               className="mt-16 flex items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
            >
               {/* Simple Trust Logos */}
               <div className="h-6 w-20 bg-slate-300 rounded opacity-50 mix-blend-multiply"></div>
               <div className="h-6 w-20 bg-slate-300 rounded opacity-50 mix-blend-multiply"></div>
               <div className="h-6 w-20 bg-slate-300 rounded opacity-50 mix-blend-multiply"></div>
               <div className="h-6 w-20 bg-slate-300 rounded opacity-50 mix-blend-multiply hidden sm:block"></div>
            </motion.div>
        </div>

        {/* 3D Visual Content */}
        <div className="lg:col-span-5 relative h-[500px] md:h-[700px] w-full flex items-center justify-center">
             {/* Background decorative blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/5 blur-[100px] rounded-full z-0" />
             
             {/* 3D Scene Wrapper */}
             <div className="absolute inset-0 z-10">
                <Suspense fallback={
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="w-64 h-80 bg-slate-50/50 rounded-2xl animate-pulse" />
                    </div>
                }>
                    <PaperScene />
                </Suspense>
             </div>

             {/* Floating Elements (Badges) - Overlaying 3D */}
             <motion.div 
                animate={{ y: [-15, 5, -15] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-4 top-24 z-20 hidden md:block pointer-events-none"
             >
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border border-white/50 ring-1 ring-slate-100">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                        </div>
                        <div>
                            <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Status</div>
                            <div className="text-sm font-bold text-slate-900">Print Ready</div>
                        </div>
                    </div>
                </div>
             </motion.div>
             
             <motion.div 
                 animate={{ y: [15, -5, 15] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute left-0 bottom-32 z-20 hidden md:block pointer-events-none"
             >
                 <div className="bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
                     <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider">Total Est.</span>
                        <span className="text-lg font-serif italic">$245.00</span>
                     </div>
                     <div className="h-8 w-[1px] bg-slate-700 mx-1"></div>
                     <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                     </div>
                 </div>
             </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hidden md:flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest font-medium">Workflow</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;