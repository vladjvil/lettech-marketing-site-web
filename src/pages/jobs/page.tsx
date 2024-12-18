import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../shared/lib/providers/theme-provider';
import { cn } from '../../shared/lib/cn';
import { MapPin, Clock, Briefcase, X, ChevronRight } from 'lucide-react';
import { useRouter } from 'atomic-router-react';

const jobs = [
  {
  title: 'Senior Frontend Developer',
  location: 'New York, USA',
  type: 'Full-time',
  experience: '5+ years',
  description: 'We are looking for an experienced Frontend Developer to join our team.',
  details: {
  responsibilities: [
  'Develop high-quality user interfaces.',
  'Collaborate with UX/UI designers.',
  'Optimize frontend performance.',
  ],
  requirements: [
  'Experience with React, Vue, or Angular.',
  'Proficient in JavaScript and TypeScript.',
  'Strong knowledge of HTML5, CSS3.',
  ],
  },
  },
  {
  title: 'Backend Engineer',
  location: 'Remote',
  type: 'Full-time',
  experience: '3+ years',
  description: 'Join our backend team to build scalable server-side applications.',
  details: {
  responsibilities: [
  'Design and implement backend services.',
  'Work with databases (SQL and NoSQL).',
  'Collaborate with frontend teams.',
  ],
  requirements: [
  'Experience with Node.js, Python, or Go.',
  'Knowledge of microservices architecture.',
  'Familiar with Docker and Kubernetes.',
  ],
  },
  },
  {
  title: 'Full Stack Developer',
  location: 'London, UK',
  type: 'Full-time',
  experience: '4+ years',
  description: 'Work across the stack, building scalable and maintainable systems.',
  details: {
  responsibilities: [
  'Work on both frontend and backend development.',
  'Implement new features and improve existing ones.',
  'Ensure cross-platform optimization and mobile responsiveness.',
  ],
  requirements: [
  'Proficiency in JavaScript and TypeScript.',
  'Experience with React, Node.js, or similar frameworks.',
  'Familiar with cloud platforms like AWS or GCP.',
  ],
  },
  },
  {
  title: 'DevOps Engineer',
  location: 'Remote',
  type: 'Full-time',
  experience: '3+ years',
  description: 'Join our team to manage infrastructure and CI/CD pipelines.',
  details: {
  responsibilities: [
  'Set up and manage cloud infrastructure.',
  'Automate deployment processes.',
  'Collaborate with developers to ensure smooth deployments.',
  ],
  requirements: [
  'Experience with CI/CD tools (Jenkins, GitLab, etc.).',
  'Strong knowledge of cloud services (AWS, GCP, Azure).',
  'Familiar with configuration management tools (Ansible, Chef).',
  ],
  },
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
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.645, 0.045, 0.355, 1.000]
    }
  }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.645, 0.045, 0.355, 1.000]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.2
    }
  }
};

export function JobsPage() {
  const { theme } = useTheme();
  const [selectedJob, setSelectedJob] = useState(null);
  const router = useRouter();

  return (
    <div className={cn(
      "min-h-screen pt-20 transition-colors duration-300 relative overflow-hidden",
      theme === 'dark' 
        ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
    )}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 py-16 relative"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block text-sm font-semibold mb-4 text-blue-500 tracking-wider uppercase">
            Join Our Team
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-violet-600">
            Career Opportunities
          </h1>
          <p className={cn(
            "text-lg md:text-xl max-w-2xl mx-auto leading-relaxed",
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          )}>
            Join our team of passionate professionals and help shape the future of technology
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="max-w-4xl mx-auto">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "mb-6 rounded-2xl overflow-hidden transition-all duration-300",
                theme === 'dark' 
                  ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white' 
                  : 'bg-white/80 backdrop-blur-sm border border-gray-200',
                "hover:shadow-lg hover:border-blue-500/50"
              )}
            >
              <motion.button
                className="w-full text-left p-6"
                onClick={() => setSelectedJob(job)}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500">
                      {job.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-blue-500" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Briefcase className="w-4 h-4 text-blue-500" />
                        <span>{job.experience}</span>
                      </div>
                    </div>

                    <p className={cn(
                      "text-sm line-clamp-2",
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    )}>
                      {job.description}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 mt-2 text-blue-500" />
                </div>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedJob && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className={cn(
                  "relative w-full max-w-2xl rounded-2xl p-8",
                  theme === 'dark' 
                    ? 'bg-gray-800 border border-gray-700 text-white' 
                    : 'bg-white border border-gray-200'
                )}
              >
                <button
                  onClick={() => setSelectedJob(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <h2 className="text-3xl font-bold mb-6">{selectedJob.title}</h2>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span>{selectedJob.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <span>{selectedJob.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-500" />
                    <span>{selectedJob.experience}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Responsibilities</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {selectedJob.details.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Requirements</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {selectedJob.details.requirements.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 text-center">
                    <motion.button
                      className={cn(
                        "px-8 py-3 rounded-full font-medium",
                        "bg-gradient-to-r from-blue-600 to-violet-600 text-white",
                        "hover:from-blue-700 hover:to-violet-700 transition-all"
                      )}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSelectedJob(null);
                        router.push({
                          path: '/contacts',
                          params: {},
                          query: {},
                          method: 'push',
                        });
                        }
                      }
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}