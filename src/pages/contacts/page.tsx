import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { SocialLinks } from "./ui/SocialLinks";
import { ContactInfo } from "./ui/ContactInfo";
import { ClientForm } from "./ui/ClientForm";
import { CandidateForm } from "./ui/CandidateForm";
import { cn } from '../../shared/lib/cn';
import { useTheme } from '../../shared/lib/providers/theme-provider';
import { Button } from '../../shared/ui/button';

type FormType = 'client' | 'candidate';

const containerVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.645, 0.045, 0.355, 1.000]
    }
  }
};

const formVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.3
    }
  }
};

const DecorativeElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
  </div>
);

export function ContactsPage() {
  const { theme } = useTheme();
  const [activeForm, setActiveForm] = useState<FormType>('client');

  return (
    <div className={cn(
      "min-h-screen pt-20 transition-colors duration-300 relative overflow-hidden",
      theme === 'dark' 
        ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
    )}>
      <DecorativeElements />
      
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="container mx-auto px-4 py-8 md:py-16 relative"
      >
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16 relative"
        >
          <span className="inline-block text-sm font-semibold text-blue-500 mb-4 tracking-wider uppercase">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-6xl md:leading-normal font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-violet-600">
            Let's Build Something Amazing
          </h1>
          <p className={cn(
            "text-lg md:text-xl max-w-2xl mx-auto leading-relaxed",
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          )}>
            Whether you're looking to start a project or join our team, 
            we're here to transform your ideas into reality.
          </p>
        </motion.div>

        {/* Form Type Selection */}
        <motion.div 
          variants={itemVariants}
          className="flex gap-4 justify-center mb-12"
        >
          {(['client', 'candidate'] as const).map((type) => (
            <Button
              key={type}
              variant={activeForm === type ? 'default' : 'outline'}
              size="lg"
              onClick={() => setActiveForm(type)}
              className={cn(
                "min-w-[160px] text-lg font-medium transition-all duration-300 relative overflow-hidden",
                activeForm === type 
                  ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-600 hover:to-violet-600"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400",
              )}
            >
              For {type.charAt(0).toUpperCase() + type.slice(1)}s
              {activeForm === type && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                />
              )}
            </Button>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 max-w-7xl mx-auto"
        >
          {/* Sidebar */}
          <motion.div 
            className="md:col-span-4 lg:col-span-3"
            variants={itemVariants}
          >
            <div className="sticky top-24">
              <div className={cn(
                "rounded-2xl p-8 shadow-lg backdrop-blur-xl",
                theme === 'dark' 
                  ? 'bg-gray-800/40 border border-gray-700/50' 
                  : 'bg-white/80 border border-gray-200'
              )}>
                <SocialLinks />
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <ContactInfo />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div 
            className="md:col-span-8 lg:col-span-9"
            variants={itemVariants}
          >
            <div className={cn(
              "rounded-2xl p-8 shadow-lg backdrop-blur-xl",
              theme === 'dark' 
                ? 'bg-gray-800/40 border border-gray-700/50' 
                : 'bg-white/80 border border-gray-200'
            )}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeForm}
                  variants={formVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {activeForm === 'client' && <ClientForm />}
                  {activeForm === 'candidate' && <CandidateForm />}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}