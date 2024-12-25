import { motion } from 'framer-motion';

import { MessageCircle, Mail, User } from 'lucide-react';
import { cn } from '../../../shared/lib/cn';
import { useTheme } from '../../../shared/lib/providers/theme-provider';

export function SocialLinks() {
  const { theme } = useTheme();

  const linkClasses = cn(
    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
    "w-full text-base font-medium",
    theme === 'dark'
      ? 'bg-gray-800/50 hover:bg-gray-700/50 text-white'
      : 'bg-white hover:bg-gray-50 text-gray-900',
    "border",
    theme === 'dark'
      ? 'border-gray-700 hover:border-gray-600'
      : 'border-gray-200 hover:border-gray-300'
  );

  const iconClasses = "w-5 h-5 text-blue-500";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-start space-y-3"
    >
      <a href="https://t.me/LetTech_manager" className={linkClasses}>
        <MessageCircle className={iconClasses} />
        <span>Telegram</span>
      </a>
      <a href="mailto:ceo@lettech.io" className={linkClasses}>
        <Mail className={iconClasses} />
        <span>Email</span>
      </a>
    </motion.div>
  );
}