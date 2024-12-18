import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '../../shared/lib/providers/theme-provider';
import { cn } from '../../shared/lib/cn';
import { ArrowDown, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const allCases = [
  { title: 'AI-Powered Chatbot', description: 'Developed an AI-powered chatbot to handle customer inquiries and provide 24/7 support.', image: 'https://cdn.analyticsvidhya.com/wp-content/uploads/2023/04/5208996-1.jpg', category: 'Software AI integration' },
  { title: 'Smart Home Automation', description: 'Implemented an intelligent system for controlling smart home devices, enhancing user convenience.', image: 'https://cdn.motocms.com/src/868x580/84600/84608-original-1200.jpg', category: 'Web IoT Solutions' },
  { title: 'Blockchain Integration', description: 'Developed a blockchain-based system for secure and transparent transactions.', image: 'https://i.ytimg.com/vi/nidmDGwJ-Jw/maxresdefault.jpg', category: 'Software Blockchain integration' },
  { title: 'SaaS Platform Development', description: 'Built a SaaS platform for small businesses to manage their inventory, sales, and customer relationships.', image: 'https://www.beecoded.io/wp-content/uploads/2024/07/saas-development.webp', category: 'SaaS' },
  { title: 'AI-Powered Analytics Tool Integration', description: 'Developed an AI-powered analytics tool for predictive analysis and real-time data insights.', image: 'https://digital.ai/wp-content/uploads/2022/11/agility_productscreenshot.png', category: 'Data Science/Web' },
  { title: 'IoT Monitoring System', description: 'Built an IoT monitoring system for real-time tracking and predictive maintenance in industrial operations.', image: 'https://images.ctfassets.net/aw6mkmszlj4x/3slZtMQ41dTlsHkOrwCYs2/a4542fc2df70a838df81eb20ee5d4f6a/Logit.io.png', category: 'IoT' },
  { title: 'Cloud-Based Collaboration Tool', description: 'Developed a cloud-based collaboration platform with real-time document sharing and editing.', image: 'https://150763658.v2.pressablecdn.com/wp-content/uploads/2018/11/Asana-1024x513.webp', category: 'Collaboration' },
  { title: 'Real Estate Platform', description: 'Designed a real estate platform to connect buyers, sellers, and agents, with AI-powered property recommendations.', image: 'https://www.artlebedev.com/strana-development/strana-development-billboard.jpg', category: 'Real Estate' },
  { title: 'Automated Data Backup System', description: 'Developed an automated data backup solution for secure and reliable data storage.', image: 'https://www.softwaredefinedautomation.io/wp-content/uploads/2024/08/Backup-created-jpg.webp', category: 'Data Security' },
  { title: 'AR Mobile App', description: 'Developed an augmented reality mobile app for virtual product trials and experiences.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_67vdxnXDd_lM-mq5Q1QBCFZwJJe3wqWj-w&s', category: 'Augmented Reality' },
  { title: 'Healthcare Mobile App', description: 'Built a mobile app for healthcare providers to manage patient records and appointments.', image: 'https://www.medhelpinc.com/wp-content/uploads/2017/09/MedHelp-Inc.-Website-Screenshot.jpeg', category: 'Healthcare' },
  { title: 'Video Streaming Platform', description: 'Created a video streaming platform with live broadcasting, on-demand content, and subscriptions.', image: 'https://samesound.ru/wp-content/uploads/2024/08/kak-perenesti-video-v-rutube-iz-youtube-instrukciya-po-perenosu-1.jpg', category: 'Media & Entertainment' },
  { title: 'Event Management System', description: 'Developed a system for event registration, ticket sales, and attendee management.', image: 'https://logtime.me/images/en/mockups-min.png', category: 'Event Management' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.645, 0.045, 0.355, 1.000]
    }
  }
};

export function CasesPage() {
  const { theme } = useTheme();
  const [visibleCases, setVisibleCases] = useState(6);
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);

  const handleShowMore = () => {
    setVisibleCases(prev => Math.min(prev + 6, allCases.length));
  };

  return (
    <div className={cn(
      "min-h-screen pt-20 transition-colors duration-300 relative overflow-hidden",
      theme === 'dark' 
        ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
    )}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 py-16 relative"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-blue-500 mb-4 tracking-wider uppercase">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-violet-600">
            Innovative Solutions
          </h1>
          <p className={cn(
            "text-lg md:text-xl max-w-2xl mx-auto leading-relaxed",
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          )}>
            Discover how we've helped businesses transform and thrive in the digital age
          </p>
        </motion.div>
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          <AnimatePresence mode="wait">
            {allCases.slice(0, visibleCases).map((caseItem, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                layout
                className={cn(
                  "group relative rounded-2xl overflow-hidden shadow-lg",
                  theme === 'dark' 
                    ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50' 
                    : 'bg-white/80 backdrop-blur-sm border border-gray-200'
                )}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                onHoverStart={() => setHoveredCase(index)}
                onHoverEnd={() => setHoveredCase(null)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    "flex items-end justify-between p-6"
                  )}>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className={
                    cn(
                      "text-xl font-semibold mb-3 group-hover:text-blue-500 transition-colors",
                      theme === "dark" ? "text-gray-200" : "text-black"
                    )
                  }>
                    {caseItem.title}
                  </h2>
                  <p className={cn(
                    "text-sm mb-4 line-clamp-2",
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  )}>
                    {caseItem.description}
                  </p>
                  <span className={cn(
                    "inline-block text-sm font-medium px-3 py-1 rounded-full transition-colors",
                    theme === 'dark' 
                      ? 'bg-blue-500/20 text-blue-300' 
                      : 'bg-blue-50 text-blue-600'
                  )}>
                    {caseItem.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {visibleCases < allCases.length && (
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-16"
          >
            <motion.button
              onClick={handleShowMore}
              className={cn(
                "group flex items-center gap-3 px-8 py-4 rounded-full",
                "bg-gradient-to-r from-blue-600 to-violet-600 text-white",
                "hover:from-blue-700 hover:to-violet-700 transition-all duration-300",
                "font-medium text-lg shadow-lg hover:shadow-xl"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Load More Cases</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}