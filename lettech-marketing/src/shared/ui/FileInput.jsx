import { Upload, X } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../lib/providers/theme-provider';
import { cn } from '../lib/cn';

export function FileInput({ label, name, error }) {
  const { theme } = useTheme();
  const [fileName, setFileName] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  const handleFileRemove = () => {
    setFileName(null);
    const inputElement = document.getElementById(name);
    if (inputElement) {
      inputElement.value = '';
    }
  };

  return (
    <div>
      <label className={cn(
        "block text-sm font-medium mb-2",
        theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
      )}>
        {label}
      </label>
      <div className="relative">
        <label className={cn(
          "flex items-center gap-2 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200",
          theme === 'dark'
            ? 'bg-gray-800/50 hover:bg-gray-700/50 text-white'
            : 'bg-white hover:bg-gray-50 text-gray-900',
          "border",
          theme === 'dark'
            ? 'border-gray-700 hover:border-gray-600'
            : 'border-gray-200 hover:border-gray-300'
        )}>
          <Upload className="w-5 h-5 text-blue-500" />
          <span>{fileName || 'Choose file'}</span>
          <input
            id={name}
            name={name}
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
        
        {fileName && (
          <button
            type="button"
            onClick={handleFileRemove}
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2",
              "p-1 rounded-full transition-colors duration-200",
              theme === 'dark'
                ? 'hover:bg-gray-700 text-gray-400 hover:text-white'
                : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'
            )}
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
