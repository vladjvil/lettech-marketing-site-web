import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const contactItems = [
  {
    icon: Mail,
    title: "Email Us",
    content: "info@outstaff.io",
    delay: 0.1,
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (555) 123-4567",
    delay: 0.2,
    gradient: "from-violet-500 to-violet-600"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "123 Tech Street\nNew York, NY 10001",
    delay: 0.3,
    gradient: "from-emerald-500 to-emerald-600"
  }
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: item.delay }}
          className="group"
        >
          <div className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/5">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${item.gradient} group-hover:scale-110 transition-transform`}>
              <item.icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="opacity-80 text-sm whitespace-pre-line">
                {item.content}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}