import { motion } from 'framer-motion';
import { useTheme } from '../../shared/lib/providers/theme-provider';
import { cn } from '../../shared/lib/cn';
import { Award, Users, Target, CheckCircle2, Building2, TrendingUp, Code, Globe, Rocket } from 'lucide-react';

const COMPANY_DATA = {
  stats: [
    { number: "6+", label: "Years in EU", gradient: "from-blue-500 to-cyan-400" },
    { number: "200+", label: "Projects Delivered", gradient: "from-indigo-500 to-blue-400" },
    { number: "50+", label: "Expert Team Members", gradient: "from-purple-500 to-pink-400" },
    { number: "30+", label: "Countries Served", gradient: "from-cyan-500 to-teal-400" }
  ],
  features: [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Delivering tailored solutions with cutting-edge technologies for modern business needs",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting businesses across Europe, Asia, and North America with innovative solutions",
      gradient: "from-indigo-500 to-blue-400"
    },
    {
      icon: Rocket,
      title: "Digital Transformation",
      description: "Guiding enterprises through comprehensive technological evolution and modernization",
      gradient: "from-cyan-500 to-teal-400"
    }
  ],
  reasons: [
    {
      icon: CheckCircle2,
      title: "EU-Based Company",
      description: "Operating from Cyprus since 2017, providing reliable and fully compliant EU business services",
      color: "text-emerald-500",
      gradient: "from-emerald-500/10 to-emerald-500/5"
    },
    {
      icon: Building2,
      title: "Strategic Location",
      description: "Ideally positioned between Europe and Asia, offering optimal timezone coverage for global operations",
      color: "text-blue-500",
      gradient: "from-blue-500/10 to-blue-500/5"
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "Demonstrated history of growth and successful project delivery across diverse industries",
      color: "text-purple-500",
      gradient: "from-purple-500/10 to-purple-500/5"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly skilled professionals bringing diverse expertise in modern technologies and methodologies",
      color: "text-orange-500",
      gradient: "from-orange-500/10 to-orange-500/5"
    }
  ]
};

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const staggerChildren = {
  initial: {},
  animate: { transition: { staggerChildren: 0.2 } }
};

export function AboutPage() {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'min-h-screen transition-colors duration-300',
        theme === 'dark' 
          ? 'bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-gray-100' 
          : 'bg-gradient-to-b from-white via-gray-50 to-white text-gray-900'
      )}
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className={cn(
            "absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent_70%)]",
            theme === 'dark' && "opacity-30"
          )} />
          <div className={cn(
            "absolute right-0 bottom-0 bg-[radial-gradient(circle_at_70%_70%,rgba(14,165,233,0.2),transparent_70%)]",
            theme === 'dark' && "opacity-30"
          )} />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6 lg:px-8 pt-32 pb-24 relative"
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="inline-block text-sm font-semibold text-blue-500 mb-4 tracking-wider uppercase">
                About LetTech
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 tracking-tight">
                Your Technology Partner in Cyprus
              </h1>
              <p className={cn(
                "text-xl lg:text-2xl leading-relaxed mx-auto max-w-3xl",
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              )}>
                Since 2017, we've been delivering world-class software solutions from the heart of Mediterranean,
                empowering businesses across the globe.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Stats Section */}
      <div className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 lg:px-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {COMPANY_DATA.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className={cn(
                  'relative p-8 rounded-2xl backdrop-blur-sm',
                  theme === 'dark' 
                    ? 'bg-gray-800/40 border border-gray-700/50' 
                    : 'bg-white/80 shadow-lg shadow-blue-500/5 border border-blue-100/20'
                )}
              >
                <div className="relative z-10">
                  <div className={cn(
                    "text-4xl lg:text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-3",
                    stat.gradient
                  )}>
                    {stat.number}
                  </div>
                  <div className={cn(
                    "text-sm lg:text-base",
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  )}>
                    {stat.label}
                  </div>
                </div>
                <div className={cn(
                  "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-50",
                  stat.gradient.replace('500', '500/5')
                )} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Enhanced Services Section */}
      <div className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 lg:px-8 relative"
        >
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {COMPANY_DATA.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className={cn(
                    'group relative p-8 rounded-2xl overflow-hidden transition-all duration-300',
                    theme === 'dark'
                      ? 'bg-gray-800/40 hover:bg-gray-800/60 border border-gray-700/50'
                      : 'bg-white hover:shadow-xl hover:shadow-blue-500/10 border border-gray-100'
                  )}
                >
                  <div className="relative z-10">
                    <div className={cn(
                      "w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300",
                      theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50',
                      `bg-gradient-to-br ${feature.gradient} group-hover:scale-110`
                    )}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className={cn(
                      "text-base leading-relaxed",
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    )}>{feature.description}</p>
                  </div>
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-5",
                    feature.gradient
                  )} />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Enhanced Why Choose Us Section */}
      <div className="py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 lg:px-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400"
          >
            Why Choose Our Agency?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {COMPANY_DATA.reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className={cn(
                    'group p-8 rounded-2xl transition-all duration-300 relative overflow-hidden',
                    theme === 'dark'
                      ? 'bg-gray-800/40 hover:bg-gray-800/60 border border-gray-700/50'
                      : 'bg-white hover:shadow-xl hover:shadow-blue-500/10 border border-gray-100'
                  )}
                >
                  <div className="relative z-10">
                    <div className={cn(
                      "w-12 h-12 rounded-lg flex items-center justify-center mb-6",
                      theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'
                    )}>
                      <Icon className={cn("w-6 h-6", reason.color)} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
                    <p className={cn(
                      "text-base leading-relaxed",
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    )}>{reason.description}</p>
                  </div>
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    reason.gradient
                  )} />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
