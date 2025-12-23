import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { ArrowDown } from 'lucide-react';

const AbstractGraphic = () => (
  <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center select-none pointer-events-none">
    {/* Abstract Paper Stack Graphic using CSS shapes */}
    <div className="relative w-64 h-80 md:w-80 md:h-96 perspective-1000">
      {/* Background Sheet */}
      <motion.div 
        animate={{ rotate: [6, 4, 6], y: [10, 0, 10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-slate-200 rounded-lg shadow-xl border border-slate-300 origin-bottom-right"
      />
      {/* Middle Sheet */}
      <motion.div 
        animate={{ rotate: [-3, -5, -3], y: [5, 15, 5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute inset-0 bg-slate-100 rounded-lg shadow-2xl border border-slate-200 origin-bottom-left"
      />
      {/* Front Sheet (Hero) */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-white rounded-lg shadow-2xl border border-slate-100 flex flex-col p-8 overflow-hidden"
      >
        <div className="w-full h-32 bg-indigo-50 rounded-md mb-6 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-100 rounded-bl-full opacity-50"></div>
        </div>
        <div className="space-y-3">
            <div className="h-4 bg-slate-100 rounded w-3/4"></div>
            <div className="h-4 bg-slate-100 rounded w-1/2"></div>
            <div className="h-4 bg-slate-100 rounded w-5/6"></div>
        </div>
        <div className="mt-auto flex justify-between items-center">
            <div className="h-8 w-20 bg-slate-900 rounded-full"></div>
            <div className="h-8 w-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            </div>
        </div>
      </motion.div>
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [-20, 0, -20], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -right-12 top-20 bg-white p-4 rounded-xl shadow-lg border border-slate-100 hidden md:block"
      >
        <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-bold text-slate-800">Print Ready</span>
        </div>
      </motion.div>
      
      <motion.div 
         animate={{ y: [20, 0, 20] }}
         transition={{ duration: 5, repeat: Infinity, delay: 1 }}
         className="absolute -left-8 bottom-32 bg-slate-900 text-white px-5 py-3 rounded-full shadow-xl hidden md:block"
      >
         <span className="text-xs font-bold tracking-wide">Instant Quote</span>
      </motion.div>
    </div>
  </div>
);

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
      animate="visible"
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
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="relative pt-32 pb-12 md:pt-48 md:pb-24 px-6 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="mb-8 flex justify-center lg:justify-start"
            >
                 <span className="px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-widest border border-indigo-100/50">
                    Smith Studio®
                </span>
            </motion.div>
            
            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] font-serif font-medium text-slate-900 tracking-tight mb-8">
                <div className="block">
                  <TypewriterText text="Turn Print Work" delay={0.2} />
                </div>
                <div className="block mt-2 sm:mt-0">
                  <TypewriterText text="Into Profit." delay={1.1} className="italic text-slate-400" />
                </div>
            </h1>

            <motion.p 
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10 font-light"
            >
                Professional grade xerography and bespoke design for modern business.
                Upload your files, get instant pricing, and let us handle the craft.
            </motion.p>

            <motion.div 
                initial="hidden"
                animate="visible"
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
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1, duration: 1 }}
               className="mt-16 flex items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
            >
               {/* Simple Trust Logos */}
               <div className="h-6 w-20 bg-slate-300 rounded opacity-50 mix-blend-multiply"></div>
               <div className="h-6 w-20 bg-slate-300 rounded opacity-50 mix-blend-multiply"></div>
               <div className="h-6 w-20 bg-slate-300 rounded opacity-50 mix-blend-multiply"></div>
               <div className="h-6 w-20 bg-slate-300 rounded opacity-50 mix-blend-multiply hidden sm:block"></div>
            </motion.div>
        </div>

        {/* Abstract Graphic */}
        <div className="lg:col-span-5 relative">
            <AbstractGraphic />
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Workflow</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
};

export default Hero;