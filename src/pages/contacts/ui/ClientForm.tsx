import { motion } from 'framer-motion';
import { FormField } from './FormField';
import { Loader2, Send } from "lucide-react";
import { useForm } from '../../../shared/hooks/useForm';
import { ClientFormData, clientFormSchema } from '../../../shared/types/contact';
import { Button } from '../../../shared/ui/button';
import { postClientForm } from '../../../shared/api/request';
import { useState } from 'react';

export function ClientForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
  const { errors, handleSubmit } = useForm<ClientFormData>({
    schema: clientFormSchema,
    onSubmit: async (data) => {
		setIsSubmitting(true);
		try {
			await postClientForm(data);	
		} catch(e) {
			console.error("Couldn't send client data");
		} finally {
			setIsSubmitting(false);
		}
	},
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
        Let's discuss your project
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="Name"
            name="name"
            placeholder="Your name"
            error={errors.name}
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            placeholder="Your email"
            error={errors.email}
          />
        </div>

        <FormField
          label="Project Details"
          name="projectDetails"
          placeholder="Tell us about your project"
          isTextArea
          error={errors.projectDetails}
        />

		<div className="relative">
          <Button 
            type="submit" 
            size="lg"
            disabled={isSubmitting}
            className={`
              w-full group relative overflow-hidden
              transition-all duration-300
              bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500
              shadow-[0_0_0_3px_rgba(59,130,246,0.1)]
              disabled:opacity-70 text-white
              ${isSubmitting ? 'pl-4' : 'pl-6'}
            `}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
		</div>
      </form>
    </motion.div>
  );
}