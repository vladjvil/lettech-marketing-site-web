import { motion } from 'framer-motion';
import { FormField } from './FormField';
import { Send, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { CandidateFormData, candidateFormSchema } from '../../../shared/types/contact';
import { useForm } from '../../../shared/hooks/useForm';
import { Button } from '../../../shared/ui/button';
import { FileInput } from '../../../shared/ui/file-input';
import { postCandidateForm } from '../../../shared/api/request';

export function CandidateForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { errors, handleSubmit } = useForm<CandidateFormData>({
	schema: candidateFormSchema,
	onSubmit: async (data) => {
	  setIsSubmitting(true);
  
	  const formData = new FormData();
	  formData.append("name", data.name);
	  formData.append("email", data.email);
	  formData.append("position", data.position);
	  formData.append("experience", data.experience);

	  if (data.cv) {
		formData.append("cv", data.cv as File);
	  } else {
		setIsSubmitting(false);
		return;
	  }
  
	  try {
		await postCandidateForm(formData);
		alert("Form submitted successfully!");
	  } catch (e) {
		console.error("Couldn't send candidate form", e);
		alert("Failed to submit the form, please try again.");
	  } finally {
		setIsSubmitting(false);
	  }
	},
  });
  

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/10"
    >
      <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
        Join Our Team
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="Name"
            name="name"
            placeholder="John Doe"
            error={errors.name}
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            placeholder="john@example.com"
            error={errors.email}
          />
        </div>

        <FormField
          label="Position"
          name="position"
          placeholder="e.g. Senior Frontend Developer"
          error={errors.position}
        />

        <FormField
          label="Experience"
          name="experience"
          placeholder="Tell us about your relevant experience and skills..."
          isTextArea
          rows={6}
          error={errors.experience}
        />

        <FileInput
          label="Upload CV"
          name="cv"
          error={errors.cv}
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
                  Submit Application
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