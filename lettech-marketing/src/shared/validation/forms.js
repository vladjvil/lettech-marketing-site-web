import { z } from 'zod';

const clientFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  projectDetails: z.string().min(10, 'Please provide more details about your project'),
});

const candidateFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  position: z.string().min(2, 'Position must be at least 2 characters'),
  experience: z.string().min(10, 'Please provide more details about your experience'),
  cv: z.any().refine(
    (file) => file instanceof File && file.type === 'application/pdf',
    'Please upload a PDF file'
  ),
});

export { clientFormSchema, candidateFormSchema }