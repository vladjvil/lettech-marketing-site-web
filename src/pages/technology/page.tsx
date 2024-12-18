import { motion } from 'framer-motion';
import { useTheme } from '../../shared/lib/providers/theme-provider';
import { cn } from '../../shared/lib/cn';
import { FaReact, FaNodeJs, FaJava, FaSwift, FaAndroid, FaDocker, FaAws, FaVuejs, FaPhp, FaAngular } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiKubernetes, SiMongodb, SiPostgresql, SiElasticsearch, SiPython, SiGo, SiRuby, SiFlutter, SiMysql, SiRedis, SiGooglecloud, SiDocker, SiNestjs, SiSpringboot, SiSpring, SiFastapi, SiDjango } from 'react-icons/si';

const technologies = {
  frontend: [
    { name: 'React', icon: <FaReact size={24} className="text-[#61DAFB]" /> },
    { name: 'Vue.js', icon: <FaVuejs size={24} className="text-[#42B883]" /> },
    { name: 'Angular', icon: <FaAngular size={24} className="text-[#DD0031]" /> },
    { name: 'TypeScript', icon: <SiTypescript size={24} className="text-[#3178C6]" /> },
    { name: 'Next.js', icon: <SiNextdotjs size={24} className="text-white" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={24} className="text-[#38B2AC]" /> },
  ],
  backend: [
    { name: 'Node.js', icon: <FaNodeJs size={24} className="text-[#339933]" /> },
    { name: 'Nest.js', icon: <SiNestjs size={24} className="text-[#E0234E]" /> },
    { name: 'Python', icon: <SiPython size={24} className="text-[#3776AB]" /> },
    { name: 'Fast API', icon: <SiFastapi size={24} className="text-[#009688]" /> },
    { name: 'Django', icon: <SiDjango size={24} className="text-[#092E20]" /> },
    { name: 'Java', icon: <FaJava size={24} className="text-[#007396]" /> },
    { name: 'Spring', icon: <SiSpring size={24} className="text-[#6DB33F]" /> },
    { name: 'Go', icon: <SiGo size={24} className="text-[#00ADD8]" /> },
    { name: 'PHP', icon: <FaPhp size={24} className="text-[#777BB4]" /> },
  ],
  mobile: [
    { name: 'React Native', icon: <FaReact size={24} className="text-[#61DAFB]" /> },
    { name: 'Flutter', icon: <SiFlutter size={24} className="text-[#02569B]" /> },
    { name: 'iOS (Swift)', icon: <FaSwift size={24} className="text-[#FA7343]" /> },
    { name: 'Android (Kotlin)', icon: <FaAndroid size={24} className="text-[#3DDC84]" /> },
  ],
  database: [
    { name: 'PostgreSQL', icon: <SiPostgresql size={24} className="text-[#336791]" /> },
    { name: 'MongoDB', icon: <SiMongodb size={24} className="text-[#47A248]" /> },
    { name: 'MySQL', icon: <SiMysql size={24} className="text-[#4479A1]" /> },
    { name: 'Redis', icon: <SiRedis size={24} className="text-[#DC382D]" /> },
    { name: 'Elasticsearch', icon: <SiElasticsearch size={24} className="text-[#005571]" /> },
  ],
  cloud: [
    { name: 'AWS', icon: <FaAws size={24} className="text-[#FF9900]" /> },
    { name: 'Docker', icon: <SiDocker size={24} className="text-[#2496ED]" /> },
    { name: 'Kubernetes', icon: <SiKubernetes size={24} className="text-[#326CE5]" /> },
  ]
};

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

export function TechnologyPage() {
  const { theme } = useTheme();

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
            Our Tech Stack
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-violet-600">
            Cutting-Edge Technologies
          </h1>
          <p className={cn(
            "text-lg md:text-xl max-w-2xl mx-auto leading-relaxed",
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          )}>
            We leverage the latest technologies to build scalable, performant, and maintainable solutions
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className={cn(
            "relative mb-16 p-8 rounded-2xl overflow-hidden",
            theme === 'dark' 
              ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-lg border border-gray-700/50' 
              : 'bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-lg border border-gray-200'
          )}
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Full-Stack Excellence
            </h2>
            <p className={cn(
              "text-lg leading-relaxed max-w-3xl",
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            )}>
              From front-end frameworks to cloud infrastructure, we utilize a comprehensive tech stack to deliver exceptional solutions.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(technologies).map(([category, techs], _) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className={cn(
                "rounded-2xl overflow-hidden backdrop-blur-sm",
                theme === 'dark' 
                  ? 'bg-gray-800/50 border border-gray-700/50' 
                  : 'bg-white/80 border border-gray-200',
                "hover:border-blue-500/50 transition-all duration-300"
              )}
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 capitalize bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {techs.map((tech) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
                        theme === 'dark'
                          ? 'bg-gray-700/50 hover:bg-gray-600/50'
                          : 'bg-gray-50 hover:bg-gray-100'
                      )}
                    >
                      {tech.icon}
                      <span className={
                        cn(
                          "font-medium",
                          theme === "dark" ? "text-gray-400" : "text-black"
                        )
                      }>{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}