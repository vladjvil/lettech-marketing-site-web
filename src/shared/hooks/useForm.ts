import { useState } from 'react';
import {z} from "zod";

interface UseFormProps<T> {
	schema: z.ZodSchema<T>;
	onSubmit: (data: T) => void;
}

interface FormErrors {
	[key: string]: string;
}

export function useForm<T>({ schema, onSubmit }: UseFormProps<T>) {
	const [errors, setErrors] = useState<FormErrors>({});

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const data = Object.fromEntries(formData.entries());

		try {
			event.currentTarget.reset();
			const validatedData = schema.parse(data);
			setErrors({});
			await onSubmit(validatedData as T);
		} catch (error) {
			if (error instanceof z.ZodError) {
				const formattedErrors: FormErrors = {};
				error.errors.forEach((err) => {
					if (err.path) {
						formattedErrors[err.path[0]] = err.message;
					}
				});
				setErrors(formattedErrors);
			}
		}
	};

	return { errors, handleSubmit };
}
