import { motion } from 'framer-motion';
import { useTheme } from '../../shared/lib/providers/theme-provider';
import { cn } from '../../shared/lib/cn';
import { Code, Smartphone, Globe, Database, Cloud, Lock } from 'lucide-react';

export function ServicesPage() {
  const { theme } = useTheme();

  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored solutions to meet your specific business needs'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern and responsive web applications'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Efficient and scalable database solutions'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Cloud-native applications and migrations'
    },
    {
      icon: Lock,
      title: 'Security',
      description: 'Implementing robust security measures'
    }
  ];

  return (
    <div className={cn(
      "min-h-screen pt-20 transition-colors duration-300",
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    )}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-16"
      >
        <p className="text-sm mx-auto font-semibold text-blue-500 mb-4 tracking-wider uppercase text-center">
                About LetTech
        </p>
        <h1 className="text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Our Services</h1>

        <div className="max-w-3xl mx-auto text-lg opacity-80 mb-16 text-center">
          <p className="mb-6">We offer a comprehensive range of software development services to help your business thrive in the digital age. Whether you're a startup or an established enterprise, our solutions are designed to scale with your needs.</p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="opacity-60 italic"
          >
            "Turning complex challenges into simple, user-friendly solutions."
          </motion.p>
        </div>

        <div className="relative mb-16">
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-600 to-blue-500 opacity-40 rounded-lg"></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative z-10 text-center text-white p-8 rounded-lg shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-6">Our Process</h2>
            <p className="text-lg opacity-80">We follow a streamlined process that ensures quality, efficiency, and seamless communication throughout every stage of your project.</p>
            <motion.div
              className="mt-6 text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl font-bold text-yellow-500">Step 1: </span> Discovery & Strategy
            </motion.div>
            <motion.div
              className="mt-6 text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl font-bold text-yellow-500">Step 2: </span> Design & Development
            </motion.div>
            <motion.div
              className="mt-6 text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl font-bold text-yellow-500">Step 3: </span> Deployment & Support
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="my-16 p-12 rounded-xl shadow-lg bg-gradient-to-r from-purple-600 to-indigo-600"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-6">Our Services</h2>
          <p className="text-lg text-white opacity-80 text-center mb-8">Our diverse range of services ensures that we can address all of your digital needs with precision and expertise. Whether it’s building from the ground up or scaling your existing infrastructure, we are here to help you succeed.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "p-8 rounded-xl shadow-xl transform hover:scale-105 transition duration-300",
                  theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                )}
              >
                <service.icon className="w-12 h-12 text-blue-600 mb-4 transition-all duration-300" />
                <h3 className="text-2xl font-bold mb-4 hover:text-purple-600 transition-colors duration-300">{service.title}</h3>
                <p className="opacity-80 hover:opacity-100 transition-all duration-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center relative overflow-hidden rounded-lg">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 0.6 }}
    className="container mx-auto px-6 md:px-16 relative z-10"
  >
    <h2 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 border-b-4 border-yellow-500 pb-3">
      Let’s Build Something Amazing Together
    </h2>
    <p className="text-lg mb-10 max-w-3xl mx-auto opacity-90 border-b-2 border-gray-200 pb-8">
      We specialize in delivering top-notch digital solutions to help your business grow and succeed. No matter the size or scope, we are ready to bring your ideas to life with innovation and expertise.
    </p>

    <motion.button
      whileHover={{
        scale: 1.1,
        rotate: 2,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      }}
      whileTap={{ scale: 0.95 }}
      className="px-10 py-5 bg-yellow-500 text-white font-bold rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300 ease-in-out border-2 border-yellow-600 hover:border-yellow-500"
    >
      Contact Us
    </motion.button>
  </motion.div>

  <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-600 to-purple-700 opacity-30 rounded-lg"></div>

  <motion.div
    initial={{ x: '-100%' }}
    animate={{ x: '0%' }}
    transition={{ type: 'spring', stiffness: 60, delay: 1.2 }}
    className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-r from-indigo-800 to-purple-600 rounded-t-lg"
  />
  
  <motion.div
    initial={{ x: '100%' }}
    animate={{ x: '0%' }}
    transition={{ type: 'spring', stiffness: 80, delay: 1.5 }}
    className="absolute top-0 right-0 w-full h-32 bg-gradient-to-r from-indigo-700 to-purple-500 opacity-20 rounded-b-lg"
  />
</div>

      </motion.div>
    </div>
  );
}
