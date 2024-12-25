import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Утилита для объединения классов с учетом правил Tailwind CSS.
 * @param {...(string | undefined | null | boolean)[]} inputs - Список классов для объединения.
 * @returns {string} - Объединенная строка классов.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
