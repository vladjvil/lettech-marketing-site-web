import { cn } from '../../../shared/lib/cn';
import { useTheme } from '../../../shared/lib/providers/theme-provider';

export function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  error,
  isTextArea = false,
  rows = 4,
}) {
  const { theme } = useTheme();

  const inputClasses = cn(
    "w-full px-4 py-3 rounded-lg transition-all duration-200",
    theme === 'dark' 
      ? 'bg-gray-800/50 text-white placeholder-gray-400 focus:bg-gray-800'
      : 'bg-white text-gray-900 placeholder-gray-500 focus:bg-gray-50',
    "border",
    theme === 'dark'
      ? 'border-gray-700 focus:border-blue-500'
      : 'border-gray-200 focus:border-blue-400',
    "outline-none focus:ring-2",
    theme === 'dark'
      ? 'focus:ring-blue-500/20'
      : 'focus:ring-blue-400/20',
    error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
  );

  return (
    <div>
      <label 
        className={cn(
          "block text-sm font-medium mb-2",
          theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
        )} 
        htmlFor={name}
      >
        {label}
      </label>

      {isTextArea ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          className={cn(inputClasses, "resize-none")}
          placeholder={placeholder}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          className={inputClasses}
          placeholder={placeholder}
        />
      )}

      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
