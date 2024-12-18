import { motion } from 'framer-motion';
import { ArrowRight, Code, Briefcase, Users, ChevronRight, Globe, Shield } from 'lucide-react';
import { useTheme } from '../../shared/lib/providers/theme-provider';
import { cn } from '../../shared/lib/cn';
import { useRouter } from 'atomic-router-react';

const features = [
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Custom Development',
    description: 'Tailored software solutions built with cutting-edge technologies',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Global Talent Pool',
    description: 'Access to top-tier developers from around the world',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Security First',
    description: 'Enterprise-grade security measures and best practices',
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: 'Strategic Consulting',
    description: 'Expert guidance for digital transformation',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Team Augmentation',
    description: 'Seamless integration with your existing teams',
  },
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

export function HomePage() {
  const { theme } = useTheme();
  const router = useRouter();

  const onGetStarted = () => {
    router.push({
      path: '/contacts',
      params: {},
      query: {},
      method: 'push',
    });
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
        className="container mx-auto px-4 relative"
      >
        <motion.section variants={itemVariants} className="py-20 text-center">
          <span className="inline-block text-sm font-semibold text-blue-500 mb-4 tracking-wider uppercase">
            Welcome to LetTech
          </span>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-violet-600">
            Transform Your Digital Vision
          </h1>
          <p className={cn(
            "text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8",
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          )}>
            Partner with elite developers and accelerate your digital transformation journey
          </p>
          <motion.button
            onClick={onGetStarted}
            className={cn(
              "group flex items-center gap-2 px-8 py-4 rounded-full mx-auto",
              "bg-gradient-to-r from-blue-600 to-violet-600 text-white",
              "hover:from-blue-700 hover:to-violet-700 transition-all duration-300",
              "font-medium text-lg shadow-lg hover:shadow-xl"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.section>

        <motion.section variants={itemVariants} className="py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={cn(
                  "group p-8 rounded-2xl backdrop-blur-sm transition-all duration-300",
                  theme === 'dark'
                    ? 'bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50'
                    : 'bg-white/80 border border-gray-200 hover:bg-gray-50/80',
                  "hover:border-blue-500/50"
                )}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 text-blue-500 transition-colors group-hover:text-blue-400">
                  {feature.icon}
                </div>
                <h3 className={
                  cn(
                    "text-xl font-bold mb-2",
                    theme === "dark" ? "text-gray-200" : "text-black" 
                  )
                }>{feature.title}</h3>
                <p className={cn(
                  "text-sm leading-relaxed",
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                )}>
                  {feature.description}
                </p>

              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={itemVariants}
          className={cn(
            "my-20 p-12 rounded-2xl text-center relative overflow-hidden",
            theme === 'dark'
              ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-lg border border-gray-700/50'
              : 'bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-lg border border-gray-200'
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Ready to Start Your Project?
          </h2>
          <p className={cn(
            "text-lg max-w-2xl mx-auto mb-8",
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          )}>
            Let's discuss how we can help bring your ideas to life with our expert development team.
          </p>
          <motion.button
            onClick={onGetStarted}
            className="group flex items-center gap-2 px-8 py-4 rounded-full mx-auto bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.section>
      </motion.div>
    </div>
  );
}