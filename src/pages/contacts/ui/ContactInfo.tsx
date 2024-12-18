import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../../shared/lib/providers/theme-provider';
import { cn } from '../../../shared/lib/cn';

export function ContactInfo() {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6 md:space-y-8"
    >
      <div className="flex items-start gap-4">
        <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-500 mt-1" />
        <div>
          <h3 className={cn(
            "text-lg md:text-xl font-bold mb-1 md:mb-2",
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          )}>
            Email Us
          </h3>
          <p className={cn(
            "text-sm md:text-base",
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          )}>
            ceo@lettech.io
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Phone className="w-5 h-5 md:w-6 md:h-6 text-blue-500 mt-1" />
        <div>
          <h3 className={cn(
            "text-lg md:text-xl font-bold mb-1 md:mb-2",
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          )}>
            Call Us
          </h3>
          <p className={cn(
            "text-sm md:text-base",
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          )}>
            +1 (555) 123-4567
          </p>
        </div>
      </div>
    </motion.div>
  );
}