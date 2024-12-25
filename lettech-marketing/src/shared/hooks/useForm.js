import { useState } from 'react';
import { z } from "zod";

/**
 * Хук для управления формой с валидацией.
 * @param {Object} params - Параметры хука.
 * @param {z.ZodSchema} params.schema - Схема валидации Zod.
 * @param {Function} params.onSubmit - Функция, вызываемая при успешной отправке формы.
 * @returns {Object} - Объект с ошибками и обработчиком отправки формы.
 */
export function useForm({ schema, onSubmit }) {
    const [errors, setErrors] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            event.currentTarget.reset();
            const validatedData = schema.parse(data);
            setErrors({});
            await onSubmit(validatedData);
        } catch (error) {
            if (error instanceof z.ZodError) {
                const formattedErrors = {};
                error.errors.forEach((err) => {
                    if (err.path && err.path.length > 0) {
                        formattedErrors[err.path[0]] = err.message;
                    }
                });
                setErrors(formattedErrors);
            }
        }
    };

    return { errors, handleSubmit };
}
